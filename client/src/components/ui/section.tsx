import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "light" | "charcoal";
  noAnimation?: boolean;
}

const variantClasses = {
  dark: "section-dark",
  light: "section-light",
  charcoal: "bg-charcoal-800 text-slate-100",
};

export function Section({
  children,
  className,
  id,
  variant = "light",
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
      {variant === "dark" && (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
      )}
    </section>
  );
}
