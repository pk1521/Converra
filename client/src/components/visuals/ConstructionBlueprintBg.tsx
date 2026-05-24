export function ConstructionBlueprintPattern({ className = "", opacity = "opacity-[0.12]" }: { className?: string; opacity?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <svg className={`absolute inset-0 w-full h-full ${opacity}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="re-bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
          </pattern>
          <pattern id="re-bp-grid-sm" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#3B82F6" strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#re-bp-grid)" />
        <rect width="100%" height="100%" fill="url(#re-bp-grid-sm)" />
      </svg>
    </div>
  );
}
