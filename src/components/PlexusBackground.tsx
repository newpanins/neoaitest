import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface FloatingWord {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  opacity: number;
  fadeDir: number;
}

const AI_KEYWORDS = [
  "LangChain", "RAG", "GPT-4", "Agent", "NLP", "LLM",
  "Vector DB", "Embedding", "Prompt", "Fine-tune",
  "Multi-Agent", "CrewAI", "AutoGPT", "Claude",
  "Pinecone", "Neural", "Transformer", "Token",
  "API", "Pipeline", "Workflow", "AI", "ML",
];

const PlexusBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const wordsRef = useRef<FloatingWord[]>([]);
  const animationRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.floor((width * height) / 12000);
    const clamped = Math.max(60, Math.min(count, 200));
    particlesRef.current = Array.from({ length: clamped }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    const wordCount = Math.max(8, Math.min(Math.floor(clamped / 5), 20));
    wordsRef.current = Array.from({ length: wordCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      text: AI_KEYWORDS[Math.floor(Math.random() * AI_KEYWORDS.length)],
      opacity: Math.random() * 0.12 + 0.04,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CONNECTION_DIST = 200;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particlesRef.current.length === 0) {
        initParticles(window.innerWidth, window.innerHeight);
      }
    };

    resize();

    const loop = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.36;
            ctx.strokeStyle = `rgba(80, 210, 220, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (const p of particles) {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, "rgba(80, 220, 230, 0.26)");
        gradient.addColorStop(1, "rgba(80, 220, 230, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(100, 230, 240, 0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      // Draw floating keywords
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      for (const word of wordsRef.current) {
        word.x += word.vx;
        word.y += word.vy;
        if (word.x < 0 || word.x > w) word.vx *= -1;
        if (word.y < 20 || word.y > h) word.vy *= -1;

        // Slow fade in/out
        word.opacity += word.fadeDir * 0.0005;
        if (word.opacity > 0.33) { word.opacity = 0.33; word.fadeDir = -1; }
        if (word.opacity < 0.08) { word.opacity = 0.08; word.fadeDir = 1; }

        ctx.fillStyle = `rgba(100, 230, 240, ${word.opacity})`;
        ctx.fillText(word.text, word.x, word.y);
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
};

export default PlexusBackground;
