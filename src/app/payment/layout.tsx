import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Способы оплаты | MPPSHOP",
  description: "Удобные способы оплаты в интернет-магазине MPPSHOP: банковская карта онлайн, ЕРИП, расчетный счет, наличные при самовывозе.",
});

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

