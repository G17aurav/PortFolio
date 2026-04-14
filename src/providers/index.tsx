"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

import { SplashProvider } from "./SplashProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.08,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.1,
      }}
    >
      <SplashProvider>{children}</SplashProvider>
    </ReactLenis>
  );
}

export default Providers;
