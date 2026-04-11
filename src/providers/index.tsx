"use client";

import { ReactNode } from "react";

import { SplashProvider } from "./SplashProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <SplashProvider>{children}</SplashProvider>;
}

export default Providers;
