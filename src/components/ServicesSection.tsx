import { motion } from "framer-motion";
import { Bot, Brain, Workflow, Zap, Database, Shield } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Автономные агенты",
    description: "Агенты, которые самостоятельно выполняют задачи, принимают решения и взаимодействуют с внешними сервисами.",
  },
  {
    icon: Brain,
    title: "RAG-системы",
    description: "Retrieval-Augmented Generation для работы с корпоративными знаниями и документацией.",
  },
  {
    icon: Workflow,
    title: "Multi-Agent системы",
    description: "Оркестрация нескольких агентов для решения сложных многоэтапных задач.",
  },
  {
    icon: Zap,
    title: "Автоматизация процессов",
    description: "Замена рутинных процессов интеллектуальными агентами с минимальным контролем.",
  },
  {
    icon: Database,
    title: "Интеграция с данными",
    description: "Подключение агентов к базам данных, API и внутренним системам компании.",
  },
  {
    icon: Shield,
    title: "Безопасность и контроль",
    description: "Guardrails, мониторинг и аудит действий агентов для надёжной работы.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 section-gradient-top">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Услуги</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Что я <span className="text-gradient-primary">создаю</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Полный цикл разработки AI-агентов — от проектирования архитектуры до деплоя и мониторинга.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-2xl glass hover:glow-border transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
