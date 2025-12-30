"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Hero,
  About,
  Strengths,
  Work,
  Process,
  Testimonial,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Strengths />
        <Work />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
