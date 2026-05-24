export function ClassyAmbientLayer({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div className={isDark ? "luxury-vignette-dark" : "luxury-vignette-light"} />
      <div className="luxury-gold-line luxury-gold-line--top" />
      <div className="luxury-gold-line luxury-gold-line--bottom" />
      {isDark && (
        <>
          <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-luxury-champagne/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-luxury-stone/10 blur-[90px]" />
        </>
      )}
    </div>
  );
}
