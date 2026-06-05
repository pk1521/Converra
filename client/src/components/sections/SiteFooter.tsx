import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { VerticalLogo } from "@/components/VerticalLogo";
import { Button } from "@/components/ui/button";
import {
  LOGO_REALTY_PARTNERS,
  LOGO_RENOVATION_SOLUTIONS,
  CONVERRA_EMAIL,
  CONVERRA_PHONE_DISPLAY,
  CONVERRA_WHATSAPP_URL,
  PK_GROUPS_TAGLINE,
} from "@/lib/brand";
import {
  REALTY_EXPLORE_LABEL,
  REALTY_FOOTER_KEYWORDS,
  REALTY_NAV_LABEL,
  REALTY_PARTNERS_TAGLINE,
  REALTY_SERVICE_NAME,
} from "@/lib/realty-partners";
import {
  RENOVATION_EXPLORE_LABEL,
  RENOVATION_FOOTER_KEYWORDS,
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

type VerticalFooterCardProps = {
  href: string;
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  keywords: readonly string[];
  ctaLabel: string;
  theme: "realty" | "renovation";
};

function VerticalFooterCard({
  href,
  logoSrc,
  logoAlt,
  tagline,
  keywords,
  ctaLabel,
  theme,
}: VerticalFooterCardProps) {
  const isRealty = theme === "realty";

  return (
    <div
      className={
        isRealty
          ? "rounded-2xl border border-realty-gold/25 bg-realty-navy/80 p-5 md:p-6 flex flex-col gap-4"
          : "rounded-2xl border border-reno-gold/30 bg-stone-900/90 p-5 md:p-6 flex flex-col gap-4"
      }
    >
      <img
        src={logoSrc}
        alt={logoAlt}
        className="h-10 w-auto max-w-[10rem] object-contain rounded-lg bg-white p-1"
      />
      <p
        className={
          isRealty
            ? "text-[10px] font-semibold uppercase tracking-label text-realty-gold-light"
            : "text-[10px] font-semibold uppercase tracking-label text-reno-gold-light"
        }
      >
        {tagline}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {keywords.map((kw) => (
          <li
            key={kw}
            className={
              isRealty
                ? "text-[11px] font-medium px-2.5 py-1 rounded-md bg-realty-gold/10 border border-realty-gold/20 text-realty-gold-light/90"
                : "text-[11px] font-medium px-2.5 py-1 rounded-md bg-reno-gold/10 border border-reno-gold/25 text-reno-gold-light/90"
            }
          >
            {kw}
          </li>
        ))}
      </ul>
      <Button
        asChild
        className={
          isRealty
            ? "mt-auto w-full sm:w-auto self-start rounded-full bg-realty-gold hover:bg-realty-gold-light text-realty-navy font-semibold h-10 px-5 text-sm"
            : "mt-auto w-full sm:w-auto self-start rounded-full bg-reno-gold hover:bg-reno-gold-light text-stone-950 font-semibold h-10 px-5 text-sm"
        }
      >
        <Link href={href}>
          {ctaLabel}
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="brand-footer mt-auto w-full shrink-0">
      <div className="container-padding py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <VerticalLogo vertical="growth" variant="footer" className="mb-5" />
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

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <VerticalFooterCard
            href="/realty-partners"
            logoSrc={LOGO_REALTY_PARTNERS}
            logoAlt={REALTY_SERVICE_NAME}
            tagline={REALTY_PARTNERS_TAGLINE}
            keywords={REALTY_FOOTER_KEYWORDS}
            ctaLabel={REALTY_EXPLORE_LABEL}
            theme="realty"
          />
          <VerticalFooterCard
            href="/renovation"
            logoSrc={LOGO_RENOVATION_SOLUTIONS}
            logoAlt={RENOVATION_NAME}
            tagline={RENOVATION_TAGLINE}
            keywords={RENOVATION_FOOTER_KEYWORDS}
            ctaLabel={RENOVATION_EXPLORE_LABEL}
            theme="renovation"
          />
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
