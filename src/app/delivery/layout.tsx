import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Доставка полиграфии по Беларуси | MPPSHOP - DPD, самовывоз",
  description: "Доставка полиграфической продукции MPPSHOP по всей Беларуси. Курьерская доставка DPD 20 BYN (бесплатно от 400 BYN). Самовывоз из Гродно (скидка 3%). Сроки доставки 2-3 дня. Альтернативная доставка. Надёжная упаковка товара.",
  keywords: "доставка полиграфии беларусь, доставка dpd минск, самовывоз гродно, курьерская доставка открыток, доставка конвертов, бесплатная доставка mppshop",
});

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

