import { ContactForm } from "@/components/contact-form";

export function FooterSection() {
  return (
    <footer id="footer-contact" className="bg-charcoal border-t border-white/10 py-16 text-slate-400">
      <div className="container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Converra Growth Partners"
                className="h-10 w-auto rounded-lg object-contain"
              />
              <span className="text-lg font-display font-bold text-white tracking-tight">
                Converra Growth Partners
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-2 max-w-sm">
              Revenue systems and GTM infrastructure for founder-led and growth-stage companies.
            </p>
            <p className="text-brand-cyan text-sm font-medium">Revenue is engineered.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#what-we-solve" className="hover:text-brand-blue transition-colors">Revenue Systems</a></li>
              <li><a href="#revenue-engine-sprint" className="hover:text-brand-blue transition-colors">Revenue Engine Sprint</a></li>
              <li><a href="#process" className="hover:text-brand-blue transition-colors">Our Framework</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-brand-blue transition-colors">About</a></li>
              <li><a href="/real-estate" className="hover:text-brand-blue transition-colors">Real Estate & Renovation</a></li>
              <li><a href="#industries" className="hover:text-brand-blue transition-colors">Industries</a></li>
              <li><a href="#footer-contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#outcomes" className="hover:text-brand-blue transition-colors">Outcomes</a></li>
              <li><a href="#testimonials" className="hover:text-brand-blue transition-colors">Transformations</a></li>
              <li><a href="#pain-points" className="hover:text-brand-blue transition-colors">Why Systems Matter</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h4 className="font-semibold text-white mb-4">Get in touch</h4>
          <ContactForm />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Converra Growth Partners. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-blue transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/converra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-blue transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
