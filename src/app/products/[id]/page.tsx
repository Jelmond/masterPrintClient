import { CanBeInteresting } from '@/components/CanBeInteresting/CanBeInteresting';
import { ProductView } from '@/views/ProductView/ProductView';
import { notFound, redirect } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';
    
    // Пытаемся найти продукт по id
    let res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[id][$eq]=${params.id}&populate=*`,
        { cache: 'no-store' }
    );
    
    let product = null;
    
    try {
        if (res.ok) {
            const data = await res.json();
            product = data?.data?.[0];
        }
        
        // Если не найден по id, пробуем найти по documentId
        if (!product) {
            res = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[documentId][$eq]=${params.id}&populate=*`,
                { cache: 'no-store' }
            );
            
            if (res.ok) {
                const data = await res.json();
                product = data?.data?.[0];
            }
        }
        
        if (product) {
            const productTitle = product?.title || 'Товар';
            const productId = product.id || product.documentId;
            return generateMetadataUtil({
                title: `${productTitle} MPPSHOP`,
                description: product?.description || `Товар ${productTitle} в MPPSHOP`,
                url: `${siteUrl}/products/${productId}`,
            });
        }
    } catch (error) {
        console.error('Error fetching product for metadata:', error);
    }

    return generateMetadataUtil({
        title: "Товар MPPSHOP",
        description: "Товар MPPSHOP",
    });
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    // Пытаемся найти продукт по id
    let res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[id][$eq]=${params.id}&populate=*`,
        { cache: 'no-store' }
    );
    
    let product = null;
    let productId = params.id;
    
    try {
        if (res.ok) {
            const data = await res.json();
            product = data?.data?.[0];
        }
        
        // Если не найден по id, пробуем найти по documentId
        if (!product) {
            res = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[documentId][$eq]=${params.id}&populate=*`,
                { cache: 'no-store' }
            );
            
            if (res.ok) {
                const data = await res.json();
                product = data?.data?.[0];
                // Если нашли по documentId, используем числовой id для дальнейших запросов
                if (product) {
                    productId = product.id || product.documentId;
                }
            }
        }
        
        if (!product) {
            console.warn(`Product not found for ID: ${params.id}`);
            return notFound();
        }
        
        // Если URL содержит documentId, но продукт имеет числовой id, редиректим на правильный URL
        // Это нужно для SEO и правильной индексации
        if (product.id && params.id !== String(product.id) && params.id === product.documentId) {
            redirect(`/products/${product.id}`);
        }
        
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to fetch product');
    }

    // Используем правильный ID для запроса похожих продуктов
    const similarProductsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getSimilarProducts/${productId}`,
        { cache: 'no-store' }
    );

    let similarProductsData = [];
    try {
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
}