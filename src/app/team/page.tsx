"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import TeamSection from "@/components/team";

export default function Team() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <TeamSection />
    </>
  );
}
