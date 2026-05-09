import React from 'react';
import { CatalogView } from '@/views/CatalogView/CatalogView';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetadataUtil } from "@/utils/generateMetadata";
import { fetchBatchesFromStrapi } from '@/utils/fetchBatches';
import { Metadata } from "next";
import { SeoContent } from '@/components/SeoContent/SeoContent';
import { FaqAccordionItem } from '@/components/FaqAccordion/FaqAccordion';

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

const CATALOG_SEO_CONTENT: Record<string, React.ReactNode> = {
    'present-box': (
        <>
            <FaqAccordionItem itemId="pb-seo-1" question="Производство подарочных коробок на заказ">
                <p>Вы можете заказать подарочные коробки с индивидуальным дизайном, используя современные технологии печати и отделки. Мы гарантируем высокое качество и точное соблюдение сроков.</p>
            </FaqAccordionItem>
            <FaqAccordionItem itemId="pb-seo-2" question="Почему выбирают нас для изготовления подарочных коробок?">
                <p>Наше собственное производство позволяет контролировать каждый этап создания упаковки — от разработки макета до финальной сборки. Мы используем качественные материалы: дизайнерский картон, микрогофрокартон и переплетный картон, что обеспечивает прочность и презентабельный внешний вид. Индивидуальный подход к каждому клиенту — наш приоритет. В зависимости от назначения и предпочтений клиента, мы изготавливаем следующие типы упаковки:</p>
                <ul style={{ paddingLeft: '22px' }}>
                    <li>Конструкция «крышка-дно» — универсальный вариант для сувениров, косметики и аксессуаров.</li>
                    <li>Упаковка для алкоголя — специализированные коробки под бутылки, часто с вырезом и мягкой подкладкой.</li>
                    <li>VIP-упаковка — эксклюзивные модели с тиснением, ламинацией и сложным дизайном для статусных подарков.</li>
                </ul>
                <p>При производстве мы используем различные материалы: картон, микрогофрокартон, переплетный картон. Дизайн подарочной коробки может включать цветную печать, выборочное лакирование, тиснение фольгой. Коробка с логотипом — это отличный маркетинговый инструмент, который подчеркивает статус и внимание к деталям. Мы помогаем разработать дизайн с учетом особенностей материала и выбранного метода печати.</p>
            </FaqAccordionItem>
            <FaqAccordionItem itemId="pb-seo-3" question="Как заказать подарочные коробки?">
                <p>Процесс изготовления подарочных коробок на заказ в MPP Shop начинается с вашей заявки. Вы можете оставить запрос на сайте или связаться с менеджером. Мы обсуждаем требования: размеры, материал, тираж, дизайн и сроки. Наш специалист готовит предварительный расчет стоимости и предоставляет коммерческое предложение. После утверждения макета запускается производство. Мы ценим индивидуальный подход и высокое качество исполнения. Обращайтесь к нам, и мы поможем реализовать ваш проект.</p>
            </FaqAccordionItem>
            <FaqAccordionItem itemId="pb-seo-4" question="Заключение">
                <p>Подарочная коробка — это не просто упаковка, а важный элемент презентации, который создает первое впечатление. MPP Shop предлагает полный цикл производства подарочных коробок, а также широкий ассортимент обёрточной бумаги для подарков, цветов и других целей. Благодаря собственному производству мы предлагаем выгодные цены и оперативную доставку по Беларуси. Ознакомьтесь с видами и выберите подходящий вариант для вашего бизнеса.</p>
            </FaqAccordionItem>
        </>
    ),
    'paper': (
        <>
            <FaqAccordionItem itemId="paper-seo-1" question="Виды упаковочной бумаги">
                <p>В нашем ассортименте представлены популярные виды упаковочной бумаги, каждый из которых имеет свои особенности и преимущества.</p>
                <p>Беленая мешочная бумага (беленый крафт) — это высокопрочный упаковочный материал из чистоцеллюлозного волокна. Прочность: устойчива к разрывам и проколам. Позволяет отрезать ровно столько, сколько нужно, минимизируя отходы.</p>
            </FaqAccordionItem>
            <FaqAccordionItem itemId="paper-seo-2" question="Преимущества покупки оптом">
                <ul style={{ paddingLeft: '22px' }}>
                    <li>Низкая цена за единицу — чем больше объём, тем выгоднее стоимость каждого листа или метра рулона.</li>
                    <li>Широкий ассортимент — в наличии все виды бумаги, включая эксклюзивные позиции, которые сложно найти в рознице.</li>
                    <li>Постоянное наличие — мы поддерживаем складские запасы, чтобы вы могли заказывать упаковочную бумагу оптом без задержек.</li>
                    <li>Подходит для магазинов, флористов и организаторов мероприятий — оптовая упаковка позволяет сократить расходы и всегда иметь под рукой нужный материал.</li>
                    <li>Для свадьбы — матовая или крафтовая бумага пастельных тонов, можно с тиснением. Создаёт нежный и торжественный образ.</li>
                    <li>Для Нового года — тематические рисунки (снежинки, ёлки), глянцевая красная, зелёная или золотая бумага.</li>
                    <li>Для корпоративных подарков — сдержанная матовая или дизайнерская бумага в фирменных цветах компании.</li>
                </ul>
                <p>Учитывайте также размер и форму подарка: для мелких предметов удобны листы, для крупных — рулоны. Не бойтесь экспериментировать с фактурами: сочетание глянца и мата добавляет упаковке объём и интерес.</p>
            </FaqAccordionItem>
            <FaqAccordionItem itemId="paper-seo-3" question="Почему выбирают нас">
                <p>Качество — вся продукция проходит контроль на каждом этапе производства. Мы стремимся сделать процесс заказа максимально комфортным. Обращайтесь — подберём оптимальный вариант упаковочной бумаги именно для ваших задач.</p>
            </FaqAccordionItem>
        </>
    ),
};

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

            const override = CATEGORY_META_OVERRIDES[categoryTitle];
            if (override) {
                return generateMetadataUtil({
                    title: override.title,
                    description: override.description,
                    keywords: override.keywords ?? `${categoryTitle.toLowerCase()}, купить ${categoryTitle.toLowerCase()}, ${categoryTitle.toLowerCase()} беларусь, ${categoryTitle.toLowerCase()} минск, полиграфия mppshop`,
                });
            }

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

    const categoryOverride = CATEGORY_META_OVERRIDES[categoryData?.title];

    const seoContent = CATALOG_SEO_CONTENT[params.id];

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
            />
            {seoContent && <SeoContent>{seoContent}</SeoContent>}
        </>
    );
} 