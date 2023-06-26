import "../styles/globals.css";
import dynamic from "next/dynamic";
import ThemeContextProvider from "./ThemeContext";
import QueryProvider from "./QueryProvider";
import Transition from "./Transition";
import type { ReactNode } from "react";
import ListContextProvider from "./ListContext";

const FullscreenModal = dynamic(() => import("./FullscreenModal"));

import localFont from "next/font/local";

// If loading a variable font, you don't need to specify the font weight
const bodyFont = localFont({
  src: "../styles/Satoshi-Variable.woff2",
  variable: "--font-body",
  display: "swap",
});

const displayFont = localFont({
  src: "../styles/Unbounded-Variable.ttf",
  variable: "--font-display",
  display: "swap",
});

export default function ProvidersHOC({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeContextProvider>
        <html
          lang="en"
          className={`${displayFont.variable} ${bodyFont.variable} bg-neutral-900 font-sans`}
        >
          <body className="font-sans text-neutral-100">
            <FullscreenModal />
            <div className="text-neutral-100 md:ml-16">
              <Transition>
                <ListContextProvider>{children}</ListContextProvider>
              </Transition>
            </div>
          </body>
        </html>
      </ThemeContextProvider>
    </QueryProvider>
  );
}
