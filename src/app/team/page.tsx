"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import TeamSection from "@/components/team";
import WhatsAppButton from "@/components/ui/whatsapp-button";

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
      <TeamSection />
    </>
  );
}
