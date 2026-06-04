import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { fetchBatchesFromStrapi } from '@/utils/fetchBatches';
import { Metadata } from "next";
import { About } from '@/views/HomeView/screens/About';
import { CatalogCategorySeoContent } from './CatalogCategorySeoContent';

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

const CATEGORY_META_OVERRIDES: Record<string, { title: string; description: string; h1: string; keywords?: string }> = {
    'Конверты для подарков': {
        title: 'Конверты для подарков купить в Минске',
        description: 'Ищете конверт для подарка? Купить конверты для подарков можно в нашем каталоге. Большой выбор конвертов для денег и подарований. Закажите сейчас!',
        h1: 'Конверты для подарков',
    },
    'Подарочные коробки': {
        title: 'Подарочные коробки на заказ с логотипом, изготовление подарочных коробок',
        description: 'Изготовление подарочных коробок на заказ с логотипом от производителя 🔥. Производство коробок из картона с дизайном под ваш бренд 🔥. Закажите подарочную упаковку оптом и в розницу 🔥.',
        h1: 'Подарочные коробки на заказ',
    },
    'Оберточная бумага': {
        title: 'Купить бумагу для упаковки подарков оптом, упаковочная бумага',
        description: 'Хотите купить бумагу для упаковки подарков оптом ☑️? У нас представлена упаковочная и оберточная бумага для любых целей ⏩. Широкий ассортимент ☑️, выгодные цены и быстрая доставка ⏩.',
        h1: 'Упаковочная бумага для подарков оптом',
    },
    'Печать стикеров': {
        title: 'Печать стикеров оптом в Минске',
        description: 'Закажите печать стикеров оптом по выгодным ценам. Широкий выбор форматов и материалов для стикеров. Быстрая печать и доставка по всей стране.',
        h1: 'Печать стикеров оптом',
    },
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const categoryUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getPopulatedCategory/${params.id}`;

    try {
        const categoryRes = await fetch(categoryUrl, {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (categoryRes.ok) {
            const categoryData = await categoryRes.json();
            const categoryTitle = categoryData?.title || 'Категория';
            const productCount = categoryData?.products?.length || 0;

            const override = CATEGORY_META_OVERRIDES[categoryTitle];
            if (override) {
                return generateMetadataUtil({
                    title: override.title,
                    description: override.description,
                    keywords: override.keywords ?? `${categoryTitle.toLowerCase()}, купить ${categoryTitle.toLowerCase()}, ${categoryTitle.toLowerCase()} беларусь, ${categoryTitle.toLowerCase()} минск, полиграфия mppshop`,
                });
            }

            return generateMetadataUtil({
                title: `${categoryTitle} — купить в Минске и Беларуси | MPPSHOP`,
                description: `Купить ${categoryTitle.toLowerCase()} в Минске и по всей Беларуси.${productCount > 0 ? ` В каталоге ${productCount}+ товаров.` : ''} Качественная полиграфическая продукция от производителя. Доставка по всей Беларуси. Скидки до 20%.`,
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
            next: { revalidate: 60 },
            headers: { 'Content-Type': 'application/json' },
        }),
        fetch(tagsUrl, {
            next: { revalidate: 60 },
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
                    title: tag.title,
                    slug: tag.slug,
                });
            }
        }
    });

    const tags = Array.from(uniqueTagsMap.values());

    const categoryOverride = CATEGORY_META_OVERRIDES[categoryData?.title];

    return (
        <>
            <CatalogView
                data={categoryData}
                products={products}
                tags={tags}
                tagsProductsData={tagsProductsData}
                uniqueProducts={uniqueProducts}
                batchesOrder={batchesOrder}
                h1Override={categoryOverride?.h1}
                catalogSlug={params.id}
            />
            <CatalogCategorySeoContent slug={params.id} />
        </>
    );
} 