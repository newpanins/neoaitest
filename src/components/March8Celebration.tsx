import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
  type: "petal" | "heart" | "star";
}

const COLORS = [
  "hsl(340 80% 65%)",
  "hsl(330 70% 75%)",
  "hsl(350 85% 60%)",
  "hsl(20 90% 70%)",
  "hsl(45 95% 65%)",
  "hsl(280 60% 70%)",
  "hsl(310 75% 68%)",
];

const March8Celebration = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
      size: 12 + Math.random() * 20,
      rotation: Math.random() * 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      type: i % 5 === 0 ? "heart" : i % 7 === 0 ? "star" : "petal",
    }));
    setPetals(items);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Falling petals / hearts */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{ left: `${p.x}%` }}
          initial={{ y: -40, opacity: 0, rotate: p.rotation }}
          animate={{
            y: ["0vh", "105vh"],
            opacity: [0, 1, 1, 0.6, 0],
            rotate: [p.rotation, p.rotation + 180 + Math.random() * 180],
            x: [0, Math.sin(p.id) * 60, Math.cos(p.id) * -40, Math.sin(p.id + 1) * 50],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.type === "heart" ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : p.type === "star" ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color} opacity="0.8">
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z" />
            </svg>
          ) : (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="10" rx="5" ry="8" fill={p.color} opacity="0.7" transform={`rotate(${p.id * 30} 12 12)`} />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Central banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative text-center px-8 py-10 md:px-16 md:py-14 rounded-3xl max-w-lg mx-4"
              style={{
                background: "radial-gradient(ellipse at center, hsl(340 60% 15% / 0.85), hsl(220 12% 3% / 0.92))",
                border: "1px solid hsl(340 70% 55% / 0.3)",
                boxShadow: "0 0 60px hsl(340 80% 60% / 0.15), 0 0 120px hsl(330 70% 50% / 0.08), inset 0 0 40px hsl(340 60% 50% / 0.05)",
                backdropFilter: "blur(20px)",
              }}
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            >
              {/* Decorative flowers */}
              <motion.div
                className="absolute -top-6 -left-6 text-4xl"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌸
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-5 text-3xl"
                animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                🌺
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -left-4 text-3xl"
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                🌷
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 text-4xl"
                animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              >
                💐
              </motion.div>

              {/* Main 8 */}
              <motion.div
                className="text-7xl md:text-8xl font-bold mb-2"
                style={{
                  background: "linear-gradient(135deg, hsl(340 85% 65%), hsl(20 90% 65%), hsl(45 95% 60%), hsl(340 85% 65%))",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                8 марта
              </motion.div>

              <motion.p
                className="text-lg md:text-xl font-medium mb-2"
                style={{ color: "hsl(340 70% 75%)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                С Международным женским днём! 💖
              </motion.p>

              <motion.p
                className="text-sm md:text-base mb-8 leading-relaxed"
                style={{ color: "hsl(340 30% 70% / 0.8)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Пусть каждый день будет наполнен теплом, радостью и вдохновением ✨
              </motion.p>

              <motion.button
                onClick={() => setShowBanner(false)}
                className="px-8 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "linear-gradient(135deg, hsl(340 80% 55%), hsl(350 85% 60%))",
                  color: "white",
                  boxShadow: "0 0 20px hsl(340 80% 55% / 0.3)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(340 80% 55% / 0.5)" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Спасибо! 🌹
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default March8Celebration;
