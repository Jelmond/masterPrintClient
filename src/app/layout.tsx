import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { headers } from "next/headers";
import Script from "next/script";

import GlobalStyles, { SmartCSSGrid } from "@/styles";

import { Lvh } from "@/hooks/useLvh";
import { generateMetadata } from "@/utils/generateMetadata";

import { StyledComponentsLayout } from "@/layouts/StyledComponentsLayout";
import { AssetsLoaderLayout } from "@/layouts/AssetsLoaderLayout/AssetsLoaderLayout";
import { CanvasLayout } from "@/layouts/CanvasLayout/CanvasLayout";
import { Cookie } from "@/components/Cookie";
import { ScrollLayout } from "@/layouts/ScrollLayout/ScrollLayout";
import { AnimatedRouterLayout } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Toast } from "@/components/Toast/Toast";
import { MobileBottomNav } from "@/components/MobileBottomNav/MobileBottomNav";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = GeistSans.variable

// Получаем базовый URL для metadataBase
const getSiteUrl = () => {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://mppshop.by';
};

export const metadata: Metadata = {
  ...generateMetadata({
    title: "MPPSHOP - Интернет-магазин полиграфической продукции в Беларуси",
    description: "Интернет-магазин MPPSHOP - качественная полиграфическая продукция в Беларуси. Открытки, конверты, упаковка, подарочные наборы. Доставка по всей Беларуси. Скидки до 20%. Купить полиграфию оптом и в розницу.",
    keywords: "полиграфия беларусь, купить открытки минск, конверты оптом, упаковка подарочная, полиграфическая продукция, печать открыток, мастерпринт пак, открытки купить, конверты купить, упаковка купить",
    url: getSiteUrl(),
  }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const isBot = headersList.get('x-is-bot') === '1';

  return (
    <html lang="ru" translate="no">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="wdP82tLM1jjYjaifit8o3yPV2lD2kzZ8I0G3uM12HZQ" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ООО Мастерпринт-Пак",
              "alternateName": "MPPSHOP",
              "url": "https://mppshop.by",
              "logo": "https://mppshop.by/assets/logoSpring.svg",
              "description": "Производитель и интернет-магазин качественной полиграфической продукции в Беларуси. Открытки, конверты, упаковка с 2014 года.",
              "foundingDate": "2014-02-18",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Титова, 24",
                "addressLocality": "Гродно",
                "postalCode": "230000",
                "addressCountry": "BY"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+375447495465",
                  "contactType": "customer service",
                  "areaServed": "BY",
                  "availableLanguage": ["ru", "be"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+375445842911",
                  "contactType": "sales",
                  "areaServed": "BY",
                  "availableLanguage": ["ru", "be"]
                }
              ],
              "sameAs": [
                "https://mppshop.by"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "email": "info@mppshop.by",
              "taxID": "591511468"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MPPSHOP",
              "url": "https://mppshop.by",
              "description": "Интернет-магазин полиграфической продукции в Беларуси",
              "publisher": {
                "@type": "Organization",
                "name": "ООО Мастерпринт-Пак"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://mppshop.by/catalog?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "ru-BY"
            })
          }}
        />
        {/* /Structured Data */}
      </head>
      <body className={`${onest.variable} ${geistSans} ${poppins.variable}`} style={isBot ? undefined : { opacity: 0 }}>
        {/* Google tag (gtag.js) - Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17871808122"
          strategy="afterInteractive"
        />
        <Script id="gtag-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17871808122');`}
        </Script>

        {/* Google tag (gtag.js) GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9KWRY06ED"
          strategy="afterInteractive"
        />
        <Script id="gtag-ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9KWRY06ED');`}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106182797', 'ym');
          ym(106182797, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106182797"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        <StyledComponentsLayout>
          <ScrollLayout>
            <SmartCSSGrid />
            <Lvh />
            <GlobalStyles />
            <AssetsLoaderLayout>
              {/* <Cookie /> */}
              <Toast />
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedRouterLayout>
                    <Header/>
                    {children}
                    <Footer/>
                    <MobileBottomNav />
                </AnimatedRouterLayout>
              </Suspense>
            </AssetsLoaderLayout>
          </ScrollLayout>
        </StyledComponentsLayout>
      </body>
    </html>
  );
}
