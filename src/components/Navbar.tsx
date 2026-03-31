import { ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="relative z-20">
      <nav className="w-full py-5 px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src={logoImg} alt="SmartAI" className="h-8" />
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Услуги", chevron: true, href: "#services" },
            { label: "Обо мне", chevron: false, href: "#about" },
            { label: "Проекты", chevron: false, href: "#projects" },
            { label: "Контакт", chevron: true, href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-colors text-sm"
            >
              {item.label}
              {item.chevron && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://t.me/SmartAiTeam"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 border border-foreground/20 text-foreground text-sm font-medium hover:bg-foreground/10 transition-all"
        >
          Связаться
        </a>
      </nav>

      {/* Divider */}
      <div className="mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  );
};

export default Navbar;
