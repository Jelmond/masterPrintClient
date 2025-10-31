import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { BackButton } from "@/components/UI/Buttons/BackButton";
import { DynamicScrollRevealWrapper } from "@/components/ScrollRevealWrapper/DynamicScrollRevealWrapper";
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicScrollRevealWrapper>
        <HomeView />
      </DynamicScrollRevealWrapper>
    </Suspense>
  );
}
