import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "О компании MPPSHOP | Мастерпринт-Пак - Производство полиграфии с 2014 года",
  description:
    "О компании MPPSHOP (ООО Мастерпринт-Пак) — производитель полиграфии в Беларуси с 2014 года. На странице — FAQ: доставка, оплата, скидки, самовывоз в Гродно, отличие от типографии.",
  keywords:
    "о компании mppshop, мастерпринт пак, производство полиграфии беларусь, производитель открыток, полиграфия гродно, о нас mppshop, faq mppshop, доставка оплата",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

