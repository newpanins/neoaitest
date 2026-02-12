const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold font-mono text-xs">AI</span>
          </div>
          <span className="text-sm text-muted-foreground">AgentDev © 2026</span>
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          Building the future with autonomous AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
