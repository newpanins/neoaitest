import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, Workflow } from "lucide-react";

const techStack = [
  "LangChain",
  "RAG",
  "Multi‑agent системы",
  "Интеграции с CRM",
  "Внутренние сервисы",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Обо мне</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 md:p-12 rounded-2xl glass glow-border space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Я Кристина, AI‑инженер и разработчик автономных агентов.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Последние 3 года помогаю бизнесам автоматизировать процессы с
              помощью AI‑агентов: от обработки заявок и анализа документов до
              внутренних ассистентов для команд. Работаю от идеи и прототипа до
              боевого запуска и сопровождения.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Сочетаю понятный язык с профессиональным подходом: объясняю сложные
              вещи простыми словами, беру на себя техническую часть и помогаю
              команде привыкнуть к новым инструментам.
            </p>

            {/* Tech stack markers */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-mono text-muted-foreground mb-4">
                Технологический стек:
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
