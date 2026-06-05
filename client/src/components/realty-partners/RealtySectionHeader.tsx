import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RealtySectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function RealtySectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: RealtySectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "max-w-3xl mb-14 md:mb-20",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("section-eyebrow-wrap", isCenter && "section-eyebrow-wrap--center")}>
          <span className="realty-badge">{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-[2.625rem] font-bold leading-display",
          light ? "text-realty-navy" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-copy max-w-2xl",
            light ? "text-realty-grey" : "text-slate-300",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-7 h-0.5 w-14 rounded-full bg-gradient-to-r from-realty-gold to-realty-gold-light",
          isCenter && "mx-auto",
        )}
      />
    </motion.header>
  );
}
