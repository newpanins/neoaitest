import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface OracleOrbProps {
  isListening: boolean;
  isThinking: boolean;
  onClick: () => void;
}

const OracleOrb = ({ isListening, isThinking, onClick }: OracleOrbProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  const drawLightning = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      segments: number
    ) => {
      const points = [{ x: x1, y: y1 }];
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const mx = x1 + (x2 - x1) * t + (Math.random() - 0.5) * 60;
        const my = y1 + (y2 - y1) * t + (Math.random() - 0.5) * 60;
        points.push({ x: mx, y: my });
      }
      points.push({ x: x2, y: y2 });

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 400;
    canvas.width = size * 2;
    canvas.height = size * 2;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(2, 2);

    const cx = size / 2;
    const cy = size / 2;
    const orbRadius = 60;

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, size, size);

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, orbRadius * 0.5, cx, cy, orbRadius * 2.5);
      const pulseIntensity = isListening ? 0.25 : isThinking ? 0.2 : 0.1;
      glowGrad.addColorStop(0, `hsla(185, 90%, 58%, ${pulseIntensity + Math.sin(time * 2) * 0.05})`);
      glowGrad.addColorStop(0.4, `hsla(260, 80%, 65%, ${pulseIntensity * 0.5})`);
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, size, size);

      // Orb body
      const orbGrad = ctx.createRadialGradient(cx - 15, cy - 15, orbRadius * 0.1, cx, cy, orbRadius);
      orbGrad.addColorStop(0, "hsla(185, 95%, 75%, 0.9)");
      orbGrad.addColorStop(0.4, "hsla(200, 90%, 50%, 0.6)");
      orbGrad.addColorStop(0.7, "hsla(260, 80%, 50%, 0.4)");
      orbGrad.addColorStop(1, "hsla(260, 80%, 30%, 0.1)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2);
      ctx.fillStyle = orbGrad;
      ctx.fill();

      // Inner shimmer
      const shimmerAngle = time * 0.8;
      const shimmerX = cx + Math.cos(shimmerAngle) * orbRadius * 0.3;
      const shimmerY = cy + Math.sin(shimmerAngle) * orbRadius * 0.3;
      const shimmerGrad = ctx.createRadialGradient(shimmerX, shimmerY, 0, shimmerX, shimmerY, orbRadius * 0.5);
      shimmerGrad.addColorStop(0, "hsla(185, 100%, 80%, 0.5)");
      shimmerGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2);
      ctx.fillStyle = shimmerGrad;
      ctx.fill();

      // Lightning bolts
      const boltCount = isListening ? 8 : isThinking ? 6 : 4;
      const maxLen = isListening ? 130 : isThinking ? 110 : 80;

      for (let i = 0; i < boltCount; i++) {
        const angle = (Math.PI * 2 * i) / boltCount + time * 0.3 + Math.sin(time + i) * 0.4;
        const startX = cx + Math.cos(angle) * orbRadius * 0.8;
        const startY = cy + Math.sin(angle) * orbRadius * 0.8;
        const len = maxLen * (0.5 + Math.random() * 0.5);
        const endX = cx + Math.cos(angle) * (orbRadius + len);
        const endY = cy + Math.sin(angle) * (orbRadius + len);

        // Main bolt
        ctx.strokeStyle = `hsla(185, 90%, 70%, ${0.4 + Math.random() * 0.4})`;
        ctx.lineWidth = 1.5 + Math.random();
        ctx.shadowColor = "hsla(185, 90%, 58%, 0.6)";
        ctx.shadowBlur = 8;
        drawLightning(ctx, startX, startY, endX, endY, 5 + Math.floor(Math.random() * 3));

        // Secondary thin bolt
        if (Math.random() > 0.5) {
          const branchAngle = angle + (Math.random() - 0.5) * 0.8;
          const branchLen = len * 0.5;
          const bEndX = startX + Math.cos(branchAngle) * branchLen;
          const bEndY = startY + Math.sin(branchAngle) * branchLen;
          ctx.strokeStyle = `hsla(260, 80%, 70%, ${0.2 + Math.random() * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.shadowColor = "hsla(260, 80%, 65%, 0.4)";
          ctx.shadowBlur = 5;
          drawLightning(ctx, startX, startY, bEndX, bEndY, 3);
        }
      }

      ctx.shadowBlur = 0;

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isListening, isThinking, drawLightning]);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <canvas ref={canvasRef} className="block" />

      {/* Status text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs font-mono text-foreground/60 mt-[120px]">
          {isListening ? "Слушаю..." : isThinking ? "Думаю..." : "Нажми, чтобы спросить"}
        </span>
      </div>
    </motion.div>
  );
};

export default OracleOrb;
