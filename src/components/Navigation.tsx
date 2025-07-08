import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.skills, path: "/skills" },
    { label: t.nav.projects, path: "/projects" },
    { label: t.nav.contact, path: "/contact" }
  ];

  return (
    <header className="h-full">
      <nav
        className={`border fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "imposing-card backdrop-blur-xl py-4"
            : "py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-space font-black text-gradient tracking-tight"
            >
              {t.hero.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${location.pathname === item.path
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageToggle />
              <div className="hidden md:block">
                <Link to="/contact">
                  <Button variant="transparent" className="text-sm capitalize">
                    {t.nav.hire}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div
        className={`${isScrolled ? "h-[72px]" : "h-[96px]"
          } transition-all duration-500`}
      />
    </header>


  );
};