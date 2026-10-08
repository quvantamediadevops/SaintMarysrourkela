import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/shared/json-ld";
import { RevealObserver } from "@/components/shared/reveal-observer";
import { school } from "@/content/site";
import { baseKeywords, socialImage } from "@/lib/metadata";
import { schoolJsonLd } from "@/lib/structured-data";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-var.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/fraunces-var-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

const hanken = localFont({
  src: "./fonts/hanken-grotesk-var.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-hanken",
  display: "swap",
  adjustFontFallback: "Arial",
});

const defaultTitle = `${school.name}, Jagda, Raurkela | ICSE School · Nursery to Standard X`;
const defaultDescription =
  "Saint Mary’s School, Jagda, Raurkela — a co-educational ICSE school affiliated to CISCE, established in 1988, nurturing children from Nursery to Standard X with strong academics, character and joyful learning.";

export const metadata: Metadata = {
  metadataBase: new URL(school.url),
  title: {
    default: defaultTitle,
    template: `%s | ${school.name}, Jagda, Raurkela`,
  },
  description: defaultDescription,
  applicationName: `${school.name}, Jagda`,
  keywords: baseKeywords,
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: `${school.name}, Jagda`,
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage.url],
  },
  robots: { index: true, follow: true },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#fbf8f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-sm bg-navy-900 px-4 py-3 font-semibold text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <JsonLd data={schoolJsonLd()} />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
