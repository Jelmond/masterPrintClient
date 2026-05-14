import { CanBeInteresting } from '@/components/CanBeInteresting/CanBeInteresting';
import { ProductView } from '@/views/ProductView/ProductView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
    
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/${params.slug}`,
            { cache: 'no-store' }
        );

        if (res.ok) {
            const data = await res.json();
            const product = data?.data; // Теперь это объект, а не массив
            
            if (product) {
                const productTitle = product?.title || 'Товар';
                const price = product?.price ? `${product.price} руб.` : '';
                const category = product?.categories?.[0]?.title || '';
                const size = product?.size || '';
                const material = product?.material || '';
                const quantityInPack = product?.quantityInPack || '';
                const imageUrl = product?.images?.[0]?.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}` : '/open-graph.png';

                // Unique per-product description built from structured fields (never rich text objects)
                const parts: string[] = [
                    `${productTitle} — купить в Минске и по всей Беларуси.`,
                    price ? `Цена: ${price}.` : '',
                    size ? `Размер: ${size}.` : '',
                    material ? `Материал: ${material}.` : '',
                    quantityInPack ? `В наборе: ${quantityInPack} шт.` : '',
                    'Быстрая доставка. Производство полиграфии с 2014 года.',
                ];
                const description = parts.filter(Boolean).join(' ');

                return generateMetadataUtil({
                    title: `${productTitle} купить в Беларуси`,
                    description,
                    keywords: `${productTitle.toLowerCase()}, купить ${productTitle.toLowerCase()}, ${productTitle.toLowerCase()} цена, ${productTitle.toLowerCase()} беларусь${category ? `, ${category.toLowerCase()}` : ''}, полиграфия mppshop`,
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
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/${params.slug}`,
            { cache: 'no-store' }
        );
        
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        
        const data = await res.json();
        const product = data?.data; // Теперь это объект, а не массив

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

