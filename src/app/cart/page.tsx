import { CartView } from "@/views/CartView/CartView";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Корзина покупок | MPPSHOP - Оформление заказа полиграфии",
  description: "Корзина покупок MPPSHOP. Просмотрите выбранную полиграфическую продукцию и перейдите к оформлению заказа. Удобная система заказа. Несколько способов оплаты. Быстрая доставка по Беларуси.",
  keywords: "корзина mppshop, оформить заказ полиграфия, купить открытки онлайн, заказать конверты, корзина покупок",
});

export default async function Cart() {

    const similarProductsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/getSimilarProducts/1000000`,
        { cache: 'no-store' }
    );

    const similarProductsData = await similarProductsRes.json();

    return (
        <>
            <CartView similarProducts={similarProductsData} />
        </>
    )
}
