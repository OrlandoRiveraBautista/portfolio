"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Loading } from "@/components/loading";
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
      <Loading />
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
