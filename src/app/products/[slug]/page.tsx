import { CanBeInteresting } from '@/components/CanBeInteresting/CanBeInteresting';
import { ProductView } from '@/views/ProductView/ProductView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
    
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${params.slug}&populate=*`,
            { cache: 'no-store' }
        );
        
        if (res.ok) {
            const data = await res.json();
            const product = data?.data?.[0];
            
            if (product) {
                const productTitle = product?.title || 'Товар';
                const price = product?.price || '';
                const category = product?.category?.title || '';
                const imageUrl = product?.image?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}` : '/open-graph.png';
                
                // Создаем SEO-оптимизированное описание
                let description = product?.description || `${productTitle} - качественная полиграфическая продукция от MPPSHOP.`;
                if (price) {
                    description += ` Цена: ${price} BYN.`;
                }
                if (category) {
                    description += ` Категория: ${category}.`;
                }
                description += ` Доставка по Беларуси. Скидки до 20%. Купить с доставкой или самовывозом в Гродно.`;
                
                return generateMetadataUtil({
                    title: `${productTitle} купить в Беларуси${price ? ` - ${price} BYN` : ''} | MPPSHOP`,
                    description: description,
                    keywords: `${productTitle.toLowerCase()}, купить ${productTitle.toLowerCase()}, ${productTitle.toLowerCase()} цена, ${productTitle.toLowerCase()} беларусь, ${category.toLowerCase()}, полиграфия mppshop`,
                    url: `${siteUrl}/products/${product.slug}`,
                    ogImage: imageUrl,
                });
            }
        }
    } catch (error) {
        console.error('Error fetching product for metadata:', error);
    }

    return generateMetadataUtil({
        title: "Полиграфическая продукция | MPPSHOP - Купить в Беларуси",
        description: "Качественная полиграфическая продукция в интернет-магазине MPPSHOP. Доставка по Беларуси. Выгодные цены от производителя.",
        keywords: "полиграфия купить, товары mppshop, продукция беларусь",
    });
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${params.slug}&populate=*`,
            { cache: 'no-store' }
        );
        
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        
        const data = await res.json();
        const product = data?.data?.[0];

        if (!product) {
            console.warn(`Product not found for slug: ${params.slug}`);
            return notFound();
        }

        // Fetch similar products using product slug
        let similarProductsData = [];
        try {
            const similarProductsRes = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getSimilarProducts/${product.slug}`,
                { cache: 'no-store' }
            );

            if (similarProductsRes.ok) {
                similarProductsData = await similarProductsRes.json();
            }
        } catch (error) {
            console.error('Error fetching similar products:', error);
        }

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <ProductView data={product} />
                <CanBeInteresting data={similarProductsData} title="Подобные товары" />
            </div>
        );
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to fetch product');
    }
}

