import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Доставка | MPPSHOP",
  description: "Условия доставки в интернет-магазине MPPSHOP: курьерская доставка DPD, самовывоз, альтернативная доставка. Бесплатная доставка от 200 рублей.",
});

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

