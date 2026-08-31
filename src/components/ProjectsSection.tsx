import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectSales from "@/assets/project-sales.jpg";
import projectDocument from "@/assets/project-document.jpg";
import projectDevops from "@/assets/project-devops.jpg";
import projectResearch from "@/assets/project-research.jpg";

const projects = [
  {
    title: "AI-агент по курсам валют",
    image: projectSales,
    description: "Собирает курсы валют и криптовалюты сразу из 10+ источников (ЦБ РФ, банки, обменники, P2P-биржи), приводит к единому виду и присылает персональные уведомления, когда курс достиг нужного уровня.",
    tags: ["Python", "PostgreSQL", "REST API"],
    status: "Production",
  },
  {
    title: "Инструменты для продавцов Wildberries/Ozon",
    image: projectDocument,
    description: "Анализ конкурентов, автоматическое управление ценами и подбор SEO-ключевых слов для карточек товаров с помощью AI.",
    tags: ["Claude API", "WB/Ozon API", "Python"],
    status: "Production",
  },
  {
    title: "Автопостинг видео в VK Clips",
    image: projectDevops,
    description: "Бот сам собирает короткие видеоролики на основе постов Telegram-канала (фон, текст, музыка) и публикует их в VK Clips после модерации.",
    tags: ["ffmpeg", "VK API", "Telegram Bot API"],
    status: "Beta",
  },
  {
    title: "AI-помощник по поиску работы",
    image: projectResearch,
    description: "Мониторит вакансии по заданным критериям, ведёт трекер откликов и сам пишет персональные сопроводительные письма под каждую вакансию через AI.",
    tags: ["Claude API", "HH.ru API", "Python"],
    status: "Production",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">Портфолио</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group p-8 rounded-2xl glass hover:glow-border transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-full h-36 rounded-xl overflow-hidden mb-5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                  project.status === "Production"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}>
                  {project.status}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient-primary transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
