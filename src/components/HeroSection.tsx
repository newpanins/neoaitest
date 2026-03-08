import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/60" />

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
          <a
            href="https://t.me/SmartAiTeam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-xl glow-primary hover:brightness-110 hover:scale-[1.03] transition-all duration-300"
          >
            Связаться
          </a>
          <a
            href="#projects"
            className="px-10 py-5 rounded-lg glass text-foreground font-bold text-xl hover:border-primary/40 transition-all duration-300"
          >
            Посмотреть проекты
          </a>
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground font-mono mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Ответ в течение 24 часов
        </motion.p>

        {/* 8 March greeting */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold inline-block"
            style={{
              background: "linear-gradient(90deg, hsl(340 90% 72%), hsl(320 85% 75%), hsl(350 95% 68%), hsl(10 90% 72%), hsl(340 90% 72%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{ backgroundPosition: ["100% 0", "0% 0", "100% 0"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            С 8 Марта! С Международным женским днём!
          </motion.span>
          <motion.p
            className="mt-2 text-sm md:text-lg font-medium"
            style={{
              background: "linear-gradient(90deg, hsl(330 70% 75%), hsl(350 80% 70%), hsl(330 70% 75%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundPosition: ["100% 0", "0% 0", "100% 0"] }}
            transition={{ opacity: { delay: 1.2 }, backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            Пусть каждый день будет наполнен теплом и вдохновением ✨
          </motion.p>
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
