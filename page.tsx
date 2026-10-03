import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryNav } from "@/components/CategoryNav";
import { AboutErsaq } from "@/components/AboutErsaq";
import { Products } from "@/components/Products";
import { Certificates } from "@/components/Certificates";
import { HowItWorks } from "@/components/HowItWorks";
import { Career } from "@/components/Career";
import { Gifts } from "@/components/Gifts";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <CategoryNav />
        <AboutErsaq />
        <Products />
        <Certificates />
        <HowItWorks />
        <Career />
        <Gifts />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
