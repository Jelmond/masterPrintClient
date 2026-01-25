import { OrderView } from "@/views/OrderView/OrderView"
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Оформление заказа полиграфии | MPPSHOP - Быстро и удобно",
  description: "Оформите заказ полиграфической продукции в MPPSHOP. Быстрое оформление, удобные способы оплаты: карта, ЕРИП, расчетный счет. Доставка DPD по Беларуси или самовывоз. Скидка 3% при самовывозе.",
  keywords: "оформить заказ mppshop, купить полиграфию онлайн, заказать открытки, оформление заказа беларусь, оплата картой ерип",
});

export default function OrderPage() {
    return (
        <OrderView />
    )
}