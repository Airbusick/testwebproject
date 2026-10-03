import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Marck_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/data/siteData";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const script = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "ru_RU",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable} ${script.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
