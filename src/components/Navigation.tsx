import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" }
  ];

  return (
    <header className="h-full">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/20 py-4"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-space font-black text-gradient tracking-tight hover:opacity-80 transition-opacity"
            >
              {t.hero.name}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium transition-colors duration-200 text-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageToggle />
              <div className="hidden md:block">
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  {t.nav.hire}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div
        className={`${
          isScrolled ? "h-[72px]" : "h-[96px]"
        } transition-all duration-500`}
      />
    </header>
  );
};