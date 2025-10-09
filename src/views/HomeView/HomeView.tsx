"use client";

import { useRef } from "react";

import { minHeightLvh } from "@/styles/utils";
import styled from "styled-components";

import { rm } from "@/styles";
import { _colors, colors } from "@/styles/colors";

import { Inview } from "@/components/Springs/Inview";
import { Welcome } from "./screens/Welcome";
import { Markets } from "./screens/Markets";
import { CatalogSwiper } from "./screens/CatalogSwiper";
import { InfoCard } from "./screens/InfoCard";
import { Bestsellers } from "./screens/Bestsellers";
import { About } from "./screens/About";
import { BackButton } from "@/components/UI/Buttons/BackButton";
import { useInView } from "@react-spring/web";
import { Comfort } from "./screens/Comfort";
const StyledHomeView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// ${minHeightLvh(150)}

export const HomeView = () => {

  const mainRef = useRef<HTMLDivElement>(null)


  return (
    <StyledHomeView ref={mainRef}>
      <Welcome />
      <Markets />
      <Comfort />
      <CatalogSwiper />
      <InfoCard />
      <Bestsellers />
      <div style={{width: '100%'}}><About /></div>
      {/* <BackButton isInView={inView} /> */}
    </StyledHomeView>
  );
};
