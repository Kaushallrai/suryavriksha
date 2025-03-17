"use client";
import ContactSection from "@/components/contact";
import ContentSection1 from "@/components/content-1";
import ContentSection from "@/components/content-5";
import FAQs from "@/components/faqs";
import Features from "@/components/features-1";

import HeroSection from "@/components/hero-section";
import ImageSection from "@/components/image-section";
import ImageSection2 from "@/components/image-section2";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
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
      <HeroSection />
      <ContentSection />
      <ImageSection />
      <Features />
      <ImageSection2 />
      <ContentSection1 />
      <ContactSection />
      <FAQs />
    </>
  );
}
