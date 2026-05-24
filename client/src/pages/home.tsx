import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { WhatWeSolveSection } from "@/components/sections/WhatWeSolveSection";
import { SprintOfferSection } from "@/components/sections/SprintOfferSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { FounderDependencySection } from "@/components/sections/FounderDependencySection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="theme-growth min-h-screen bg-offwhite overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <WhatWeSolveSection />
      <SprintOfferSection />
      <ProcessSection />
      <OutcomesSection />
      <FounderDependencySection />
      <IndustriesSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
}
