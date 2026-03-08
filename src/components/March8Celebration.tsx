import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FallingItem {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  emoji: string;
}

const FLOWER_EMOJIS = ["🌸", "🌺", "🌷", "🌹", "💐", "🌻", "🌼", "💮", "🏵️", "❀", "✿"];
const HEART_EMOJIS = ["💖", "💗", "💕", "💝", "🩷", "🌸"];

const March8Celebration = () => {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const all: FallingItem[] = Array.from({ length: 55 }, (_, i) => {
      const isHeart = i % 6 === 0;
      const pool = isHeart ? HEART_EMOJIS : FLOWER_EMOJIS;
      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 5 + Math.random() * 7,
        size: 18 + Math.random() * 28,
        rotation: Math.random() * 360,
        emoji: pool[Math.floor(Math.random() * pool.length)],
      };
    });
    setItems(all);
  }, []);

  return (
    <>
      {/* Dense falling flowers & hearts */}
      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        {items.map((p) => (
          <motion.div
            key={p.id}
            className="absolute top-0"
            style={{ left: `${p.x}%`, fontSize: p.size }}
            initial={{ y: -50, opacity: 0, rotate: p.rotation }}
            animate={{
              y: ["0vh", "108vh"],
              opacity: [0, 0.9, 0.9, 0.5, 0],
              rotate: [p.rotation, p.rotation + 180 + Math.random() * 180],
              x: [0, Math.sin(p.id) * 60, Math.cos(p.id) * -50, Math.sin(p.id + 2) * 40],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </div>

      {/* Left bouquet column */}
      <div className="fixed left-1 md:left-4 top-[15%] bottom-[15%] z-[3] pointer-events-none flex flex-col justify-between items-center">
        {["🌸", "🌷", "🌺", "🌹", "💐", "🌻", "🌼", "🌸"].map((emoji, i) => (
          <motion.div
            key={`left-${i}`}
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 12, -12, 0],
              scale: [1, 1.15, 1],
              y: [0, -6, 6, 0],
            }}
            transition={{
              opacity: { delay: 0.2 + i * 0.15, duration: 0.5 },
              x: { delay: 0.2 + i * 0.15, duration: 0.5 },
              rotate: { duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 },
              scale: { duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 },
              y: { duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.3 },
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Right bouquet column */}
      <div className="fixed right-1 md:right-4 top-[15%] bottom-[15%] z-[3] pointer-events-none flex flex-col justify-between items-center">
        {["💐", "🌹", "🌼", "🌺", "🌷", "💮", "🌸", "🌻"].map((emoji, i) => (
          <motion.div
            key={`right-${i}`}
            className="text-3xl md:text-5xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, -10, 10, 0],
              scale: [1, 1.12, 1],
              y: [0, 5, -5, 0],
            }}
            transition={{
              opacity: { delay: 0.3 + i * 0.15, duration: 0.5 },
              x: { delay: 0.3 + i * 0.15, duration: 0.5 },
              rotate: { duration: 3.5 + i * 0.3, repeat: Infinity, delay: i * 0.25 },
              scale: { duration: 3.5 + i * 0.3, repeat: Infinity, delay: i * 0.25 },
              y: { duration: 2.8 + i * 0.3, repeat: Infinity, delay: i * 0.2 },
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Top scattered flowers */}
      <div className="fixed top-16 left-0 right-0 z-[3] pointer-events-none flex justify-around px-12">
        {["🌸", "💖", "🌺", "🌷", "💐"].map((emoji, i) => (
          <motion.div
            key={`top-${i}`}
            className="text-2xl md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              opacity: { delay: 0.5 + i * 0.2, duration: 0.6 },
              y: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 },
              rotate: { duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.2 },
              scale: { duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.2 },
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
