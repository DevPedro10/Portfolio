import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, FileText, Mail, TestTube, Notebook } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const menuItems = [
    { icon: Home, label: t.nav.home, action: () => scrollToSection('hero') },
    { icon: User, label: t.nav.about, action: () => scrollToSection('about') },
    { icon: Code, label: t.nav.skills, action: () => scrollToSection('skills') },
    { icon: FileText, label: t.nav.projects, action: () => scrollToSection('projects') },
    { icon: TestTube, label: "Practical Tests", action: () => { setIsOpen(false); window.location.href = '/practical-tests'; } },
    { icon: Notebook, label: t.nav.articles, action: () => { setIsOpen(false); window.location.href = '/articles'; } },
    { icon: Mail, label: t.nav.contact, action: () => scrollToSection('contact') },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative z-50"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative h-full bg-background/95 backdrop-blur-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <h2 className="text-xl font-space font-semibold text-gradient">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={item.action}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/10 transition-colors duration-200 text-left"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer Controls */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-center space-x-4 p-4 bg-card/50 rounded-lg border border-border/20">
                <ThemeToggle />
                <div className="w-px h-6 bg-border/40" />
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};