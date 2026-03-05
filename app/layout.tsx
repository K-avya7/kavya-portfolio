"use client";

import "./globals.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";
import { Inter, Space_Grotesk, Allura } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${allura.variable}`}
    >
      <head>
        {/* 🔧 Critical fix for GitHub Pages subpath */}
        <base href="/kavya-portfolio/" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="bg-white text-slate-900">
        {/* Intro Overlay */}
        {!introFinished && (
          <IntroOverlay onFinish={() => setIntroFinished(true)} />
        )}

        {/* Navbar & Footer hidden during intro */}
        {introFinished && <Navbar />}

        {children}

        {introFinished && <Footer />}
      </body>
    </html>
  );
}