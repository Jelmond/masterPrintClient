import { CartView } from "@/views/CartView/CartView";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Корзина | MPPSHOP",
  description: "Ваша корзина покупок в интернет-магазине MPPSHOP. Просмотрите выбранные товары и перейдите к оформлению заказа.",
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
