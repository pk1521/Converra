import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  dark: "section-dark",
  light: "section-light",
  charcoal: "bg-charcoal-800 text-slate-100",
};

const themeAmbient = {
  growth: {
    dark: (
      <>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/25 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-brand-cyan/40 animate-bubble-drift" />
      </>
    ),
    light: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-transparent to-cyan-50/60 pointer-events-none" />
    ),
  },
  classy: {
    dark: (
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-champagne/5 via-transparent to-luxury-stone/30 pointer-events-none" />
    ),
    light: (
      <div className="absolute inset-0 luxury-vignette-light pointer-events-none" />
    ),
  },
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "light" | "charcoal";
  theme?: "growth" | "classy";
  noAnimation?: boolean;
}

export function Section({
  children,
  className,
  id,
  variant = "light",
  theme = "growth",
  noAnimation = false,
}: SectionProps) {
  const content = noAnimation ? (
    children
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );

  return (
    <section
      id={id}
      className={cn("section-padding overflow-hidden relative", variantClasses[variant], className)}
    >
      <div className="container-padding relative z-10">{content}</div>
      {(variant === "dark" || variant === "light") && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
          {themeAmbient[theme][variant === "dark" ? "dark" : "light"]}
        </div>
      )}
    </section>
  );
}
