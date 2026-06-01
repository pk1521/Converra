import { useState } from "react";
import { motion } from "framer-motion";
import { RenovationSectionHeader } from "@/components/renovation/RenovationSectionHeader";
import { RENOVATION_GALLERY } from "@/lib/renovation";
import { cn } from "@/lib/utils";

export function RenovationBeforeAfter() {
  const [active, setActive] = useState(0);
  const [slider, setSlider] = useState(50);
  const item = RENOVATION_GALLERY[active];

  return (
    <section id="reno-gallery" className="reno-section-light section-padding scroll-mt-28">
      <div className="container-padding">
        <RenovationSectionHeader eyebrow="Showcase" title="Real Transformations" description="Before-and-after upgrades across homes, apartments, villas, and commercial spaces." light />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {RENOVATION_GALLERY.map((g, i) => (
            <button
              key={g.category}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                active === i ? "bg-reno-charcoal text-reno-gold-light" : "bg-white border border-slate-200 text-reno-grey hover:border-reno-gold/40",
              )}
            >
              {g.category}
            </button>
          ))}
        </div>

        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-end p-6">
              <span className="text-white/90 text-sm font-medium">Before · {item.before}</span>
            </div>
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-br from-reno-gold/40 to-slate-600 flex items-end p-6 overflow-hidden"
              style={{ width: `${slider}%` }}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap">After · {item.after}</span>
            </div>
            <input
              type="range"
              min={10}
              max={90}
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 accent-reno-gold z-10"
              aria-label="Compare before and after"
            />
          </div>
          <p className="text-center text-sm text-reno-grey mt-4">Drag the slider to compare before and after</p>
        </motion.div>
      </div>
    </section>
  );
}
