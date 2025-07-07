export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/alexsilva" },
    { name: "GitHub", href: "https://github.com/alexsilva" },
    { name: "Twitter", href: "https://twitter.com/alexsilva" },
    { name: "Instagram", href: "https://instagram.com/alexsilva" }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-space font-bold text-gradient">
              Alex Silva
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedor Full Stack apaixonado por criar experiências 
              digitais incríveis e soluções inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-space font-semibold">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              {["Sobre", "Projetos", "Habilidades", "Contato"].map((link) => (
                <button
                  key={link}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-space font-semibold">Redes Sociais</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Silva. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Feito com ❤️ usando React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};