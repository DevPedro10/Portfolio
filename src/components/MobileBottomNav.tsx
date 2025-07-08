import { Home, User, Code, FileText, Mail, Sun, Moon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export const MobileBottomNav = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      icon: Home,
      label: "Home",
      action: () => scrollToSection('hero'),
      isActive: location.pathname === '/' && window.scrollY < 100
    },
    {
      icon: User,
      label: "About",
      action: () => scrollToSection('about'),
      isActive: false
    },
    {
      icon: Code,
      label: "Skills",
      action: () => scrollToSection('skills'),
      isActive: false
    },
    {
      icon: FileText,
      label: "Projects",
      action: () => scrollToSection('projects'),
      isActive: false
    },
    {
      icon: Mail,
      label: "Contact",
      action: () => scrollToSection('contact'),
      isActive: false
    },
    {
      icon: theme === 'dark' ? Sun : Moon,
      label: "Theme",
      action: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      isActive: false
    }
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border/20 rounded-full px-4 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`p-2 rounded-full transition-all duration-300 ${
                  item.isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};