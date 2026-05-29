import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://adga-solutions.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ADGA Solutions | Custom Software for Produce Distribution",
  description:
    "ADGA Solutions builds custom software and modern landing pages for produce distributors on the U.S.–Mexico border at Nogales. We listen first, then build the practical tools that make the work easier.",
  keywords: [
    "produce distribution software",
    "Nogales produce",
    "custom software",
    "daily quote system",
    "produce distributor websites",
  ],
  openGraph: {
    title: "ADGA Solutions",
    description:
      "Tailor made software solutions for produce distribution businesses. We listen first, then build the practical tools that make the work easier.",
    url: SITE_URL,
    siteName: "ADGA Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADGA Solutions",
    description:
      "Tailor made software solutions for produce distribution businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
