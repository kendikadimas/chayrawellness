import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBand from "@/components/MarqueeBand";
import ValueTrustSection from "@/components/ValueTrustSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import HomeExperienceSection from "@/components/HomeExperienceSection";
import FinalClosingSection from "@/components/FinalClosingSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] flex flex-col selection:bg-[#8C6F58] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* MARQUEE BAND */}
      <MarqueeBand />

      {/* SECTION 2 — VALUE & TRUST */}
      <ValueTrustSection />

      {/* SECTION 3 — H-1 SPECIAL OFFER */}
      <SpecialOfferSection />

      {/* SECTION 4 — HOME EXPERIENCE */}
      <HomeExperienceSection />

      {/* SECTION 5 — FINAL CLOSING */}
      <FinalClosingSection />

      {/* Footer & Mobile Floating CTA */}
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
