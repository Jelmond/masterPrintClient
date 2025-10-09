import { HomeView } from "@/views/HomeView/HomeView";
import { Suspense } from "react";
import { BackButton } from "@/components/UI/Buttons/BackButton";
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeView />
    </Suspense>
  );
}
