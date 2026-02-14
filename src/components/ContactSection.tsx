import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import agentLeft from "@/assets/agent-left.png";
import agentRight from "@/assets/agent-right.png";

const contactLinks = [
  {
    icon: MessageSquare,
    label: "Telegram",
    value: "@SmartAiTeam",
    href: "https://t.me/SmartAiTeam",
    description: "Быстрый ответ в течение часа",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kristinalihickaa@gmail.com",
    href: "mailto:Kristinalihickaa@gmail.com",
    description: "Для детальных запросов и ТЗ",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 section-gradient-top">
      <div className="container mx-auto px-6 relative">
        {/* AI Agent Left */}
        <motion.div
          className="hidden lg:block absolute left-0 bottom-0 w-48 xl:w-56 pointer-events-none select-none"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 40%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 40%)', WebkitMaskComposite: 'source-in' }}
        >
          <img src={agentLeft} alt="AI Agent" className="w-full h-full object-contain mix-blend-lighten" />
        </motion.div>
        {/* AI Agent Right */}
        <motion.div
          className="hidden lg:block absolute right-0 bottom-0 w-48 xl:w-56 pointer-events-none select-none"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to left, transparent 0%, black 40%)', maskComposite: 'intersect', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to left, transparent 0%, black 40%)', WebkitMaskComposite: 'source-in' }}
        >
          <img src={agentRight} alt="AI Agent" className="w-full h-full object-contain mix-blend-lighten" />
        </motion.div>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-gradient-primary">Давайте обсудим</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Выберите удобный способ связи
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto flex flex-col gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-5 p-6 rounded-2xl glass glow-border hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </span>
                </div>
                <p className="text-foreground font-semibold truncate">{link.value}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{link.description}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
