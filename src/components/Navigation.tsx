import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'subtle-card backdrop-blur-md py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-space font-medium text-gradient"
          >
            Natã Pedro
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="minimal-hover bg-primary hover:bg-primary/90"
            >
              Contratar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
              <span className="w-full h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};