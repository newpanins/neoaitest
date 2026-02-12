import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 section-gradient-top">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm text-primary tracking-widest uppercase">Контакт</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Давайте <span className="text-gradient-primary">создадим</span> вместе
            </h2>
            <p className="text-muted-foreground text-lg">
              Расскажите о вашем проекте — обсудим, как AI-агенты могут помочь вашему бизнесу.
            </p>
          </motion.div>

          <motion.div
            className="p-8 md:p-12 rounded-2xl glass glow-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Сообщение</label>
                <textarea
                  rows={5}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-primary hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Отправить
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="https://t.me/" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
                Telegram
              </a>
              <span className="hidden sm:block text-border">|</span>
              <span className="font-mono text-sm">hello@aiagents.dev</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
