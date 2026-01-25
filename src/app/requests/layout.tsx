import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Обращения покупателей | MPPSHOP - Форма обратной связи",
  description: "Форма для обращений покупателей MPPSHOP. Порядок подачи и рассмотрения жалоб, предложений и вопросов. Книга замечаний и предложений. Защита прав потребителей. Быстрое рассмотрение обращений граждан.",
  keywords: "обращения покупателей mppshop, жалоба на качество, книга замечаний, форма обратной связи, защита прав потребителей беларусь",
});

export default function RequestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

