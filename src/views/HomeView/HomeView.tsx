"use client";

import { useRef } from "react";

import { minHeightLvh } from "@/styles/utils";
import styled from "styled-components";

import { rm } from "@/styles";
import { _colors, colors } from "@/styles/colors";

import { Inview } from "@/components/Springs/Inview";
import { Welcome } from "./screens/Welcome";
import { CatalogSwiper } from "./screens/CatalogSwiper";
import { InfoCard } from "./screens/InfoCard";
import { Bestsellers } from "./screens/Bestsellers";
import { About } from "./screens/About";
const StyledHomeView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// ${minHeightLvh(150)}

export type HomeViewProps = {
  heroImageDesktopUrl?: string;
  heroImageMobileUrl?: string;
};

export const HomeView = ({
  heroImageDesktopUrl = "/hero.webp",
  heroImageMobileUrl = "/heroMobile.webp",
}: HomeViewProps) => {

  const mainRef = useRef<HTMLDivElement>(null)


  console.log('heroImageDesktopUrl', heroImageDesktopUrl)
  console.log('heroImageMobileUrl', heroImageMobileUrl)

  return (
    <StyledHomeView ref={mainRef}>
      <Welcome
        heroImageDesktopUrl={heroImageDesktopUrl}
        heroImageMobileUrl={heroImageMobileUrl}
      />
      {/* <Comfort /> */}
      <CatalogSwiper />
      <InfoCard />
      <Bestsellers />
      <div style={{width: '100%'}}><About /></div>
      {/* <BackButton isInView={inView} /> */}
    </StyledHomeView>
  );
};
