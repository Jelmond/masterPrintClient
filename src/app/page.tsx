import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";
import { getStrapiSingleEntryPayload, pickStrapiMediaUrl } from "@/utils/strapiMedia";
import { SeoContent } from "@/components/SeoContent/SeoContent";
import { FaqAccordionItem } from "@/components/FaqAccordion/FaqAccordion";

export const metadata: Metadata = generateMetadata({
  title: "Полиграфическая продукция, заказ и изготовление",
  description: "Закажите полиграфическую продукцию высокого качества ⏩. Изготовление полиграфической продукции для вашего бизнеса ⏩. Оперативная печать и доставка по всей стране ⏩.",
  keywords: "полиграфия беларусь, купить открытки, конверты оптом, упаковка подарочная, полиграфическая продукция минск, печать открыток, мастерпринт пак, интернет магазин полиграфии",
});

function toAbsoluteMediaUrl(pathOrUrl: string | undefined | null, base: string): string | null {
  if (pathOrUrl == null || pathOrUrl === "") return null;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  if (!base) return pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base.replace(/\/$/, "")}${path}`;
}

function withVersion(url: string | null, version: string | null): string | null {
  if (!url) return null;
  if (!version) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${encodeURIComponent(version)}`;
}

export default async function Home() {
  const strapiBase = (process.env.NEXT_PUBLIC_STRAPI_URL || "").replace(/\/$/, "");
  let heroImageDesktopUrl = "/hero.webp";
  let heroImageMobileUrl = "/heroMobile.webp";

  /* Без базового URL относительный fetch на проде уходит не в Strapi — остаётся fallback */
  if (strapiBase) {
    try {
      const homeRes = await fetch(`${strapiBase}/api/home?populate=*`, {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        next: { revalidate: 60 },
      });

      if (homeRes.ok) {
        const homeDataJson = await homeRes.json();
        const row = getStrapiSingleEntryPayload(homeDataJson);
        const version =
          (typeof row?.updatedAt === "string" ? row.updatedAt : null) ??
          (typeof row?.publishedAt === "string" ? row.publishedAt : null);

        const desktop = toAbsoluteMediaUrl(
          row ? pickStrapiMediaUrl(row.heroImage) : null,
          strapiBase
        );
        const mobile = toAbsoluteMediaUrl(
          row ? pickStrapiMediaUrl(row.heroImageMobile) : null,
          strapiBase
        );

        const desktopVersioned = withVersion(desktop, version);
        const mobileVersioned = withVersion(mobile, version);

        if (desktopVersioned) heroImageDesktopUrl = desktopVersioned;
        if (mobileVersioned) heroImageMobileUrl = mobileVersioned;
        else if (desktopVersioned) heroImageMobileUrl = desktopVersioned;
      }
    } catch {
      /* остаются локальные fallback */
    }
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeView heroImageDesktopUrl={heroImageDesktopUrl} heroImageMobileUrl={heroImageMobileUrl} />
      </Suspense>
      <SeoContent>
        <FaqAccordionItem itemId="home-seo-1" question="Полиграфическая продукция: полный спектр печатных изделий для вашего бизнеса">
          <p>Полиграфическая продукция — это изделия, созданные с помощью технологий печати. Заказ полиграфической продукции позволяет эффективно донести информацию о компании, её товарах и услугах до целевой аудитории. Качественная печать и продуманный дизайн помогают выделиться среди конкурентов и создать прочный имидж бренда.</p>
        </FaqAccordionItem>
        <FaqAccordionItem itemId="home-seo-2" question="Что такое полиграфическая продукция">
          <p>Полиграфическая продукция включает в себя все изделия, полученные в результате печатных процессов. Мы специализируемся на производстве брендированной упаковки и имиджевой продукции: подарочных коробок, конвертов, оберточной бумаги, карточек, стикеров и бирок. Технологии изготовления включают цифровую и офсетную печать, тиснение, ламинацию и другие виды отделки.</p>
          <p>Оформление и упаковка: дизайнерская оберточная бумага, которая создает особое настроение при распаковке. Маркировка: изготовление стикеров и бирок — это идеальный финальный штрих. Бирки помогут добавить персональное пожелание, а стикеры надежно и красиво зафиксируют бумагу или ленту. Деловая и имиджевая продукция: фирменные конверты и карточки, которые незаменимы для официальной переписки и поздравления клиентов.</p>
          <p>Каждый вид продукции имеет свои особенности изготовления и требования к материалам. Правильный выбор типа полиграфии помогает достичь максимального эффекта при размещении в местах продаж или на мероприятиях. Заказ полиграфической продукции — это инвестиция в имидж компании, которая окупается за счёт привлечения новых клиентов и укрепления отношений с существующими.</p>
        </FaqAccordionItem>
        <FaqAccordionItem itemId="home-seo-3" question="Как заказать полиграфическую продукцию">
          <p>Процесс заказа полиграфической продукции включает несколько этапов. Сначала необходимо определиться с видом и форматом изделия, а также с тиражом. Затем разрабатывается дизайн-макет (или предоставляется готовый). После этого выбирается технология печати: цифровая (для малых тиражей и быстрых сроков) или офсетная (для крупных тиражей с высоким качеством).</p>
          <p>У нас можно заказать как стандартные изделия (стикеры и бирки, подарочные коробки, карточки, конверты), так и уникальные решения для вашего бизнеса. Мы гарантируем высокое качество печати, соблюдение сроков и доступные цены. Действуют скидки: 3% при самовывозе из пункта выдачи в Гродно, а также 5% при заказе от 300 руб., 10% — от 700 руб. и 20% — от 1 500 руб. Осуществляем доставку по всей Беларуси. Обращайтесь к нам, чтобы заказать полиграфическую продукцию и получить надёжного партнёра в сфере полиграфии.</p>
        </FaqAccordionItem>
      </SeoContent>
    </>
  );
}
