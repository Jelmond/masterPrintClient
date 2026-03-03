import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Доставка полиграфии по Беларуси | MPPSHOP - DPD, самовывоз",
  description: "Доставка полиграфической продукции MPPSHOP по Беларуси. Для физлиц: самовывоз в Гродно (скидка 3%), РУП «Белпочта». Для юрлиц и ИП: самовывоз, доставка DPD (бесплатно от 200 руб). Сроки DPD 2–3 рабочих дня.",
  keywords: "доставка полиграфии беларусь, доставка dpd минск, самовывоз гродно, курьерская доставка открыток, доставка конвертов, бесплатная доставка mppshop",
});

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

