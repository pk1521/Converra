import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { openBookRealtyConsultation } from "@/lib/links";
import { REALTY_PRIMARY_CTA } from "@/lib/realty-partners";
import { VerticalPageTabs } from "@/components/VerticalPageTabs";
import { VerticalLogo } from "@/components/VerticalLogo";

const navLinks = [
  { label: "About", href: "#rp-about" },
  { label: "Services", href: "#rp-services" },
  { label: "Why Us", href: "#rp-why" },
  { label: "Process", href: "#rp-process" },
  { label: "Clients", href: "#rp-clients" },
  { label: "Contact", href: "#book-a-call" },
];

export function RealtyPartnersNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = isScrolled
    ? "nav-link text-slate-200/90 hover:text-realty-gold-light"
    : "nav-link text-white/90 hover:text-realty-gold-light";

  const navShell = isScrolled
    ? "bg-realty-navy/95 backdrop-blur-xl shadow-lg border-b border-realty-gold/20"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}>
      <div className="container-padding">
        <div className="nav-bar-inner">
          <VerticalLogo vertical="realty" />

          <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
            <VerticalPageTabs theme="realty" />
          </div>

          <div className="hidden lg:flex items-center gap-7 shrink-0">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
            <Button
              onClick={openBookRealtyConsultation}
              className="hidden md:inline-flex rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-muted hover:from-realty-gold-light hover:to-realty-gold text-realty-navy font-semibold shadow-lg shadow-realty-gold/20 text-sm h-9 px-5"
            >
              {REALTY_PRIMARY_CTA}
            </Button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-realty-navy border-realty-gold/20">
                  <div className="flex flex-col gap-8 mt-10">
                    <VerticalLogo vertical="realty" variant="sheet" />
                    <VerticalPageTabs theme="realty" variant="menu" />
                    <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                      {navLinks.map(({ label, href }) => (
                        <a key={label} href={href} className="text-lg font-medium text-slate-100">
                          {label}
                        </a>
                      ))}
                    </div>
                    <Button
                      onClick={openBookRealtyConsultation}
                      className="w-full rounded-full bg-realty-gold text-realty-navy font-semibold"
                    >
                      {REALTY_PRIMARY_CTA}
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
