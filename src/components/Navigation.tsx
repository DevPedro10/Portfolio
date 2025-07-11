import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: t.nav.about, id: "about", isSection: true },
    { label: t.nav.skills, id: "skills", isSection: true },
    { label: t.nav.projects, id: "projects", isSection: true },
    { label: t.nav.contact, id: "contact", isSection: true },
  ];

  const pageItems = [
    { label: t.nav.practicalTests, path: "/practical-tests" },
    { label: t.nav.articles, path: "/articles" },
  ];

  return (
    <header className="h-full">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/20 py-4"
          : "py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {/* Main Navigation */}
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="font-medium transition-colors duration-300 hover:text-primary text-sm tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-border/40"></div>

              {/* Page Links */}
              <div className="flex items-center space-x-6">
                {pageItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`font-medium transition-colors duration-300 hover:text-primary text-sm tracking-wide ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="w-px h-6 bg-border/40"></div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <LanguageToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-6"
                >
                  {t.nav.hire}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
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