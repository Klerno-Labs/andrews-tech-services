import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew's Tech Services | Hardware Recovery & Restoration",
  description: "Quick-turn diagnostics and repair for bulk electronics. Android, Apple, and Windows restoration services for flippers.",
  openGraph: {
    title: "Andrew's Tech Services | Hardware Recovery",
    description: "Professional electronics rebuilding and restoration. Serving flippers and businesses with hacker-grade efficiency.",
    url: "https://andrewstech.com",
    siteName: "Andrew's Tech Services",
    images: [
      {
        url: "https://placehold.co/1200x630/030303/00FF41?text=ANDREWS_TECH_OG",
        width: 1200,
        height: 630,
        alt: "Andrew's Tech Services Open Graph",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} bg-terminal-bg text-terminal-text selection:bg-terminal-primary selection:text-black`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-mono">
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Andrew's Tech Services",
              "image": "https://placehold.co/1200x630/030303/00FF41?text=ANDREWS_TECH_OG",
              "description": "Quick-turn diagnostics and repair for bulk electronics. Android, Apple, and Windows restoration.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[ADDRESS]",
                "addressLocality": "[CITY]",
                "addressRegion": "[STATE]",
                "postalCode": "[ZIP]",
                "addressCountry": "US",
              },
              "priceRange": "$$",
              "telephone": "[PHONE]",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}