import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Как оформить заказ | MPPSHOP - Пошаговая инструкция",
  description: "Пошаговая инструкция по оформлению заказа полиграфической продукции в MPPSHOP. Как выбрать товар, добавить в корзину, оформить заказ, выбрать доставку и способ оплаты. Подробное руководство для покупателей.",
  keywords: "как оформить заказ mppshop, инструкция по заказу, как купить полиграфию, пошаговое оформление заказа, руководство покупателя",
});

export default function OrderInstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

