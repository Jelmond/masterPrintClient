import { CatalogView } from '@/views/CatalogView/CatalogView';
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Бестселлеры | MPPSHOP",
  description: "Популярные товары и бестселлеры в интернет-магазине MPPSHOP. Самые востребованные полиграфические изделия.",
});

interface Product {
    id: number;
    documentId: string;
    title: string;
    isBestseller?: boolean;
    tags?: Array<{
        id: number;
        title: string;
    }>;
    createdAt: string;
}

export default async function BestsellersPage() {
    // Fetch bestsellers from API
    // In server components, we can use absolute URL or call Strapi directly
    // Using Strapi directly for consistency with other pages
    const bestsellersUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[isBestseller][$eq]=true&populate=*`;
    
    const bestsellersRes = await fetch(bestsellersUrl, { 
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!bestsellersRes.ok) {
        throw new Error(`Failed to fetch bestsellers: ${bestsellersRes.statusText}`);
    }

    const bestsellersData = await bestsellersRes.json();
    const allProducts = bestsellersData?.data || [];

    if (allProducts.length === 0) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '80px 216px'
            }}>
                <p style={{ fontSize: '24px', color: '#666' }}>Бестселлеров пока нет</p>
            </div>
        );
    }

    // Group products by tags
    const tagsMap = new Map<string, Array<any>>();
    
    allProducts.forEach((product: Product) => {
        if (product.tags && product.tags.length > 0) {
            product.tags.forEach((tag) => {
                const tagTitle = tag.title;
                if (!tagsMap.has(tagTitle)) {
                    tagsMap.set(tagTitle, []);
                }
                tagsMap.get(tagTitle)!.push(product);
            });
        } else {
            // If product has no tags, put it in "Без категории"
            const defaultTag = "Без категории";
            if (!tagsMap.has(defaultTag)) {
                tagsMap.set(defaultTag, []);
            }
            tagsMap.get(defaultTag)!.push(product);
        }
    });

    // Convert map to array format expected by CatalogView
    const tagsProductsData = Array.from(tagsMap.entries()).map(([title, products]) => ({
        title,
        products
    }));

    // Get all unique tags
    const uniqueTagsMap = new Map();
    allProducts.forEach((product: Product) => {
        if (product.tags) {
            product.tags.forEach(tag => {
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
        }
    });

    const tags = Array.from(uniqueTagsMap.values());

    // Create a mock category data structure
    const categoryData = {
        id: 'bestsellers',
        title: 'Бестселлеры',
        products: allProducts
    };

    return (
        <CatalogView 
            data={categoryData} 
            products={allProducts} 
            tags={tags} 
            tagsProductsData={tagsProductsData}
            showCategories={false}
        />
    );
}

