import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { Button } from "@/components/ui/button";
import { LOGO_GROWTH_PARTNERS } from "@/lib/brand";
import { openBookConsultation, REAL_ESTATE_CALENDLY_EMBED_URL } from "@/lib/links";
import {
  CONSULTANCY_SUMMARY,
  FOOTER_PROMO_SUMMARY,
  REAL_ESTATE_SALE_GUARANTEE,
  REAL_ESTATE_SCHEDULE_CTA,
} from "@/lib/real-estate";
export function RealEstateFooter() {
  return (
    <footer id="re-contact" className="mt-auto w-full shrink-0 bg-brand-navy border-t border-brand-teal/20 py-16 text-slate-300">
      <div className="container-padding">
        <div className="mb-14 rounded-2xl border border-brand-teal/25 bg-brand-navy/80 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              List your property with Converra
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {REAL_ESTATE_SALE_GUARANTEE}
            </p>
          </div>
          <Button
            onClick={openBookConsultation}
            className="shrink-0 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold shadow-lg shadow-brand-teal/25 h-12 px-6 rounded-full"
          >
            {REAL_ESTATE_SCHEDULE_CTA}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <BrandLogo variant="real-estate" className="mb-5" imageClassName="h-14 md:h-16 rounded-2xl" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-6">
              {FOOTER_PROMO_SUMMARY} {CONSULTANCY_SUMMARY}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/" className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors">
                <img src={LOGO_GROWTH_PARTNERS} alt="" className="h-6 w-auto opacity-90 rounded-xl" aria-hidden />
                Growth Partners
              </Link>
              <Link href="/about" className="hover:text-brand-cyan transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Book a call</h4>
            <CalendlyEmbed url={REAL_ESTATE_CALENDLY_EMBED_URL} />
          </div>
        </div>

        <div className="pt-8 border-t border-brand-teal/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Converra Growth Partners · PK Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/converra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-cyan transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-cyan transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
