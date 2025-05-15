"use client";

import { useRef } from "react";

import { minHeightLvh } from "@/styles/utils";
import styled from "styled-components";

import { rm } from "@/styles";
import { _colors, colors } from "@/styles/colors";

import { Inview } from "@/components/Springs/Inview";
import { SpringTrigger } from "@/components/Springs/Springtrigger";
import { TLine } from "@/components/Text/TLine";
import { Hover } from "@/components/Springs/Hover";
import dynamic from "next/dynamic";
import TextProgress from "@/components/Text/TextProgress";

const StyledHomeView = styled(Inview)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${rm(200)};
  ${minHeightLvh(150)}
`;

const StyledLine = styled(Hover)`
  height: ${rm(10)};
  width: 100%;
  background-color: ${colors.black100};
  position: fixed;
  bottom: ${rm(64)};
  left: 0;
`;

const DynamicScene = dynamic(() => import("./Scene").then((mod) => mod.Scene), {
  ssr: false,
});

// This file demonstrates usage of various animation components:
// - inview: Triggers animation when element enters viewport
// - springtrigger: Animates based on scroll position
// - hover: Animates on hover interaction
// - tline: Text line animation component
//
// The components use react-spring under the hood for smooth animations
// and can be configured with custom spring physics and delays
export const HomeView = () => {
  const trigger = useRef<HTMLDivElement>(null);
  return (
    <StyledHomeView from={{ y: "-20rem" }} to={{ y: "0rem" }} delayIn={200}>
      <SpringTrigger tag="h1" from={{ y: "0rem" }} to={{ y: "-10rem" }}>
        Hello World!
      </SpringTrigger>
      <SpringTrigger
        tag="div"
        from={{ y: "0rem" }}
        to={{ y: "10rem" }}
        ref={trigger}
      >
        <TLine tag="h1" style={{ cursor: "pointer", zIndex: 1 }}>
          Hover Me!
        </TLine>
      </SpringTrigger>
      <StyledLine
        tag="div"
        trigger={trigger}
        from={{ maxWidth: "0%" }}
        to={{ maxWidth: "100%" }}
      />
      <TextProgress
        tag="h2"
        type="interpolate"
        interpolationStaggerCoefficient={0.5}
        letterIn={{ opacity: 1 }}
        letterOut={{ opacity: 0.1 }}
        wordIn={{ y: 0 }}
        wordOut={{ y: 50 }}
      >
        Yooooo that is a nice progress text with interpolation!
      </TextProgress>
      <TextProgress
        tag="h2"
        type="toggle"
        letterIn={{ opacity: 1 }}
        letterOut={{ opacity: 0.1 }}
        wordIn={{ y: 0 }}
        wordOut={{ y: 10 }}
      >
        Yooooo that is a nice progress text!
      </TextProgress>
      <DynamicScene />
    </StyledHomeView>
  );
};
