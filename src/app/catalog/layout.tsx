import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";
import { About } from "@/views/HomeView/screens/About";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mppshop.by';

export const metadata: Metadata = generateMetadata({
  title: "Каталог полиграфической продукции | MPPSHOP - Открытки, конверты, упаковка",
  description: "Полный каталог полиграфической продукции MPPSHOP. Открытки, конверты, подарочная упаковка, наклейки, визитки. Большой выбор дизайнов. Качественная печать. Доставка по Беларуси. Цены производителя. Скидки до 20%.",
  keywords: "каталог полиграфии, купить открытки каталог, конверты каталог, упаковка подарочная беларусь, полиграфическая продукция цены, открытки оптом, конверты оптом",
  url: `${siteUrl}/catalog`,
});

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    {children}
    <div style={{width: '100%'}}><About /></div>
  </>;
}

