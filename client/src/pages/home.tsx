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
import { ConverraVerticalsSection } from "@/components/sections/ConverraVerticalsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { BookCallSection } from "@/components/sections/BookCallSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="theme-growth flex min-h-full flex-1 flex-col bg-offwhite overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <PainPointsSection />
        <WhatWeSolveSection />
        <SprintOfferSection />
        <ProcessSection />
        <OutcomesSection />
        <FounderDependencySection />
        <IndustriesSection />
        <TestimonialsSection />
        <ConverraVerticalsSection />
        <FinalCtaSection />
        <BookCallSection />
      </main>
      <FooterSection />
    </div>
  );
}
