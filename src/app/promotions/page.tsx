import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Акции и скидки на полиграфию | MPPSHOP - Выгодные предложения",
  description: "Акции и специальные предложения MPPSHOP. Скидки на полиграфическую продукцию до 20%. Промокоды и выгодные предложения. Распродажа открыток, конвертов, упаковки. Экономьте на качественной полиграфии.",
  keywords: "акции mppshop, скидки на полиграфию, промокоды mppshop, распродажа открыток, специальные предложения, выгодная полиграфия",
});

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

export default async function SingleCatalogPage({ params }: { params: { id: string } }) {
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;
    const tagsUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getTagsForCategory/${params.id}`;
    console.log('Fetching category from URL:', categoryUrl);

    const categoryRes = await fetch(categoryUrl, { 
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const tagsRes = await fetch(tagsUrl, { 
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!categoryRes.ok) {
        throw new Error(`Failed to fetch category: ${categoryRes.statusText}`);
    }

    if (!tagsRes.ok) {
        throw new Error(`Failed to fetch tags: ${tagsRes.statusText}`);
    }

    const tagsData = await tagsRes.json();
    const categoryData = await categoryRes.json();

    if (!categoryData) {
        notFound();
    }

    // 1. Products constant
    const products = categoryData.products || [];

    // 2. Tags constant - collecting all unique tags from both products and tagsProductsData
    const tagsProductsData = tagsData?.data || [];
    
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

    return (
        <CatalogView data={categoryData} products={products} tags={tags} tagsProductsData={tagsProductsData} />
    );
} 