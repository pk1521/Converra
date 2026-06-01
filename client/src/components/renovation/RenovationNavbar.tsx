import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { VerticalPageTabs } from "@/components/VerticalPageTabs";
import { RenovationBrandTitle } from "@/components/renovation/RenovationBrandTitle";

const navLinks = [
  { label: "About", href: "#reno-about" },
  { label: "Services", href: "#reno-services" },
  { label: "Gallery", href: "#reno-gallery" },
  { label: "Process", href: "#reno-process" },
  { label: "Calculator", href: "#reno-calculator" },
  { label: "Contact", href: "#book-a-call" },
];

export function RenovationNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = isScrolled
    ? "text-slate-200/90 hover:text-reno-gold-light"
    : "text-white/85 hover:text-reno-gold-light";

  const navShell = isScrolled
    ? "bg-reno-navy/95 backdrop-blur-xl shadow-lg border-b border-reno-gold/20"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}>
      <div className="container-padding">
        <div className="flex items-center gap-4 lg:gap-10 min-h-[3.75rem] lg:min-h-[4.25rem]">
          <Link href="/renovation" className="shrink-0 min-w-0 max-w-[10.5rem] sm:max-w-xs">
            <RenovationBrandTitle />
            <span className="mt-0.5 block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-reno-gold-light/75 hidden xl:block">
              {PK_GROUPS_TAGLINE}
            </span>
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
            <VerticalPageTabs theme="renovation" />
          </div>

          <div className="hidden xl:flex items-center gap-6 shrink-0">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${linkClass}`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="xl:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-reno-navy border-reno-gold/20">
                <div className="flex flex-col gap-8 mt-10">
                  <RenovationBrandTitle size="sheet" />
                  <VerticalPageTabs theme="renovation" variant="menu" />
                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                    {navLinks.map(({ label, href }) => (
                      <a key={label} href={href} className="text-lg font-medium text-slate-100">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
