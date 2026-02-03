import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Возврат товара | MPPSHOP - Условия возврата",
  description: "Условия возврата товара в интернет-магазине MPPSHOP. Возврат доступен только для товаров с браком. Порядок оформления возврата и сроки.",
  keywords: "возврат товара mppshop, возврат брак, обмен товара, товар ненадлежащего качества",
});

export default function ReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
