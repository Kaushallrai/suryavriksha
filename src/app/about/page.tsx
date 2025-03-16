"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import ContentSection from "@/components/about/content-1";

export default function Team() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <ContentSection />
    </>
  );
}
