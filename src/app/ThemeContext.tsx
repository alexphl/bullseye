"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
