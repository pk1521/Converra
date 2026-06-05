import { Link } from "wouter";
import { VerticalLogo } from "@/components/VerticalLogo";
import { GP_NAV_LABEL } from "@/lib/growth-partners";
import { REALTY_NAV_LABEL } from "@/lib/realty-partners";
import {
  RENOVATION_CONTACT_EMAIL,
  RENOVATION_CONTACT_PHONE,
  RENOVATION_LOCATION,
  RENOVATION_NAME,
  RENOVATION_TAGLINE,
  RENOVATION_WHATSAPP_URL,
} from "@/lib/renovation";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function RenovationFooter() {
  return (
    <footer className="reno-footer mt-auto w-full shrink-0">
      <div className="container-padding py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <VerticalLogo vertical="renovation" variant="footer" className="mb-4" />
            <p className="text-reno-gold-light text-sm font-medium mb-4">{RENOVATION_TAGLINE}</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-6">{PK_GROUPS_TAGLINE}</p>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-reno-gold" />{RENOVATION_LOCATION}</p>
              <a href={`mailto:${RENOVATION_CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-reno-gold-light"><Mail className="h-4 w-4 text-reno-gold" />{RENOVATION_CONTACT_EMAIL}</a>
              <a href={RENOVATION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-reno-gold-light"><Phone className="h-4 w-4 text-reno-gold" />{RENOVATION_CONTACT_PHONE}</a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-slate-400">
            <div>
              <h4 className="text-white text-xs uppercase tracking-wider mb-3">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#reno-services" className="hover:text-reno-gold-light">Services</a></li>
                <li><a href="#reno-calculator" className="hover:text-reno-gold-light">Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs uppercase tracking-wider mb-3">Converra</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-reno-gold-light">{GP_NAV_LABEL}</Link></li>
                <li><Link href="/realty-partners" className="hover:text-reno-gold-light">{REALTY_NAV_LABEL}</Link></li>
                <li><a href="#book-a-call" className="hover:text-reno-gold-light">Book a visit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs uppercase tracking-wider mb-3">Social</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/converra/" target="_blank" rel="noopener noreferrer" className="hover:text-reno-gold-light"><Linkedin className="h-5 w-5" /></a>
                <a href="https://www.instagram.com/converra_?igsh=dDI5cThha3h1c3Yw" target="_blank" rel="noopener noreferrer" className="hover:text-reno-gold-light"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-reno-gold-light"><Facebook className="h-5 w-5" /></a>
                <a href={RENOVATION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-reno-gold-light text-xs font-medium">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 pt-8 border-t border-reno-gold/15 text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {RENOVATION_NAME} · PK Groups
        </p>
      </div>
    </footer>
  );
}
