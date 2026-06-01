import { Link } from "wouter";
import { GP_NAV_LABEL } from "@/lib/growth-partners";
import {
  REALTY_CONTACT_EMAIL,
  REALTY_CONTACT_PHONE,
  REALTY_PARTNERS_NAME,
  REALTY_PARTNERS_TAGLINE,
  REALTY_PARTNERS_LOCATION,
  REALTY_WHATSAPP_URL,
} from "@/lib/realty-partners";
import { RENOVATION_NAV_LABEL } from "@/lib/renovation";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { RealtyBrandTitle } from "@/components/realty-partners/RealtyBrandTitle";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function RealtyPartnersFooter() {
  return (
    <footer className="realty-footer mt-auto w-full shrink-0">
      <div className="container-padding py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RealtyBrandTitle size="footer" className="mb-1 block" />
            <p className="text-realty-gold-light text-sm font-medium mb-4">{REALTY_PARTNERS_TAGLINE}</p>
            <p className="text-xs uppercase tracking-wider text-realty-grey-light mb-6">{PK_GROUPS_TAGLINE}</p>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-realty-gold shrink-0" />
                {REALTY_PARTNERS_LOCATION}
              </p>
              <a
                href={`mailto:${REALTY_CONTACT_EMAIL}`}
                className="flex items-center gap-2 hover:text-realty-gold-light transition-colors"
              >
                <Mail className="h-4 w-4 text-realty-gold shrink-0" />
                {REALTY_CONTACT_EMAIL}
              </a>
              <a
                href={REALTY_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-realty-gold-light transition-colors"
              >
                <Phone className="h-4 w-4 text-realty-gold shrink-0" />
                {REALTY_CONTACT_PHONE}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#rp-about" className="hover:text-realty-gold-light">About</a></li>
                <li><a href="#rp-services" className="hover:text-realty-gold-light">Services</a></li>
                <li><a href="#rp-process" className="hover:text-realty-gold-light">Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Converra</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-realty-gold-light">{GP_NAV_LABEL}</Link></li>
                <li><Link href="/renovation" className="hover:text-realty-gold-light">{RENOVATION_NAV_LABEL}</Link></li>
                <li><a href="#book-a-call" className="hover:text-realty-gold-light">Book consultation</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/company/converra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-realty-gold-light"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-realty-gold-light"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-realty-gold-light"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={REALTY_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-realty-gold-light text-sm font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-realty-gold/15 text-sm text-slate-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {REALTY_PARTNERS_NAME} · PK Groups. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
