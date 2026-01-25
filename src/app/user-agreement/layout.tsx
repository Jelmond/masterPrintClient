import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Пользовательское соглашение | MPPSHOP - Условия использования",
  description: "Пользовательское соглашение интернет-магазина MPPSHOP. Условия использования сайта, правила оформления заказов, оплаты и доставки. Права и обязанности покупателей и продавца. Защита персональных данных. Возврат товара.",
  keywords: "пользовательское соглашение mppshop, условия использования, правила заказа, политика конфиденциальности, возврат товара mppshop",
});

export default function UserAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
