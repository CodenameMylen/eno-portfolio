"use client";

import { useState } from "react";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import Transcript from "@/components/Transcript";
import type { Lang } from "@/lib/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("id");

  return (
    <>
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Transcript lang={lang} />
        <Projects lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
