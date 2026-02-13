import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-float-slow" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-muted-foreground">
              AI‑инженер для бизнеса / AI Agents Developer
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-foreground">Помогаю бизнесу</span>
          <br />
          <span className="text-gradient-primary">запускать рабочих</span>{" "}
          <span className="text-gradient-accent">AI‑агентов</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Проектирую и создаю AI‑агентов, которые берут на себя рутину, общаются с клиентами и помогают команде принимать решения. От идеи до запуска и поддержки.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Работаю с малым и средним бизнесом, помогаю внедрять AI без сложной технической боли.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://t.me/SmartAiTeam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl glow-primary hover:brightness-110 hover:scale-[1.03] transition-all duration-300"
            >
              Связаться
            </a>
            <span className="text-xs text-muted-foreground font-mono">Ответ в течение 24 часов</span>
          </div>
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg glass text-foreground font-semibold text-lg hover:border-primary/40 transition-all duration-300"
          >
            Посмотреть проекты
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[
            { value: "50+", label: "Реализованных решений" },
            { value: "3 года", label: "В AI‑разработке" },
            { value: "24/7", label: "Агенты без перерывов" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
