import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Способы оплаты | MPPSHOP - Карта, ЕРИП, расчётный счёт, наличные",
  description: "Удобные способы оплаты в MPPSHOP: банковская карта онлайн (Альфа-банк), ЕРИП, расчётный счёт для юрлиц, наличные и карта при самовывозе. Безопасные платежи. Все способы оплаты для физических и юридических лиц.",
  keywords: "оплата mppshop, оплата картой онлайн, оплата ерип, расчетный счет беларусь, способы оплаты полиграфия, безопасная оплата",
});

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

