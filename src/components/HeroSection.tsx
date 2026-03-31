import { motion } from "framer-motion";

const logos = [
  { name: "Vortex", letter: "V" },
  { name: "Nimbus", letter: "N" },
  { name: "Prysma", letter: "P" },
  { name: "Cirrus", letter: "C" },
  { name: "Kynder", letter: "K" },
  { name: "Halcyn", letter: "H" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col overflow-visible relative">
      {/* Blurred overlay shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero content — centered */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-mono text-muted-foreground">
                AI‑инженер для бизнеса / AI Agents Developer
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-headline font-normal leading-[1.02] tracking-[-0.024em] mb-6"
            style={{ fontSize: "clamp(80px, 15vw, 220px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-foreground">Power </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
              }}
            >
              AI
            </span>
          </motion.h1>

          <motion.p
            className="text-lg leading-8 max-w-md mx-auto mt-[9px] opacity-80 text-hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Проектирую и создаю AI‑агентов, которые берут на себя рутину,
            общаются с клиентами и помогают команде принимать решения.
          </motion.p>

          <motion.div
            className="mt-[25px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="https://t.me/SmartAiTeam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-[29px] py-[24px] rounded-full border border-foreground/20 text-foreground font-semibold hover:bg-foreground/10 transition-all duration-300"
            >
              Связаться
            </a>
          </motion.div>

          <motion.p
            className="text-xs text-muted-foreground font-mono mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Ответ в течение 24 часов
          </motion.p>
        </div>
      </div>

      {/* Logo marquee — bottom */}
      <div className="relative z-10 pb-10">
        <div className="max-w-5xl mx-auto flex items-center gap-12 px-8">
          {/* Left text */}
          <div className="text-foreground/50 text-sm shrink-0 leading-tight max-w-[140px]">
            Relied on by brands
            <br />
            across the globe
          </div>

          {/* Marquee */}
          <div className="overflow-hidden flex-1">
            <div className="flex animate-marquee w-max gap-16">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <div className="w-[24px] h-[24px] rounded-lg liquid-glass flex items-center justify-center text-foreground text-xs font-semibold">
                    {logo.letter}
                  </div>
                  <span className="text-base font-semibold text-foreground whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
