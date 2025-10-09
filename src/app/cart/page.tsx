import { CartView } from "@/views/CartView/CartView";

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
