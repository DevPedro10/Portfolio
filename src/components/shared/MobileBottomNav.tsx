import { Home, User, Mail, Sun, Moon, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { MobileMenu } from "@/components/shared/MobileMenu";

export const MobileBottomNav = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    {
      icon: Home,
      label: "Home",
      action: () => scrollToSection("hero"),
      isActive: location.pathname === "/" && window.scrollY < 100,
    },
    {
      icon: User,
      label: "About",
      action: () => scrollToSection("about"),
      isActive: false,
    },
    {
      icon: Mail,
      label: "Contact",
      action: () => scrollToSection("contact"),
      isActive: false,
    },
    {
      icon: theme === "dark" ? Sun : Moon,
      label: "Theme",
      action: () => setTheme(theme === "dark" ? "light" : "dark"),
      isActive: false,
    },
    {
      icon: Menu,
      label: "Menu",
      action: () => setIsMenuOpen(true),
      isActive: false,
    },
  ];

  return (
    <>
      <div className="md:hidden fixed bottom-[-3px] left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/95 backdrop-blur-lg border-t-2 sm:border-2 border-border/40 px-6 py-4 shadow-2xl">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className={`p-3 rounded-full transition-all duration-300 ${item.isActive
                    ? "bg-primary text-primary-foreground shadow-lg scale-110"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-105"
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

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};
