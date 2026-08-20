import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { fetchBatchesFromStrapi } from '@/utils/fetchBatches';
import { Metadata } from "next";
import { CatalogCategorySeoContent } from '../CatalogCategorySeoContent';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { SITE_RATING } from '@/utils/siteRating';
import { RelatedTags } from '@/components/RelatedTags/RelatedTags';
import { CATALOG_TAG_META_OVERRIDES } from './tagMetaOverrides';

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

            const override = CATALOG_TAG_META_OVERRIDES[`${params.id}/${params.tagSlug}`];

            return generateMetadataUtil({
                title: override?.title ?? `${tagTitle} — ${categoryTitle} | купить в Минске и Беларуси`,
                description: override?.description ?? `Купить ${tagTitle.toLowerCase()} (${categoryTitle.toLowerCase()}) в Минске и по всей Беларуси.${productCount > 0 ? ` В каталоге ${productCount}+ товаров.` : ''} Качественная полиграфическая продукция от производителя. Доставка по всей Беларуси.`,
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

    const tagTitle = matchingTag.title || params.tagSlug;
    const categoryTitle = categoryData?.title || 'Каталог';
    const override = CATALOG_TAG_META_OVERRIDES[`${params.id}/${params.tagSlug}`];
    const h1Text = override?.h1 || tagTitle;
    const tagProducts: Array<{ price?: number | string }> = matchingTag?.products || [];
    const tagPrices = tagProducts
        .map((p) => Number(p?.price))
        .filter((n) => Number.isFinite(n) && n > 0);
    const lowPrice = tagPrices.length ? Math.min(...tagPrices) : null;
    const highPrice = tagPrices.length ? Math.max(...tagPrices) : null;

    const tagJsonLd: Record<string, unknown> = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: h1Text,
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: SITE_RATING.bestRating,
            ratingValue: SITE_RATING.ratingValue,
            ratingCount: SITE_RATING.reviewCount,
        },
    };
    if (lowPrice != null && highPrice != null) {
        tagJsonLd.offers = {
            '@type': 'AggregateOffer',
            priceCurrency: 'BYN',
            lowPrice: String(lowPrice),
            highPrice: String(highPrice),
            offerCount: String(tagPrices.length),
        };
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tagJsonLd) }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Каталог', href: '/catalog' },
                    { label: categoryTitle, href: `/catalog/${params.id}` },
                    { label: h1Text },
                ]}
            />
            <CatalogView
                data={categoryData}
                products={products}
                tags={tags}
                tagsProductsData={tagsProductsData}
                uniqueProducts={uniqueProducts}
                batchesOrder={batchesOrder}
                catalogSlug={params.id}
                initialTagSlug={params.tagSlug}
                h1Override={override?.h1}
            />
            <RelatedTags
                catalogSlug={params.id}
                tags={tagsProductsData}
                currentTagSlug={params.tagSlug}
                heading="Другие подборки"
            />
            <CatalogCategorySeoContent slug={params.id} tagSlug={params.tagSlug} />
        </>
    );
}
