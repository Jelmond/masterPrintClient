import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Каталог товаров | MPPSHOP",
  description: "Каталог полиграфической продукции MPPSHOP. Открытки, конверты, упаковка, подарочная продукция и многое другое.",
});

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

