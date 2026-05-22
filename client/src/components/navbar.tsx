import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { openBookStrategyCall } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll";

const navLinks = [
  { label: "Pain Points", href: "/#pain-points" },
  { label: "Services", href: "/#what-we-solve" },
  { label: "Sprint", href: "/#revenue-engine-sprint" },
  { label: "Process", href: "/#process" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Contact", href: "/#footer-contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => scrollToSection("footer-contact");

  const linkClass = isScrolled
    ? "text-slate-300 hover:text-white"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Converra Growth Partners home">
          <img
            src="/logo.jpeg"
            alt="Converra Growth Partners"
            className="h-10 w-auto rounded-lg object-contain md:h-11 transition-transform duration-200 group-hover:scale-105"
          />
          <span className={`hidden lg:block font-display font-semibold text-sm tracking-tight transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
            Converra Growth Partners
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className={`text-sm font-medium transition-colors ${linkClass}`}>
              {label}
            </a>
          ))}
          <Link href="/about" className={`text-sm font-medium transition-colors ${linkClass}`}>
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => openBookStrategyCall(scrollToContact)}
            className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-lg shadow-brand-blue/25 transition-all duration-300"
          >
            Book Strategy Call
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-charcoal border-charcoal-700">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map(({ label, href }) => (
                  <a key={label} href={href} className="text-lg font-medium text-slate-100">
                    {label}
                  </a>
                ))}
                <Link href="/about" className="text-lg font-medium text-slate-100">
                  About
                </Link>
                <Button
                  onClick={() => openBookStrategyCall(scrollToContact)}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold"
                >
                  Book Strategy Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
