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

const FLOWER_EMOJIS = ["🌸", "🌺", "🌷", "🌹", "💐", "🌻", "🌼", "💮", "🏵️"];
const HEART_EMOJIS = ["💖", "💗", "💕", "💝", "🩷"];

const March8Celebration = () => {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const all: FallingItem[] = Array.from({ length: 56 }, (_, i) => {
      const isHeart = i % 4 === 0;
      const pool = isHeart ? HEART_EMOJIS : FLOWER_EMOJIS;
      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 10,
        size: 16 + Math.random() * 30,
        rotation: Math.random() * 360,
        emoji: pool[Math.floor(Math.random() * pool.length)],
      };
    });
    setItems(all);
  }, []);

  return (
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
  );
};

export default March8Celebration;
