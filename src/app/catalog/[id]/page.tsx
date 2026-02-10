import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { fetchBatchesFromStrapi } from '@/utils/fetchBatches';
import { Metadata } from "next";

interface Product {
    id: number;
    documentId: string;
    title: string;
    tags?: Array<{
        id: number;
        title: string;
        // Add other tag properties if needed
    }>;
    createdAt: string;
    // ... other product properties
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;
    
    try {
        const categoryRes = await fetch(categoryUrl, { 
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (categoryRes.ok) {
            const categoryData = await categoryRes.json();
            const categoryTitle = categoryData?.title || 'Категория';
            const productCount = categoryData?.products?.length || 0;
            
            return generateMetadataUtil({
                title: `${categoryTitle} | MPPSHOP - Купить полиграфию в Беларуси`,
                description: `${categoryTitle} в интернет-магазине MPPSHOP. ${productCount > 0 ? `Более ${productCount} товаров. ` : ''}Качественная полиграфическая продукция. Доставка по Беларуси. Скидки до 20%. Производство с 2014 года. Цены производителя.`,
                keywords: `${categoryTitle.toLowerCase()}, купить ${categoryTitle.toLowerCase()}, ${categoryTitle.toLowerCase()} беларусь, ${categoryTitle.toLowerCase()} минск, полиграфия mppshop`,
            });
        }
    } catch (error) {
        console.error('Error fetching category for metadata:', error);
    }

    return generateMetadataUtil({
        title: "Категория товаров | MPPSHOP - Полиграфическая продукция",
        description: "Категория полиграфических товаров в интернет-магазине MPPSHOP. Качественная продукция, доставка по Беларуси, выгодные цены.",
        keywords: "категория полиграфия, товары mppshop, полиграфическая продукция беларусь",
    });
}

export default async function SingleCatalogPage({ params }: { params: { id: string } }) {
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;
    const tagsUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getTagsForCategory/${params.id}`;

    const [categoryRes, tagsRes, batchesOrder] = await Promise.all([
        fetch(categoryUrl, {
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' },
        }),
        fetch(tagsUrl, {
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' },
        }),
        fetchBatchesFromStrapi(),
    ]);

    const tagsData = await tagsRes.json();
    const categoryData = await categoryRes.json();

    if (!categoryRes.ok) {
        throw new Error(`Failed to fetch category: ${categoryRes.statusText}`);
    }
    if (!tagsRes.ok) {
        throw new Error(`Failed to fetch tags: ${tagsRes.statusText}`);
    }
    if (!categoryData) {
        notFound();
    }

    // 1. Products constant
    const products = categoryData.products || [];

    // 2. data — группы по тегам (для табов/фильтров), uniqueProducts — все продукты категории без дублей (для группировки по батчу)
    const tagsProductsData = tagsData?.data || [];
    const uniqueProducts = tagsData?.uniqueProducts || [];
    
    const allTags = [
        ...products.flatMap((product: Product) => product.tags || []),
    ];

    // Create a Map to store unique tags by their title
    const uniqueTagsMap = new Map();
    
    allTags.forEach(tag => {
        if (tag?.title) {
            const normalizedTitle = tag.title.trim().toLowerCase();
            if (!uniqueTagsMap.has(normalizedTitle)) {
                uniqueTagsMap.set(normalizedTitle, {
                    id: tag.id,
                    title: tag.title
                });
            }
        }
    });

    const tags = Array.from(uniqueTagsMap.values());

    // Логирование данных с бэкенда для отладки дубликатов
    const productsFromCategory = (categoryData?.products || []).length;
    const productIdsFromCategory = (categoryData?.products || []).map((p: any) => p?.id ?? p?.documentId).filter(Boolean);
    const uniqueIdsFromCategory = new Set(productIdsFromCategory).size;
    console.log('[Catalog] Category response:', {
        categoryTitle: categoryData?.title,
        productsCount: productsFromCategory,
        uniqueProductIdsCount: uniqueIdsFromCategory,
        hasDuplicatesInCategory: productsFromCategory !== uniqueIdsFromCategory,
        productIds: productIdsFromCategory,
    });
    console.log('[Catalog] tagsProductsData (from getTagsForCategory):', {
        groupsCount: tagsProductsData.length,
        groups: tagsProductsData.map((g: any) => ({
            title: g?.title,
            productsCount: g?.products?.length ?? 0,
            productIds: (g?.products ?? []).map((p: any) => p?.id ?? p?.documentId),
            productSlugs: (g?.products ?? []).map((p: any) => p?.slug),
        })),
        totalProductsAcrossGroups: tagsProductsData.reduce((sum: number, g: any) => sum + (g?.products?.length ?? 0), 0),
    });

    return (
        <CatalogView
            data={categoryData}
            products={products}
            tags={tags}
            tagsProductsData={tagsProductsData}
            uniqueProducts={uniqueProducts}
            batchesOrder={batchesOrder}
        />
    );
} 