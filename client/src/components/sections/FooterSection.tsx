import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { Button } from "@/components/ui/button";
import { LOGO_REAL_ESTATE } from "@/lib/brand";
import {
  FOOTER_PROMO_SUMMARY,
  REAL_ESTATE_CTA_LABEL,
  REAL_ESTATE_EXPLORE_LABEL,
  REAL_ESTATE_SERVICE_NAME,
} from "@/lib/real-estate";

export function FooterSection() {
  return (
    <footer id="footer-contact" className="bg-brand-navy border-t border-brand-teal/20 py-16 text-slate-300">
      <div className="container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <BrandLogo variant="growth" className="mb-5" imageClassName="h-14 md:h-16 rounded-2xl" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Revenue systems and GTM infrastructure for founder-led and growth-stage companies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#what-we-solve" className="hover:text-brand-cyan transition-colors">Revenue Systems</a></li>
              <li><a href="/#revenue-engine-sprint" className="hover:text-brand-cyan transition-colors">Revenue Engine Sprint</a></li>
              <li><a href="/#process" className="hover:text-brand-cyan transition-colors">Our Framework</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-brand-cyan transition-colors">About</a></li>
              <li><a href="/real-estate" className="hover:text-brand-cyan transition-colors">{REAL_ESTATE_CTA_LABEL}</a></li>
              <li><a href="/#industries" className="hover:text-brand-cyan transition-colors">Industries</a></li>
              <li><a href="/#footer-contact" className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#outcomes" className="hover:text-brand-cyan transition-colors">Outcomes</a></li>
              <li><a href="/#testimonials" className="hover:text-brand-cyan transition-colors">Transformations</a></li>
              <li><a href="/#pain-points" className="hover:text-brand-cyan transition-colors">Why Systems Matter</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-14 rounded-2xl border border-brand-teal/25 bg-brand-navy/80 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-xl">
            <img
              src={LOGO_REAL_ESTATE}
              alt={REAL_ESTATE_SERVICE_NAME}
              className="h-14 w-auto object-contain bg-white rounded-2xl px-3 py-2"
            />
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                Consultancy & Real Estate
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {FOOTER_PROMO_SUMMARY}
              </p>
            </div>
          </div>
          <Button
            asChild
            className="shrink-0 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold shadow-lg shadow-brand-teal/25 h-12 px-6 rounded-full"
          >
            <Link href="/real-estate">
              {REAL_ESTATE_EXPLORE_LABEL}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mb-14">
          <h4 className="font-semibold text-white mb-4">Book a call</h4>
          <CalendlyEmbed />
        </div>

        <div className="pt-8 border-t border-brand-teal/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Converra Growth Partners · PK Groups. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/converra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
