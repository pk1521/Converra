import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function RenovationSectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("max-w-3xl mb-12 md:mb-16", isCenter && "mx-auto text-center", className)}
    >
      {eyebrow && <span className="reno-badge mb-4">{eyebrow}</span>}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight",
          light ? "text-reno-charcoal" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-reno-grey" : "text-slate-300",
            isCenter && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-reno-gold to-reno-gold-light",
          isCenter && "mx-auto",
        )}
      />
    </motion.div>
  );
}
