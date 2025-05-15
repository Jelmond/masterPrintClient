"use client";

import { debounce } from "@/utils/math";
import { useState, useEffect } from "react";

export function useWindowWidth(debounceDelay: number = 300): number {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, debounceDelay);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceDelay]);

  return windowWidth;
}

export function useWindowHeight(debounceDelay: number = 300): number {
  const [windowHeight, setWindowHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = debounce(() => {
      setWindowHeight(window.innerHeight);
    }, debounceDelay);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceDelay]);

  return windowHeight;
}
