"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "./SplashScreen.module.css";

interface SplashScreenProps {
  onComplete?: () => void;
  onTransitionStart?: () => void;
}

export default function SplashScreen({ onComplete, onTransitionStart }: SplashScreenProps) {
  const splashRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const introRef = useRef<SVGTextElement>(null);
  const nameRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    if (!splashRef.current || !svgRef.current || !introRef.current || !nameRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const introLength = Math.ceil(introRef.current?.getComputedTextLength?.() ?? 980) + 40;
      const nameLength = Math.ceil(nameRef.current?.getComputedTextLength?.() ?? 1500) + 40;

      gsap.set(svgRef.current, { autoAlpha: 0, scale: 0.96 });
      gsap.set(introRef.current, {
        strokeDasharray: introLength,
        strokeDashoffset: introLength,
        fill: "rgba(255,255,255,0)",
      });
      gsap.set(nameRef.current, {
        strokeDasharray: nameLength,
        strokeDashoffset: nameLength,
        fill: "rgba(255,210,31,0)",
      });

      const timeline = gsap.timeline();

      timeline
        .to(svgRef.current, { autoAlpha: 1, scale: 1, duration: 0.75, ease: "power3.out" })
        .to(
          introRef.current,
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" },
          "-=0.15",
        )
        .to(
          nameRef.current,
          { strokeDashoffset: 0, duration: 1.35, ease: "power2.inOut" },
          "-=0.1",
        )
        .to(
          splashRef.current,
          {
            autoAlpha: 0,
            duration: 0.45,
            delay: 0.2,
            ease: "power2.inOut",
            onStart: () => onTransitionStart?.(),
            onComplete: () => onComplete?.(),
          },
        );
    }, splashRef);

    return () => ctx.revert();
  }, [onComplete, onTransitionStart]);

  return (
    <main className={styles.splash} ref={splashRef}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <svg
          ref={svgRef}
          className={styles.introSvg}
          viewBox="0 0 1400 460"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Hi I am Gaurav Singh"
          role="img"
        >
          <text
            className={`${styles.introLine} ${styles.introLineTop}`}
            x="50%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            ref={introRef}
          >
            Hi!! I am
          </text>

          <text
            className={`${styles.introLine} ${styles.introLineBottom}`}
            x="50%"
            y="68%"
            dominantBaseline="middle"
            textAnchor="middle"
            ref={nameRef}
          >
            Gaurav Singh
          </text>
        </svg>
      </div>
    </main>
  );
}