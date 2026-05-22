import { motion } from "framer-motion";

const nodes = [
  { id: "leads", label: "Lead Sources", x: 40, y: 80, color: "#3B82F6" },
  { id: "crm", label: "CRM Core", x: 160, y: 40, color: "#6366F1" },
  { id: "outbound", label: "Outbound", x: 280, y: 80, color: "#22D3EE" },
  { id: "pipeline", label: "Pipeline", x: 200, y: 160, color: "#3B82F6" },
  { id: "revenue", label: "Revenue", x: 320, y: 160, color: "#6366F1" },
];

const edges = [
  ["leads", "crm"],
  ["crm", "outbound"],
  ["crm", "pipeline"],
  ["outbound", "pipeline"],
  ["pipeline", "revenue"],
];

export function RevenueSystemVisual() {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-charcoal-800/60 backdrop-blur-xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-brand-subtle opacity-50" />
      <svg viewBox="0 0 400 220" className="w-full h-full p-4" aria-hidden>
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>

        {edges.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x + 30}
              y1={a.y + 12}
              x2={b.x + 10}
              y2={b.y + 12}
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.rect
              x={node.x}
              y={node.y}
              width="80"
              height="36"
              rx="8"
              fill={node.color}
              fillOpacity="0.15"
              stroke={node.color}
              strokeWidth="1.5"
              strokeOpacity="0.6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            />
            <motion.text
              x={node.x + 40}
              y={node.y + 22}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        <motion.circle
          cx="200"
          cy="110"
          r="60"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </svg>

      <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[10px] text-slate-400 font-medium uppercase tracking-wider">
        <span>GTM Flow</span>
        <span className="text-brand-cyan">Live System</span>
      </div>
    </div>
  );
}
