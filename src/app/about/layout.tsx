import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "О Нас | MPPSHOP",
  description: "Узнайте больше о компании MPPSHOP - производителе качественной полиграфической продукции в Беларуси.",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

