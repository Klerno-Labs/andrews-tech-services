import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Inventory } from "@/components/Inventory";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-terminal-bg">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Inventory />
      <Contact />
      <Footer />
    </main>
  );
}