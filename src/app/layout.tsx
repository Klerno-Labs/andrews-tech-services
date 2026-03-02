import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Andrew's Tech Services | Hardware Recovery Protocol",
  description: "Quick-turn diagnostics and repair for bulk electronics. The standard for hardware flipping and restoration.",
  keywords: ["tech repair", "android repair", "apple repair", "bulk electronics", "flipping", "hardware services"],
  openGraph: {
    title: "Andrew's Tech Services",
    description: "Hardware Recovery Protocol",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-void text-text-main selection:bg-terminal-green selection:text-black`}>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
--- END FILE -->