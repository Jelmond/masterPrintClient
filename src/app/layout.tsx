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
    title: "New Project",
    description: "New Project",
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
