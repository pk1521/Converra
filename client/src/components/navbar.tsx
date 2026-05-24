import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "@/components/brand-logo";
import { openBookConsultation, openBookStrategyCall } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";
import { REAL_ESTATE_CTA_LABEL, REAL_ESTATE_SCHEDULE_CTA } from "@/lib/real-estate";

const growthNavLinks = [
  { label: "Pain Points", href: "/#pain-points" },
  { label: "Services", href: "/#what-we-solve" },
  { label: "Sprint", href: "/#revenue-engine-sprint" },
  { label: "Process", href: "/#process" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Contact", href: "/#calendly-embed" },
];

const realEstateNavLinks = [
  { label: "About", href: "/real-estate#re-about" },
  { label: "Services", href: "/real-estate#re-services" },
  { label: "Why Us", href: "/real-estate#re-why" },
  { label: "Process", href: "/real-estate#re-process" },
  { label: "Contact", href: "/real-estate#calendly-embed" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isRealEstate = location === "/real-estate";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isRealEstate ? realEstateNavLinks : growthNavLinks;
  const linkClass = isRealEstate
    ? isScrolled
      ? "text-slate-200/90 hover:text-brand-cyan"
      : "text-slate-200/80 hover:text-brand-cyan"
    : isScrolled
      ? "text-slate-200/90 hover:text-brand-cyan"
      : "text-white/85 hover:text-brand-cyan";

  const ctaLabel = isRealEstate ? REAL_ESTATE_SCHEDULE_CTA : GP_SCHEDULE_CTA;
  const openSchedule = isRealEstate ? openBookConsultation : openBookStrategyCall;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/95 backdrop-blur-xl shadow-lg shadow-brand-navy/30 py-3 border-b border-brand-teal/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-padding flex items-center justify-between gap-4">
        <BrandLogo variant={isRealEstate ? "real-estate" : "growth"} />

        <div className="hidden lg:flex items-center gap-6">
          {isRealEstate ? (
            <Link href="/" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Growth Partners
            </Link>
          ) : (
            <Link href="/about" className={`text-sm font-medium transition-colors ${linkClass}`}>
              About
            </Link>
          )}
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={`text-sm font-medium transition-colors ${linkClass}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          {!isRealEstate ? (
            <Button
              asChild
              variant="outline"
              className="border-brand-teal/50 text-brand-cyan hover:bg-brand-teal/10 font-semibold text-sm bg-transparent rounded-full"
            >
              <Link href="/real-estate">
                <Building2 className="h-4 w-4 mr-2" />
                {REAL_ESTATE_CTA_LABEL}
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="btn-secondary-outline border-brand-teal/40 text-sm rounded-full"
            >
              <Link href="/">Growth Partners</Link>
            </Button>
          )}
          <Button
            onClick={openSchedule}
            className="rounded-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-cyan text-white font-semibold shadow-lg shadow-brand-teal/25 transition-all duration-300 text-sm gp-btn-glow"
          >
            {ctaLabel}
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-brand-navy border-brand-teal/20">
              <div className="flex flex-col gap-6 mt-10">
                <BrandLogo variant={isRealEstate ? "real-estate" : "growth"} imageClassName="h-11" />
                {!isRealEstate ? (
                  <Link href="/real-estate" className="text-lg font-medium text-slate-100">
                    {REAL_ESTATE_CTA_LABEL}
                  </Link>
                ) : (
                  <Link href="/" className="text-lg font-medium text-slate-100">
                    Growth Partners
                  </Link>
                )}
                {navLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="text-lg font-medium text-slate-100">
                    {label}
                  </a>
                ))}
                {!isRealEstate && (
                  <Link href="/about" className="text-lg font-medium text-slate-100">
                    About
                  </Link>
                )}
                <Button
                  onClick={openSchedule}
                  className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal text-white font-semibold"
                >
                  {ctaLabel}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
