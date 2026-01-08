import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Оформление заказа | MPPSHOP",
  description: "Пошаговая инструкция по оформлению заказа в интернет-магазине MPPSHOP",
});

export default function OrderInstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

