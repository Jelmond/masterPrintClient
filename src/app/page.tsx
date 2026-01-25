import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "MPPSHOP - Полиграфическая продукция в Беларуси | Открытки, конверты, упаковка",
  description: "Интернет-магазин MPPSHOP - качественная полиграфическая продукция в Беларуси. Открытки, конверты, упаковка, подарочные наборы. Доставка по всей Беларуси. Скидки до 20%. Производство полиграфии с 2014 года. Купить оптом и в розницу.",
  keywords: "полиграфия беларусь, купить открытки, конверты оптом, упаковка подарочная, полиграфическая продукция минск, печать открыток, мастерпринт пак, интернет магазин полиграфии",
});

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeView />
    </Suspense>
  );
}
