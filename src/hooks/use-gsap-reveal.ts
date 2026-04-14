"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UseGsapRevealOptions = {
  selector?: string;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  immediate?: boolean;
};

export function useGsapReveal(
  scopeRef: RefObject<HTMLElement | null>,
  options: UseGsapRevealOptions = {},
) {
  const {
    selector = "[data-animate]",
    start = "top 85%",
    y = 28,
    duration = 0.8,
    stagger = 0.12,
    once = true,
    immediate = false,
  } = options;

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector, scope);
      if (!targets.length) return;

      gsap.set(targets, { autoAlpha: 0, y });

      const baseTween = {
        autoAlpha: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out" as const,
      };

      if (immediate) {
        gsap.to(targets, { ...baseTween, delay: 0.15 });
        return;
      }

      gsap.to(targets, {
        ...baseTween,
        scrollTrigger: {
          trigger: scope,
          start,
          once,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, selector, start, y, duration, stagger, once, immediate]);
}

