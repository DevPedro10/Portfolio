import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/natapedro/" },
    { name: "GitHub", href: "https://github.com/DevPedro10" },
  ];

  const quickLinks = [
    { label: t.nav.about, path: "/about" },
    { label: t.nav.skills, path: "/skills" },
    { label: t.nav.projects, path: "/projects" },
    { label: t.nav.contact, path: "/contact" }
  ];

  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space font-black text-gradient">
              {t.hero.name}
            </h3>
            <p className="text-soft leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-space font-bold text-lg">{t.footer.quickLinks}</h4>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-soft hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="font-space font-bold text-lg">{t.footer.social}</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft hover:text-primary transition-colors duration-200 font-medium"
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
            <p className="text-soft text-sm text-center">
              © {currentYear} {t.hero.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};