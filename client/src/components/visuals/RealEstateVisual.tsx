import { motion } from "framer-motion";

export function RealEstateVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-teal/30 bg-brand-navy shadow-2xl"
    >
      {/* Blueprint grid base */}
      <div className="absolute inset-0 blueprint-bg-dark opacity-80" />

      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#64748B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill="url(#skyGrad)" />

        {/* Ground / foundation */}
        <motion.rect
          x="0" y="240" width="400" height="60"
          fill="#334155" fillOpacity="0.5"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: "0 240px" }}
        />
        <motion.line
          x1="0" y1="240" x2="400" y2="240"
          stroke="#008B9C" strokeWidth="2" strokeOpacity="0.6"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Building structural frame */}
        {[
          { x: 120, w: 160, h: 140 },
        ].map((b) => (
          <g key={b.x}>
            <motion.rect
              x={b.x} y={100} width={b.w} height={b.h}
              fill="none" stroke="#94A3B8" strokeWidth="2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            {/* Floor slabs */}
            {[0, 1, 2, 3].map((f) => (
              <motion.line
                key={f}
                x1={b.x} y1={100 + f * 35}
                x2={b.x + b.w} y2={100 + f * 35}
                stroke="#64748B" strokeWidth="1" strokeOpacity="0.7"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.5 + f * 0.1, duration: 0.5 }}
              />
            ))}
            {/* Vertical columns */}
            {[0, 1, 2, 3, 4].map((c) => (
              <motion.line
                key={c}
                x1={b.x + c * 40} y1={100}
                x2={b.x + c * 40} y2={240}
                stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.6 + c * 0.08, duration: 0.4 }}
              />
            ))}
          </g>
        ))}

        {/* Crane */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <line x1="300" y1="240" x2="300" y2="60" stroke="#F59E0B" strokeWidth="3" />
          <line x1="300" y1="80" x2="360" y2="80" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="300" y1="80" x2="300" y2="100" stroke="#64748B" strokeWidth="1" strokeDasharray="3 2" />
          <polygon points="295,60 305,60 300,50" fill="#F59E0B" />
          <rect x="292" y="235" width="16" height="8" rx="1" fill="#475569" />
        </motion.g>

        {/* Scaffolding left */}
        <motion.g
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
          transition={{ delay: 0.9 }}
          stroke="#64748B" strokeWidth="1" fill="none"
        >
          <line x1="90" y1="240" x2="90" y2="130" />
          <line x1="110" y1="240" x2="110" y2="130" />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="90" y1={140 + i * 30} x2="110" y2={140 + i * 30} />
          ))}
          <line x1="90" y1="130" x2="110" y2="130" />
        </motion.g>

        {/* Dimension markers */}
        <motion.g
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          stroke="#3B82F6" strokeWidth="0.8" fill="#3B82F6" fillOpacity="0.5"
        >
          <line x1="120" y1="255" x2="280" y2="255" />
          <line x1="120" y1="252" x2="120" y2="258" />
          <line x1="280" y1="252" x2="280" y2="258" />
          <text x="200" y="270" textAnchor="middle" fill="#94A3B8" fontSize="8" stroke="none">12.5m STRUCTURAL SPAN</text>
        </motion.g>

        {/* Hard hat icon area - site marker */}
        <motion.circle
          cx="60" cy="220" r="6"
          fill="#F59E0B" fillOpacity="0.8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Overlay cards */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="rounded-lg border border-construction-steel/30 bg-charcoal-900/80 backdrop-blur px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-construction-concrete">Phase</p>
          <p className="text-xs font-semibold text-white">Structural Frame</p>
        </div>
        <div className="site-tag">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
          Active Site
        </div>
        <div className="rounded-lg border border-brand-blue/30 bg-brand-blue/10 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-brand-blue">Progress</p>
          <p className="text-xs font-semibold text-white">68% Complete</p>
        </div>
      </motion.div>

      {/* Corner blueprint label */}
      <div className="absolute top-4 left-4 rounded border border-brand-blue/20 bg-charcoal-900/70 px-2 py-1">
        <p className="text-[9px] font-mono text-brand-blue tracking-widest">DWG · REV 03</p>
      </div>
    </motion.div>
  );
}
