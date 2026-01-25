import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "О компании MPPSHOP | Мастерпринт-Пак - Производство полиграфии с 2014 года",
  description: "О компании MPPSHOP (ООО Мастерпринт-Пак) - производитель качественной полиграфической продукции в Беларуси с 2014 года. Современное оборудование, большой опыт, индивидуальный подход. Производство открыток, конвертов, упаковки в Гродно.",
  keywords: "о компании mppshop, мастерпринт пак, производство полиграфии беларусь, производитель открыток, полиграфия гродно, о нас mppshop",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

