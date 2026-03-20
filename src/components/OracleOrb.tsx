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
      segments: number,
      jitter: number
    ) => {
      const points = [{ x: x1, y: y1 }];
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const mx = x1 + (x2 - x1) * t + (Math.random() - 0.5) * jitter;
        const my = y1 + (y2 - y1) * t + (Math.random() - 0.5) * jitter;
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

    const w = 900;
    const h = 600;
    canvas.width = w * 2;
    canvas.height = h * 2;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(2, 2);

    const cx = w / 2;
    const cy = h / 2;
    const orbRadius = 90;

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, w, h);

      // Deep ambient glow across canvas
      const ambientGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.5);
      const ambPulse = 0.06 + Math.sin(time * 1.2) * 0.02;
      ambientGrad.addColorStop(0, `hsla(260, 80%, 50%, ${ambPulse})`);
      ambientGrad.addColorStop(0.3, `hsla(185, 90%, 58%, ${ambPulse * 0.6})`);
      ambientGrad.addColorStop(1, "transparent");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, w, h);

      // Outer mystical aura — large pulsing rings
      for (let r = 0; r < 3; r++) {
        const auraRadius = orbRadius * (2 + r * 1.5) + Math.sin(time * (0.8 + r * 0.3)) * 15;
        const auraAlpha = 0.04 - r * 0.01 + Math.sin(time * 1.5 + r) * 0.01;
        ctx.beginPath();
        ctx.arc(cx, cy, auraRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${185 + r * 30}, 80%, 60%, ${Math.max(0.01, auraAlpha)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, orbRadius * 0.3, cx, cy, orbRadius * 3.5);
      const pulseIntensity = isListening ? 0.35 : isThinking ? 0.28 : 0.15;
      glowGrad.addColorStop(0, `hsla(185, 90%, 65%, ${pulseIntensity + Math.sin(time * 2) * 0.08})`);
      glowGrad.addColorStop(0.3, `hsla(260, 80%, 55%, ${pulseIntensity * 0.4})`);
      glowGrad.addColorStop(0.6, `hsla(200, 70%, 40%, ${pulseIntensity * 0.15})`);
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);

      // Orb body — larger, more layered
      const orbGrad = ctx.createRadialGradient(cx - 20, cy - 25, orbRadius * 0.05, cx, cy, orbRadius);
      orbGrad.addColorStop(0, "hsla(185, 100%, 85%, 0.95)");
      orbGrad.addColorStop(0.25, "hsla(195, 95%, 65%, 0.8)");
      orbGrad.addColorStop(0.5, "hsla(220, 85%, 50%, 0.5)");
      orbGrad.addColorStop(0.75, "hsla(260, 80%, 45%, 0.35)");
      orbGrad.addColorStop(1, "hsla(280, 70%, 25%, 0.05)");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2);
      ctx.fillStyle = orbGrad;
      ctx.fill();

      // Inner energy swirls
      for (let s = 0; s < 3; s++) {
        const sAngle = time * (0.6 + s * 0.2) + (s * Math.PI * 2) / 3;
        const sX = cx + Math.cos(sAngle) * orbRadius * 0.4;
        const sY = cy + Math.sin(sAngle) * orbRadius * 0.4;
        const sGrad = ctx.createRadialGradient(sX, sY, 0, sX, sY, orbRadius * 0.45);
        sGrad.addColorStop(0, `hsla(${185 + s * 35}, 100%, 80%, ${0.35 + Math.sin(time + s) * 0.15})`);
        sGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, orbRadius, 0, Math.PI * 2);
        ctx.fillStyle = sGrad;
        ctx.fill();
      }

      // Bright core pulse
      const corePulse = 0.6 + Math.sin(time * 3) * 0.2;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orbRadius * 0.35);
      coreGrad.addColorStop(0, `hsla(185, 100%, 95%, ${corePulse})`);
      coreGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, orbRadius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // ===== FULL-BLOCK LIGHTNING =====
      const boltCount = isListening ? 12 : isThinking ? 9 : 6;

      for (let i = 0; i < boltCount; i++) {
        const angle = (Math.PI * 2 * i) / boltCount + time * 0.25 + Math.sin(time * 0.7 + i * 1.3) * 0.5;
        const startX = cx + Math.cos(angle) * orbRadius * 0.7;
        const startY = cy + Math.sin(angle) * orbRadius * 0.7;

        // Calculate end point at canvas edge
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        let endX: number, endY: number;

        // Find intersection with canvas boundary
        const tRight = cosA > 0 ? (w - cx) / cosA : Infinity;
        const tLeft = cosA < 0 ? -cx / cosA : Infinity;
        const tBottom = sinA > 0 ? (h - cy) / sinA : Infinity;
        const tTop = sinA < 0 ? -cy / sinA : Infinity;
        const tEdge = Math.min(
          tRight > 0 ? tRight : Infinity,
          tLeft > 0 ? tLeft : Infinity,
          tBottom > 0 ? tBottom : Infinity,
          tTop > 0 ? tTop : Infinity
        );

        // Bolts reach 60-95% of the way to the edge
        const reach = 0.6 + Math.random() * 0.35;
        endX = cx + cosA * tEdge * reach;
        endY = cy + sinA * tEdge * reach;

        // Main bolt — thick, bright
        const mainAlpha = 0.3 + Math.random() * 0.45;
        ctx.strokeStyle = `hsla(185, 90%, 72%, ${mainAlpha})`;
        ctx.lineWidth = 2 + Math.random() * 1.5;
        ctx.shadowColor = "hsla(185, 90%, 60%, 0.7)";
        ctx.shadowBlur = 15;
        drawLightning(ctx, startX, startY, endX, endY, 8 + Math.floor(Math.random() * 5), 90);

        // Glow layer — same bolt, wider and fainter
        ctx.strokeStyle = `hsla(185, 80%, 65%, ${mainAlpha * 0.3})`;
        ctx.lineWidth = 5 + Math.random() * 3;
        ctx.shadowBlur = 25;
        drawLightning(ctx, startX, startY, endX, endY, 8 + Math.floor(Math.random() * 4), 100);

        // Branch bolts
        const branchCount = Math.random() > 0.3 ? 1 + Math.floor(Math.random() * 2) : 0;
        for (let b = 0; b < branchCount; b++) {
          const branchT = 0.3 + Math.random() * 0.4;
          const branchOriginX = startX + (endX - startX) * branchT;
          const branchOriginY = startY + (endY - startY) * branchT;
          const branchAngle = angle + (Math.random() - 0.5) * 1.2;
          const branchLen = tEdge * (0.2 + Math.random() * 0.3);
          const bEndX = branchOriginX + Math.cos(branchAngle) * branchLen;
          const bEndY = branchOriginY + Math.sin(branchAngle) * branchLen;

          ctx.strokeStyle = `hsla(260, 80%, 72%, ${0.15 + Math.random() * 0.25})`;
          ctx.lineWidth = 1 + Math.random();
          ctx.shadowColor = "hsla(260, 80%, 65%, 0.5)";
          ctx.shadowBlur = 10;
          drawLightning(ctx, branchOriginX, branchOriginY, bEndX, bEndY, 5 + Math.floor(Math.random() * 3), 60);
        }
      }

      // Floating particles near orb
      ctx.shadowBlur = 0;
      for (let p = 0; p < 20; p++) {
        const pAngle = time * 0.4 + (p * Math.PI * 2) / 20;
        const pDist = orbRadius * (1.3 + Math.sin(time * 0.8 + p * 0.7) * 0.8);
        const pX = cx + Math.cos(pAngle) * pDist;
        const pY = cy + Math.sin(pAngle) * pDist;
        const pAlpha = 0.3 + Math.sin(time * 2 + p) * 0.2;
        const pSize = 1 + Math.sin(time + p) * 0.8;
        ctx.beginPath();
        ctx.arc(pX, pY, Math.max(0.5, pSize), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(185, 90%, 75%, ${Math.max(0, pAlpha)})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isListening, isThinking, drawLightning]);

  return (
    <motion.div
      className="relative cursor-pointer select-none w-full flex items-center justify-center"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <canvas ref={canvasRef} className="block max-w-full" />

      {/* Status text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs font-mono text-foreground/50 mt-[180px]">
          {isListening ? "Слушаю..." : isThinking ? "Думаю..." : "Нажми, чтобы спросить"}
        </span>
      </div>
    </motion.div>
  );
};

export default OracleOrb;
