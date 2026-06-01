import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import {
  CONVERRA_EMAIL,
  CONVERRA_PHONE_DISPLAY,
  CONVERRA_WHATSAPP_URL,
  PK_GROUPS_TAGLINE,
} from "@/lib/brand";
import {
  REALTY_EXPLORE_LABEL,
  REALTY_FOOTER_SUMMARY,
  REALTY_NAV_LABEL,
  REALTY_PARTNERS_TAGLINE,
  REALTY_SERVICE_NAME,
} from "@/lib/realty-partners";
import {
  RENOVATION_EXPLORE_LABEL,
  RENOVATION_FOOTER_SUMMARY,
  RENOVATION_NAV_LABEL,
  RENOVATION_TAGLINE,
  RENOVATION_NAME,
} from "@/lib/renovation";

const growthLinks = {
  services: [
    { label: "Revenue Systems", href: "/#what-we-solve" },
    { label: "Revenue Engine Sprint", href: "/#revenue-engine-sprint" },
    { label: "Our Framework", href: "/#process" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: REALTY_NAV_LABEL, href: "/realty-partners" },
    { label: RENOVATION_NAV_LABEL, href: "/renovation" },
    { label: "Industries", href: "/#industries" },
    { label: "Book a call", href: "/#book-a-call" },
  ],
  resources: [
    { label: "Outcomes", href: "/#outcomes" },
    { label: "Transformations", href: "/#testimonials" },
    { label: "Why Systems Matter", href: "/#pain-points" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="brand-footer mt-auto w-full shrink-0">
      <div className="container-padding py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLogo className="mb-5" imageClassName="h-12 md:h-14 rounded-2xl" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-3">
              Revenue systems and GTM infrastructure for founder-led and growth-stage companies.
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-brand-cyan/80 mb-4">
              {PK_GROUPS_TAGLINE}
            </p>
            <div className="space-y-1.5 text-sm text-slate-400">
              <a href={`mailto:${CONVERRA_EMAIL}`} className="hover:text-brand-cyan transition-colors block">
                {CONVERRA_EMAIL}
              </a>
              <a href={CONVERRA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors block">
                {CONVERRA_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {growthLinks.services.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {growthLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Resources</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {growthLinks.resources.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-realty-gold/25 bg-realty-navy/80 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-1">{REALTY_SERVICE_NAME}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-realty-gold-light mb-2">{REALTY_PARTNERS_TAGLINE}</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">{REALTY_FOOTER_SUMMARY}</p>
            </div>
            <Button asChild className="shrink-0 rounded-full bg-realty-gold hover:bg-realty-gold-light text-realty-navy font-semibold h-11 px-6">
              <Link href="/realty-partners">{REALTY_EXPLORE_LABEL}<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-reno-gold/25 bg-reno-charcoal/90 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-1">{RENOVATION_NAME}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-reno-gold-light mb-2">{RENOVATION_TAGLINE}</p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">{RENOVATION_FOOTER_SUMMARY}</p>
            </div>
            <Button asChild className="shrink-0 rounded-full bg-reno-gold hover:bg-reno-gold-light text-reno-navy font-semibold h-11 px-6">
              <Link href="/renovation">{RENOVATION_EXPLORE_LABEL}<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-teal/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Converra Growth Partners · PK Groups. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/converra/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
