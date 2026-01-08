import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Заказ успешно оформлен | MPPSHOP",
  description: "Ваш заказ успешно оформлен. Спасибо за покупку в MPPSHOP!",
});

export default function OrderSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

