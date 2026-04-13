"use client";

import Image from "next/image";
import { HexagonBackground } from "../animate-ui/components/backgrounds/hexagon";
import { LiquidButton } from "../animate-ui/primitives/buttons/liquid";

export const HeroSection = () => {
  return (
    <HexagonBackground className="relative h-screen min-h-screen max-h-screen w-full overflow-hidden bg-black text-white">
      <section className="relative h-screen min-h-screen max-h-screen overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_50%_45%,rgba(250,204,21,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center">
          <Image
            src="/Image.png"
            alt="Gaurav Singh portrait"
            width={680}
            height={980}
            priority
            className="h-[76vh] w-auto object-contain opacity-75 contrast-110 saturate-105 md:h-[82vh] mask-[linear-gradient(to_bottom,transparent_0%,black_18%,black_78%,transparent_100%)] mask-size-[100%_100%] mask-no-repeat"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-2 bg-[radial-gradient(circle_at_50%_42%,transparent_34%,rgba(0,0,0,0.45)_72%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-56 bg-linear-to-t from-black via-black/95 to-transparent" />

        <div className="relative z-3 mx-auto flex h-full w-full max-w-7xl items-center px-6 pb-10 md:px-10">
          <div className="relative w-full max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400 md:text-lg">
              Hi!! I Am
            </p>

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Gaurav Singh
            </h1>
            <p className="mb-5 mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-white md:text-sm">
              And I Am a
            </p>

            <h1 className="max-w-4xl text-2xl font-black uppercase leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
              <span className="text-yellow-400">Full Stack</span> Developer
            </h1>

            <p className="mt-6 max-w-xl text-md leading-relaxed text-white/70 md:text-lg">
              I am Gaurav Singh, a full stack developer with 1+ years of
              experience building production-ready web apps with clean
              architecture, scalable APIs, and modern user interfaces.
            </p>

            <div className="mt-8 w-fit">
              <LiquidButton asChild className="cursor-pointer">
                <a href="mailto:gauravsinghmjm25@gmail.com">Contact Me</a>
              </LiquidButton>
            </div>
          </div>
        </div>
      </section>
    </HexagonBackground>
  );
};
