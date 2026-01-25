import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Контакты MPPSHOP | Адрес, телефоны, время работы - Гродно",
  description: "Контакты интернет-магазина MPPSHOP. Пункт выдачи: г. Гродно, ул. Титова, 24. Телефоны: +375 44 749-54-65, +375 44 584-29-11. Режим работы: Пн-Пт 9:00-17:00. Приём заказов круглосуточно. УНП 591511468.",
  keywords: "контакты mppshop, адрес mppshop гродно, телефон mppshop, пункт выдачи гродно, время работы mppshop, как связаться mppshop",
});

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

