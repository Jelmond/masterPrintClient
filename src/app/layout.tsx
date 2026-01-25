import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import { Suspense } from "react";

import GlobalStyles, { SmartCSSGrid } from "@/styles";

import { Lvh } from "@/hooks/useLvh";
import { generateMetadata } from "@/utils/generateMetadata";

// import { AnimatedRouterLayout } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout";
import { StyledComponentsLayout } from "@/layouts/StyledComponentsLayout";
import { AssetsLoaderLayout } from "@/layouts/AssetsLoaderLayout/AssetsLoaderLayout";
import { CanvasLayout } from "@/layouts/CanvasLayout/CanvasLayout";
import { Cookie } from "@/components/Cookie";
import { ScrollLayout } from "@/layouts/ScrollLayout/ScrollLayout";
import { AnimatedRouterLayout } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Toast } from "@/components/Toast/Toast";
import { Snowfall } from "@/components/Snowfall/Snowfall";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = GeistSans.variable

// Получаем базовый URL для metadataBase
const getSiteUrl = () => {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Fallback на домен из конфига или дефолтный
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
  return (
    <html lang="ru" translate="no">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17871808122"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17871808122');
            `,
          }}
        />
        {/* /Google tag (gtag.js) */}
        
        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106182797', 'ym');

              ym(106182797, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
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
              "logo": "https://mppshop.by/logo.svg",
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
      <body className={`${onest.variable} ${geistSans} ${poppins.variable}`} style={{ opacity: 0 }}>
        <StyledComponentsLayout>
          <ScrollLayout>
            <SmartCSSGrid />
            <Lvh />
            <GlobalStyles />
            <Snowfall />
            <AssetsLoaderLayout>
              <Cookie />
              <Toast />
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedRouterLayout>
                    <Header/>
                    {children}
                    <Footer/>
                </AnimatedRouterLayout>
              </Suspense>
            </AssetsLoaderLayout>
          </ScrollLayout>
        </StyledComponentsLayout>
      </body>
    </html>
  );
}
