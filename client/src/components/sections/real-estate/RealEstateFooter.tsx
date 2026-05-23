import { ContactForm } from "@/components/contact-form";
import { Link } from "wouter";

export function RealEstateFooter() {
  return (
    <footer id="re-contact" className="bg-charcoal border-t border-white/10 py-16 text-slate-400">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Converra Growth Partners"
                className="h-10 w-auto rounded-lg object-contain"
              />
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight">
                  Converra Real Estate, Consultancy & Renovation Solutions
                </p>
                <p className="text-brand-cyan text-xs mt-1">Part of PK Groups</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Engineering-led renovation, civil consultancy, and real estate support — structured execution for modern spaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/" className="hover:text-brand-blue transition-colors">
                Converra Growth Partners
              </Link>
              <Link href="/about" className="hover:text-brand-blue transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get in touch</h4>
            <ContactForm />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Converra Growth Partners · PK Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/converra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
