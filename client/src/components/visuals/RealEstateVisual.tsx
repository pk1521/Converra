import { motion } from "framer-motion";

export function RealEstateVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-charcoal-800/80 backdrop-blur-xl shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 via-charcoal-700/50 to-charcoal-900" />

      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="reFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0D10" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="reAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>

        {/* Floor plan grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1="40"
            y1={60 + i * 40}
            x2="360"
            y2={60 + i * 40}
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 45}
            y1="60"
            x2={40 + i * 45}
            y2="220"
            stroke="white"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}

        {/* Room zones */}
        <motion.rect
          x="55"
          y="75"
          width="120"
          height="90"
          rx="4"
          fill="url(#reFloor)"
          stroke="url(#reAccent)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.rect
          x="190"
          y="75"
          width="155"
          height="55"
          rx="4"
          fill="url(#reFloor)"
          stroke="url(#reAccent)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        />
        <motion.rect
          x="190"
          y="145"
          width="155"
          height="60"
          rx="4"
          fill="url(#reFloor)"
          stroke="url(#reAccent)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Interior elements */}
        <motion.rect
          x="70"
          y="130"
          width="40"
          height="20"
          rx="2"
          fill="#3B82F6"
          fillOpacity="0.3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8 }}
          style={{ transformOrigin: "70px 140px" }}
        />
        <motion.circle
          cx="280"
          cy="102"
          r="8"
          fill="#22D3EE"
          fillOpacity="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ delay: 1, duration: 3, repeat: Infinity }}
        />

        {/* Blueprint dimension lines */}
        <motion.path
          d="M55 240 L175 240 M115 235 L115 245"
          stroke="#6366F1"
          strokeOpacity="0.5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />
        <text x="115" y="258" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9">
          Living Zone
        </text>
        <text x="267" y="258" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9">
          Commercial Layout
        </text>
      </svg>

      <motion.div
        className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <motion.div
          className="rounded-lg border border-white/10 bg-white/5 backdrop-blur px-3 py-2"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p className="text-[10px] uppercase tracking-wider text-slate-400">Execution Plan</p>
          <p className="text-xs font-semibold text-white">Site · Design · Deliver</p>
        </motion.div>
        <div className="rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-brand-cyan">Status</p>
          <p className="text-xs font-semibold text-white">On Schedule</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
