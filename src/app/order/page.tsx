import { OrderView } from "@/views/OrderView/OrderView"
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Оформление заказа MPPSHOP",
  description: "Оформление заказа MPPSHOP",
});

export default function OrderPage() {
    return (
        <OrderView />
    )
}