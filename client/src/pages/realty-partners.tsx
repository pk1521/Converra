import { RealtyPartnersNavbar } from "@/components/realty-partners/RealtyPartnersNavbar";
import { RealtyPartnersHero } from "@/components/realty-partners/RealtyPartnersHero";
import { RealtyPartnersAbout } from "@/components/realty-partners/RealtyPartnersAbout";
import { RealtyPartnersServices } from "@/components/realty-partners/RealtyPartnersServices";
import { RealtyPartnersWhy } from "@/components/realty-partners/RealtyPartnersWhy";
import { RealtyPartnersProcess } from "@/components/realty-partners/RealtyPartnersProcess";
import { RealtyPartnersClients } from "@/components/realty-partners/RealtyPartnersClients";
import { RealtyPartnersAdvantage } from "@/components/realty-partners/RealtyPartnersAdvantage";
import { RealtyPartnersTestimonials } from "@/components/realty-partners/RealtyPartnersTestimonials";
import { RealtyPartnersCta } from "@/components/realty-partners/RealtyPartnersCta";
import { RealtyPartnersContact } from "@/components/realty-partners/RealtyPartnersContact";
import { RealtyPartnersFooter } from "@/components/realty-partners/RealtyPartnersFooter";
import { FloatingWhatsApp } from "@/components/realty-partners/FloatingWhatsApp";
import { useEffect } from "react";

export default function RealtyPartners() {
  useEffect(() => {
    document.title = "Converra Realty Partners | Real Estate Growth Consulting · Trichy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Converra Realty Partners is a Sales, Marketing & Growth Partner for builders, developers, and plot promoters in Trichy, Tamil Nadu. Accelerate inventory movement with strategic growth systems.",
      );
    }
  }, []);

  return (
    <div className="theme-realty flex min-h-full flex-1 flex-col bg-realty-navy overflow-x-hidden">
      <RealtyPartnersNavbar />
      <main className="flex-1 w-full">
        <RealtyPartnersHero />
        <RealtyPartnersAbout />
        <RealtyPartnersServices />
        <RealtyPartnersWhy />
        <RealtyPartnersProcess />
        <RealtyPartnersClients />
        <RealtyPartnersAdvantage />
        <RealtyPartnersTestimonials />
        <RealtyPartnersCta />
        <RealtyPartnersContact />
      </main>
      <RealtyPartnersFooter />
      <FloatingWhatsApp />
    </div>
  );
}
