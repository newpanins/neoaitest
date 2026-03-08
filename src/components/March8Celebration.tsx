import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
}

const COLORS = [
  "hsl(340 80% 65%)",
  "hsl(330 70% 75%)",
  "hsl(350 85% 60%)",
  "hsl(20 90% 70%)",
  "hsl(280 60% 70%)",
  "hsl(310 75% 68%)",
];

const March8Celebration = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 6,
      size: 14 + Math.random() * 16,
      rotation: Math.random() * 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setPetals(items);
  }, []);

  return (
    <>
      {/* Soft falling petals — no pointer events, behind content */}
      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <motion.div
            key={p.id}
            className="absolute top-0"
            style={{ left: `${p.x}%` }}
            initial={{ y: -30, opacity: 0, rotate: p.rotation }}
            animate={{
              y: ["0vh", "105vh"],
              opacity: [0, 0.7, 0.7, 0.4, 0],
              rotate: [p.rotation, p.rotation + 200],
              x: [0, Math.sin(p.id) * 40, Math.cos(p.id) * -30],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color} opacity="0.6">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Side bouquets — left */}
      <div className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-[3] pointer-events-none flex flex-col gap-3">
        {["🌸", "🌷", "🌺", "🌹"].map((emoji, i) => (
          <motion.div
            key={`left-${i}`}
            className="text-2xl md:text-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
            transition={{
              opacity: { delay: 0.3 + i * 0.2, duration: 0.6 },
              x: { delay: 0.3 + i * 0.2, duration: 0.6 },
              rotate: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 },
              scale: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 },
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Side bouquets — right */}
      <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[3] pointer-events-none flex flex-col gap-3">
        {["💐", "🌻", "🌼", "💮"].map((emoji, i) => (
          <motion.div
            key={`right-${i}`}
            className="text-2xl md:text-4xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{
              opacity: { delay: 0.5 + i * 0.2, duration: 0.6 },
              x: { delay: 0.5 + i * 0.2, duration: 0.6 },
              rotate: { duration: 3.5 + i * 0.4, repeat: Infinity, delay: i * 0.4 },
              scale: { duration: 3.5 + i * 0.4, repeat: Infinity, delay: i * 0.4 },
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default March8Celebration;
