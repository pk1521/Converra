import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GrowthBrandTitle } from "@/components/GrowthBrandTitle";
import { VerticalPageTabs } from "@/components/VerticalPageTabs";
import { openBookStrategyCall } from "@/lib/links";
import { GP_SCHEDULE_CTA } from "@/lib/growth-partners";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";

const growthNavLinks = [
  { label: "Pain Points", href: "/#pain-points" },
  { label: "Services", href: "/#what-we-solve" },
  { label: "Sprint", href: "/#revenue-engine-sprint" },
  { label: "Process", href: "/#process" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Contact", href: "/#book-a-call" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isAbout = location === "/about";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = isScrolled
    ? "text-slate-200/90 hover:text-brand-cyan"
    : "text-white/85 hover:text-brand-cyan";

  const navShell = isScrolled
    ? "bg-brand-navy/95 backdrop-blur-xl shadow-lg border-b border-brand-teal/20"
    : "bg-transparent";

  const sectionLinks = [
    ...(!isAbout ? [{ label: "About", href: "/about" as const }] : []),
    ...growthNavLinks,
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}>
      <div className="container-padding">
        <div className="flex items-center gap-4 lg:gap-10 min-h-[3.75rem] lg:min-h-[4.25rem]">
          <Link href="/" className="shrink-0 min-w-0 max-w-[10.5rem] sm:max-w-xs">
            <GrowthBrandTitle />
            <span className="mt-0.5 block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-brand-cyan/75 hidden xl:block">
              {PK_GROUPS_TAGLINE}
            </span>
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center min-w-0 px-1">
            <VerticalPageTabs theme="growth" />
          </div>

          <div className="hidden xl:flex items-center gap-6 shrink-0">
            {sectionLinks.map(({ label, href }) =>
              href.startsWith("/#") ? (
                <a
                  key={label}
                  href={href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${linkClass}`}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${linkClass}`}
                >
                  {label}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
            <Button
              onClick={openBookStrategyCall}
              className="hidden md:inline-flex rounded-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-cyan text-white font-semibold shadow-lg shadow-brand-teal/25 text-sm h-9 px-5 gp-btn-glow"
            >
              {GP_SCHEDULE_CTA}
            </Button>

            <div className="xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-brand-navy border-brand-teal/20">
                  <div className="flex flex-col gap-8 mt-10">
                    <GrowthBrandTitle size="sheet" />
                    <VerticalPageTabs theme="growth" variant="menu" />
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                      {sectionLinks.map(({ label, href }) =>
                        href.startsWith("/#") ? (
                          <a key={label} href={href} className="text-lg font-medium text-slate-100">
                            {label}
                          </a>
                        ) : (
                          <Link key={label} href={href} className="text-lg font-medium text-slate-100">
                            {label}
                          </Link>
                        ),
                      )}
                    </div>
                    <Button
                      onClick={openBookStrategyCall}
                      className="w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal text-white font-semibold"
                    >
                      {GP_SCHEDULE_CTA}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
