import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openBookRenovationEstimate, openBookRenovationVisit } from "@/lib/links";
import {
  RENOVATION_PRIMARY_CTA,
  RENOVATION_SECONDARY_CTA,
  RENOVATION_TAGLINE_ALT,
} from "@/lib/renovation";
import { PK_GROUPS_TAGLINE } from "@/lib/brand";
import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Sparkles } from "lucide-react";

export function RenovationHero() {
  return (
    <section id="reno-hero" className="reno-hero relative min-h-screen flex items-center">
      <div className="container-padding relative z-10 w-full pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium tracking-[0.25em] uppercase text-slate-400 mb-3"
            >
              {PK_GROUPS_TAGLINE}
            </motion.p>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="reno-badge mb-6">
              {RENOVATION_TAGLINE_ALT}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6"
            >
              Transform Your Property{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-reno-gold-light to-reno-gold">
                Without Rebuilding
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-300 leading-relaxed mb-8"
            >
              Converra Renovation Solutions helps homeowners and businesses upgrade existing spaces through
              smart renovation, remodeling and modernization.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={openBookRenovationVisit}
                className="h-12 px-8 rounded-full bg-gradient-to-r from-reno-gold to-reno-gold-muted text-reno-navy font-bold"
              >
                {RENOVATION_PRIMARY_CTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("reno-calculator")}
                className="h-12 px-8 rounded-full border-reno-gold/50 text-reno-gold-light hover:bg-reno-gold/10 font-semibold"
              >
                {RENOVATION_SECONDARY_CTA}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="reno-glass p-6 space-y-2">
                <p className="text-xs uppercase tracking-wider text-reno-gold">Before</p>
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800" />
                <p className="text-sm text-slate-400">Existing layout & finishes</p>
              </div>
              <div className="reno-glass p-6 space-y-2 mt-8">
                <p className="text-xs uppercase tracking-wider text-reno-gold">After</p>
                <div className="h-40 rounded-xl bg-gradient-to-br from-reno-gold/30 to-slate-700 flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-reno-gold-light" />
                </div>
                <p className="text-sm text-slate-300">Modernized, value-ready space</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
