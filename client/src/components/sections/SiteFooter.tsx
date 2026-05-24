import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { LOGO_GROWTH_PARTNERS, LOGO_REAL_ESTATE, PK_GROUPS_TAGLINE } from "@/lib/brand";
import {
  FOOTER_PROMO_SUMMARY,
  REAL_ESTATE_CTA_LABEL,
  REAL_ESTATE_EXPLORE_LABEL,
  REAL_ESTATE_SERVICE_NAME,
} from "@/lib/real-estate";

type SiteFooterProps = {
  variant: "growth" | "real-estate";
};

const growthLinks = {
  services: [
    { label: "Revenue Systems", href: "/#what-we-solve" },
    { label: "Revenue Engine Sprint", href: "/#revenue-engine-sprint" },
    { label: "Our Framework", href: "/#process" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: REAL_ESTATE_CTA_LABEL, href: "/real-estate" },
    { label: "Industries", href: "/#industries" },
    { label: "Book a call", href: "/#book-a-call" },
  ],
  resources: [
    { label: "Outcomes", href: "/#outcomes" },
    { label: "Transformations", href: "/#testimonials" },
    { label: "Why Systems Matter", href: "/#pain-points" },
  ],
};

const realEstateLinks = {
  services: [
    { label: "About", href: "/real-estate#re-about" },
    { label: "Services", href: "/real-estate#re-services" },
    { label: "Process", href: "/real-estate#re-process" },
   ],
  company: [
    { label: "Growth Partners", href: "/" },
    { label: "About", href: "/about" },
    { label: "Book a call", href: "/real-estate#book-a-call" },
  ],
  resources: [
    { label: "Why Converra", href: "/real-estate#re-why" },
    { label: "Testimonials", href: "/real-estate#re-testimonials" },
  ],
};

export function SiteFooter({ variant }: SiteFooterProps) {
  const isGrowth = variant === "growth";
  const links = isGrowth ? growthLinks : realEstateLinks;

  return (
    <footer className="brand-footer mt-auto w-full shrink-0">
      <div className="container-padding py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLogo
              variant={isGrowth ? "growth" : "real-estate"}
              className="mb-5"
              imageClassName="h-12 md:h-14 rounded-2xl"
            />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-3">
              {isGrowth
                ? "Revenue systems and GTM infrastructure for founder-led and growth-stage companies."
                : FOOTER_PROMO_SUMMARY}
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-brand-cyan/80">
              {PK_GROUPS_TAGLINE}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                {isGrowth ? "Services" : "Explore"}
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {links.services.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {links.company.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
                {isGrowth ? "Resources" : "More"}
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {links.resources.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-brand-cyan transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {isGrowth && (
          <div className="mt-12 rounded-2xl border border-brand-teal/20 bg-brand-navy/60 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <img
                src={LOGO_REAL_ESTATE}
                alt={REAL_ESTATE_SERVICE_NAME}
                className="h-12 w-auto object-contain bg-white rounded-xl px-2.5 py-1.5 shrink-0"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Consultancy & Real Estate
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  {FOOTER_PROMO_SUMMARY}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold h-11 px-6"
            >
              <Link href="/real-estate">
                {REAL_ESTATE_EXPLORE_LABEL}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-brand-teal/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Converra Growth Partners · PK Groups. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {!isGrowth && (
              <Link href="/" className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors">
                <img src={LOGO_GROWTH_PARTNERS} alt="" className="h-5 w-auto rounded-lg opacity-90" aria-hidden />
                Growth Partners
              </Link>
            )}
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
