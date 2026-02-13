import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Sales Agent",
    description: "Помогает отделу продаж: отвечает на обращения, квалифицирует лидов и назначает встречи, не теряя заявки ночью и в выходные.",
    tags: ["LangChain", "GPT-4", "Zapier"],
    status: "Production",
  },
  {
    title: "Document Analyst",
    description: "Ускоряет работу с юридическими документами: находит ключевые условия, отвечает на вопросы по договору и снижает время анализа.",
    tags: ["LlamaIndex", "Pinecone", "Claude"],
    status: "Production",
  },
  {
    title: "DevOps Agent",
    description: "Следит за инфраструктурой, реагирует на инциденты и готовит отчёты, снижая нагрузку на DevOps‑команду.",
    tags: ["CrewAI", "Kubernetes", "Grafana"],
    status: "Beta",
  },
  {
    title: "Research Assistant",
    description: "Собирает и структурирует информацию о рынке и конкурентах, готовит черновики отчётов и презентаций.",
    tags: ["AutoGPT", "Serper", "PostgreSQL"],
    status: "Production",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 section-gradient-bottom">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Избранные <span className="text-gradient-accent">проекты</span>
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
