"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HeroSection, Navbar, About, Projects, Contact } from "@/components/home";

type SectionKey = "home" | "about" | "projects" | "contact";

const NAV_OFFSET = 100;

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const getSectionElement = useCallback((section: SectionKey) => {
    if (section === "home") return homeRef.current;
    if (section === "about") return aboutRef.current;
    if (section === "projects") return projectsRef.current;
    return contactRef.current;
  }, []);

  const scrollToSection = useCallback(
    (section: SectionKey) => {
      const element = getSectionElement(section);
      if (!element) return;

      const y =
        element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({
        top: Math.max(y, 0),
        behavior: "smooth",
      });
    },
    [getSectionElement],
  );

  const updateActiveSection = useCallback(() => {
    const marker = window.scrollY + NAV_OFFSET + 24;
    const sections: Array<[SectionKey, HTMLElement | null]> = [
      ["home", homeRef.current],
      ["about", aboutRef.current],
      ["projects", projectsRef.current],
      ["contact", contactRef.current],
    ];

    let nextActive: SectionKey = "home";
    for (const [key, element] of sections) {
      if (!element) continue;
      if (marker >= element.offsetTop) {
        nextActive = key;
      }
    }

    setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
  }, []);

  useEffect(() => {
    updateActiveSection();

    const onScrollOrResize = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [updateActiveSection]);

  return (
    <div className="bg-gray-950">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <section ref={homeRef}>
        <HeroSection onContactClick={() => scrollToSection("contact")} />
      </section>

      <section ref={aboutRef} className="flex justify-center">
        <About />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}
