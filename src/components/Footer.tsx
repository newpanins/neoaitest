const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">SmartAI © 2023</span>
        <p className="text-sm text-muted-foreground font-mono">
          smartai.team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
