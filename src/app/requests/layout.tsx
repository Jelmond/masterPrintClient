import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Обращения покупателей | MPPSHOP",
  description: "Порядок подачи и рассмотрения обращений покупателей в интернет-магазине MPPSHOP. Форма для обращений граждан.",
});

export default function RequestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

