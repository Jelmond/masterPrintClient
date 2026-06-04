import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { fetchBatchesFromStrapi } from '@/utils/fetchBatches';
import { Metadata } from "next";
import { CatalogCategorySeoContent } from '../CatalogCategorySeoContent';

interface Product {
    id: number;
    documentId: string;
    title: string;
    tags?: Array<{ id: number; title: string; slug?: string }>;
    createdAt: string;
}

export async function generateMetadata({ params }: { params: { id: string; tagSlug: string } }): Promise<Metadata> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;
    const tagsUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getTagsForCategory/${params.id}`;

    try {
        const [categoryRes, tagsRes] = await Promise.all([
            fetch(categoryUrl, { next: { revalidate: 60 }, headers: { 'Content-Type': 'application/json' } }),
            fetch(tagsUrl, { next: { revalidate: 60 }, headers: { 'Content-Type': 'application/json' } }),
        ]);

        if (categoryRes.ok && tagsRes.ok) {
            const categoryData = await categoryRes.json();
            const tagsData = await tagsRes.json();
            const categoryTitle = categoryData?.title || 'Категория';
            const tagsProductsData = tagsData?.data || [];

            const tagGroup = tagsProductsData.find((g: any) => g?.slug === params.tagSlug);
            const tagTitle = tagGroup?.title || params.tagSlug;
            const productCount = tagGroup?.products?.length || 0;

            return generateMetadataUtil({
                title: `${tagTitle} — ${categoryTitle} | купить в Минске и Беларуси`,
                description: `Купить ${tagTitle.toLowerCase()} (${categoryTitle.toLowerCase()}) в Минске и по всей Беларуси.${productCount > 0 ? ` В каталоге ${productCount}+ товаров.` : ''} Качественная полиграфическая продукция от производителя. Доставка по всей Беларуси.`,
                keywords: `${tagTitle.toLowerCase()}, ${categoryTitle.toLowerCase()}, купить ${tagTitle.toLowerCase()}, ${tagTitle.toLowerCase()} беларусь, полиграфия mppshop`,
                url: `${siteUrl}/catalog/${params.id}/${params.tagSlug}`,
            });
        }
    } catch (error) {
        console.error('Error fetching category/tag for metadata:', error);
    }

    return generateMetadataUtil({
        title: "Категория товаров | MPPSHOP",
        description: "Полиграфическая продукция в интернет-магазине MPPSHOP.",
    });
}

export default async function TagCatalogPage({ params }: { params: { id: string; tagSlug: string } }) {
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;
    const tagsUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getTagsForCategory/${params.id}`;

    const [categoryRes, tagsRes, batchesOrder] = await Promise.all([
        fetch(categoryUrl, { next: { revalidate: 60 }, headers: { 'Content-Type': 'application/json' } }),
        fetch(tagsUrl, { next: { revalidate: 60 }, headers: { 'Content-Type': 'application/json' } }),
        fetchBatchesFromStrapi(),
    ]);

    if (!categoryRes.ok || !tagsRes.ok) {
        notFound();
    }

    const categoryData = await categoryRes.json();
    const tagsData = await tagsRes.json();

    if (!categoryData) {
        notFound();
    }

    const products = categoryData.products || [];
    const tagsProductsData = tagsData?.data || [];
    const uniqueProducts = tagsData?.uniqueProducts || [];

    // Verify tag slug exists
    const matchingTag = tagsProductsData.find((g: any) => g?.slug === params.tagSlug);
    if (!matchingTag) {
        notFound();
    }

    const allTags = products.flatMap((product: Product) => product.tags || []);
    const uniqueTagsMap = new Map();
    allTags.forEach((tag: any) => {
        if (tag?.title) {
            const normalizedTitle = tag.title.trim().toLowerCase();
            if (!uniqueTagsMap.has(normalizedTitle)) {
                uniqueTagsMap.set(normalizedTitle, {
                    id: tag.id,
                    title: tag.title,
                    slug: tag.slug,
                });
            }
        }
    });
    const tags = Array.from(uniqueTagsMap.values());

    return (
        <>
            <CatalogView
                data={categoryData}
                products={products}
                tags={tags}
                tagsProductsData={tagsProductsData}
                uniqueProducts={uniqueProducts}
                batchesOrder={batchesOrder}
                catalogSlug={params.id}
                initialTagSlug={params.tagSlug}
            />
            <CatalogCategorySeoContent slug={params.id} />
        </>
    );
}
