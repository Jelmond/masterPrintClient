import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Контакты | MPPSHOP",
  description: "Свяжитесь с нами. Контактная информация, адрес пункта выдачи и время работы MPPSHOP.",
});

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

