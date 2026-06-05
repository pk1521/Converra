import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VerticalPageTabs } from "@/components/VerticalPageTabs";
import { VerticalLogo } from "@/components/VerticalLogo";

const navLinks = [
  { label: "About", href: "#reno-about" },
  { label: "Services", href: "#reno-services" },
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
    ? "nav-link text-slate-200/90 hover:text-reno-gold-light"
    : "nav-link text-white/90 hover:text-reno-gold-light";

  const navShell = isScrolled
    ? "bg-reno-navy/95 backdrop-blur-xl shadow-lg border-b border-reno-gold/20"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}>
      <div className="container-padding">
        <div className="nav-bar-inner">
          <VerticalLogo vertical="renovation" />

          <div className="hidden md:flex flex-1 items-center justify-center min-w-0">
            <VerticalPageTabs theme="renovation" />
          </div>

          <div className="hidden lg:flex items-center gap-7 shrink-0">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </div>

          <div className="lg:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-reno-navy border-reno-gold/20">
                <div className="flex flex-col gap-8 mt-10">
                  <VerticalLogo vertical="renovation" variant="sheet" />
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
