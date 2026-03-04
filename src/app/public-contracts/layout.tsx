import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Публичные договоры | MPPSHOP",
  description: "Публичные договоры ООО «Мастерпринт-Пак» с физическими и юридическими лицами. Условия покупки в интернет-магазине mppshop.by.",
  keywords: "публичные договоры, оферта, мастерпринт-пак, mppshop, условия заказа",
});

export default function PublicContractsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
