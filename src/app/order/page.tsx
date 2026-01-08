import { OrderView } from "@/views/OrderView/OrderView"
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Оформление заказа | MPPSHOP",
  description: "Оформите заказ в интернет-магазине MPPSHOP. Быстрое оформление, удобные способы оплаты и доставки.",
});

export default function OrderPage() {
    return (
        <OrderView />
    )
}