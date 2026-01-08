import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Главная | MPPSHOP",
  description: "Интернет-магазин MPPSHOP - качественная полиграфическая продукция в Беларуси. Открытки, конверты, упаковка и многое другое.",
});

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeView />
    </Suspense>
  );
}
