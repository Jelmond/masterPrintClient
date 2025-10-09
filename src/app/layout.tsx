import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";

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

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// GeistSans is already a NextFontWithVariable instance with a variable property

export const metadata: Metadata = generateMetadata({
  title: "New Project",
  description: "New Project",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${GeistSans.variable} ${poppins.variable}`} style={{ opacity: 0 }}>
        <StyledComponentsLayout>
          <ScrollLayout>
            <SmartCSSGrid />
            <Lvh />
            <GlobalStyles />
            <AssetsLoaderLayout>
              <Cookie />
              <AnimatedRouterLayout>
                  <Header/>
                  {children}
                  <Footer/>
              </AnimatedRouterLayout>
            </AssetsLoaderLayout>
          </ScrollLayout>
        </StyledComponentsLayout>
      </body>
    </html>
  );
}
