import { RenovationNavbar } from "@/components/renovation/RenovationNavbar";
import { RenovationHero } from "@/components/renovation/RenovationHero";
import { RenovationAbout } from "@/components/renovation/RenovationAbout";
import { RenovationServices } from "@/components/renovation/RenovationServices";
import { RenovationBeforeAfter } from "@/components/renovation/RenovationBeforeAfter";
import { RenovationWhy } from "@/components/renovation/RenovationWhy";
import { RenovationProcess } from "@/components/renovation/RenovationProcess";
import { RenovationCalculator } from "@/components/renovation/RenovationCalculator";
import { RenovationClients } from "@/components/renovation/RenovationClients";
import { RenovationSpecial } from "@/components/renovation/RenovationSpecial";
import { RenovationTestimonials } from "@/components/renovation/RenovationTestimonials";
import { RenovationCta } from "@/components/renovation/RenovationCta";
import { RenovationContact } from "@/components/renovation/RenovationContact";
import { RenovationFooter } from "@/components/renovation/RenovationFooter";
import { FloatingWhatsApp } from "@/components/renovation/FloatingWhatsApp";
import { useEffect } from "react";

export default function Renovation() {
  useEffect(() => {
    document.title = "Converra Renovation Solutions | Property Transformation · Trichy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Converra Renovation Solutions provides premium renovation, remodeling, and property upgrade services for homes, villas, apartments, and commercial spaces in Trichy, Tamil Nadu.",
      );
    }
  }, []);

  return (
    <div className="theme-renovation flex min-h-full flex-1 flex-col bg-reno-navy overflow-x-hidden">
      <RenovationNavbar />
      <main className="flex-1 w-full">
        <RenovationHero />
        <RenovationAbout />
        <RenovationServices />
        <RenovationBeforeAfter />
        <RenovationWhy />
        <RenovationProcess />
        <RenovationCalculator />
        <RenovationClients />
        <RenovationSpecial />
        <RenovationTestimonials />
        <RenovationCta />
        <RenovationContact />
      </main>
      <RenovationFooter />
      <FloatingWhatsApp />
    </div>
  );
}
