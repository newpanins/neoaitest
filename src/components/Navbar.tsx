import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="font-bold text-lg text-foreground leading-tight">SmartAI</span>
          <span className="text-[10px] text-shimmer leading-tight tracking-wide font-medium">Умные решения для вашего бизнеса</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#services", label: "Услуги" },
            { href: "#about", label: "Обо мне" },
            { href: "#projects", label: "Проекты" },
            { href: "#contact", label: "Контакт" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover-shimmer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
            href="https://t.me/SmartAiTeam"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Telegram"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
