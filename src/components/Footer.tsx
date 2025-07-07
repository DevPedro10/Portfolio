export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/natapedro" },
    { name: "GitHub", href: "https://github.com/natapedro" },
    { name: "Twitter", href: "https://twitter.com/natapedro" },
    { name: "Instagram", href: "https://instagram.com/natapedro" }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-space font-medium text-gradient">
              Natã Pedro
            </h3>
            <p className="text-soft">
              Desenvolvedor Full Stack especializado em React e Java, 
              criando soluções web modernas e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-space font-medium">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              {["Sobre", "Projetos", "Habilidades", "Contato"].map((link) => (
                <button
                  key={link}
                  className="text-soft hover:text-foreground transition-colors duration-200 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-space font-medium">Redes Sociais</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft hover:text-primary transition-colors duration-200"
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
            <p className="text-soft text-sm">
              © {currentYear} Natã Pedro. Todos os direitos reservados.
            </p>
            <p className="text-soft text-sm">
              Feito com ❤️ usando React & Java
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};