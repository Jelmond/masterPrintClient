import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { generateMetadata } from "@/utils/generateMetadata";
import { Metadata } from "next";
import { getStrapiSingleEntryPayload, pickStrapiMediaUrl } from "@/utils/strapiMedia";

export const metadata: Metadata = generateMetadata({
  title: "MPPSHOP - Полиграфическая продукция в Беларуси | Открытки, конверты, упаковка",
  description: "Интернет-магазин MPPSHOP - качественная полиграфическая продукция в Беларуси. Открытки, конверты, упаковка, подарочные наборы. Доставка по всей Беларуси. Скидки до 20%. Производство полиграфии с 2014 года. Купить оптом и в розницу.",
  keywords: "полиграфия беларусь, купить открытки, конверты оптом, упаковка подарочная, полиграфическая продукция минск, печать открыток, мастерпринт пак, интернет магазин полиграфии",
});

function toAbsoluteMediaUrl(pathOrUrl: string | undefined | null, base: string): string | null {
  if (pathOrUrl == null || pathOrUrl === "") return null;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  if (!base) return pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base.replace(/\/$/, "")}${path}`;
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

        const desktop = toAbsoluteMediaUrl(
          row ? pickStrapiMediaUrl(row.heroImage) : null,
          strapiBase
        );
        const mobile = toAbsoluteMediaUrl(
          row ? pickStrapiMediaUrl(row.heroImageMobile) : null,
          strapiBase
        );

        if (desktop) heroImageDesktopUrl = desktop;
        if (mobile) heroImageMobileUrl = mobile;
        else if (desktop) heroImageMobileUrl = desktop;
      }
    } catch {
      /* остаются локальные fallback */
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeView heroImageDesktopUrl={heroImageDesktopUrl} heroImageMobileUrl={heroImageMobileUrl} />
    </Suspense>
  );
}
