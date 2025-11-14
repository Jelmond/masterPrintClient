import { CanBeInteresting } from '@/components/CanBeInteresting/CanBeInteresting';
import { ProductView } from '@/views/ProductView/ProductView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[id][$eq]=${params.id}&populate=*`,
        { cache: 'no-store' }
    );
    
    try {
        if (res.ok) {
            const data = await res.json();
            const product = data?.data?.[0];
            
            if (product) {
                const productTitle = product?.title || 'Товар';
                return generateMetadataUtil({
                    title: `${productTitle} MPPSHOP`,
                    description: product?.description || `Товар ${productTitle} в MPPSHOP`,
                });
            }
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
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[id][$eq]=${params.id}&populate=*`,
        { cache: 'no-store' }
    );
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    const product = data?.data?.[0];

    if (!product) return notFound();

    const similarProductsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getSimilarProducts/${params.id}`,
        { cache: 'no-store' }
    );

    const similarProductsData = await similarProductsRes.json();


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <ProductView data={product} />
            <CanBeInteresting data={similarProductsData} title="Подобные товары" />
        </div>
    );
}