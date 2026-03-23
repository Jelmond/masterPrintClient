import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
    title: "Скидки и акции | MPPSHOP — условия скидок, промокоды",
    description:
        "Ключевые положения о скидках на продукцию ООО «Мастерпринт-Пак»: скидки за объём (5% и 20%), самовывоз 3%, суммирование с промокодами и акциями, кратковременные акции. Интернет-магазин mppshop.by.",
    keywords:
        "скидки mppshop, акции полиграфия, промокоды, скидка за объём, самовывоз скидка, положение о скидках мастерпринт",
});

export default function PromotionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
