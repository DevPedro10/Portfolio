import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  FileText,
  Mail,
  TestTube,
  Notebook,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LanguageToggle } from "@/components/shared/LanguageToggle";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const { t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const menuItems = [
    { icon: Home, label: t.nav.home, action: () => scrollToSection("hero") },
    { icon: User, label: t.nav.about, action: () => scrollToSection("about") },
    {
      icon: Code,
      label: t.nav.skills,
      action: () => scrollToSection("skills"),
    },
    {
      icon: FileText,
      label: t.nav.projects,
      action: () => scrollToSection("projects"),
    },
    {
      icon: TestTube,
      label: t.nav.practicalTests,
      action: () => {
        setIsOpen(false);
        window.location.href = "/practical-tests";
      },
    },
    {
      icon: Notebook,
      label: t.nav.articles,
      action: () => {
        setIsOpen(false);
        window.location.href = "/blog";
      },
    },
    {
      icon: Mail,
      label: t.nav.contact,
      action: () => scrollToSection("contact"),
    },
  ];

  if (!isOpen) return null;

  return (
    <>
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

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full bg-background/95 backdrop-blur-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <h2 className="text-xl font-inter font-semibold text-primary">
                Menu
              </h2>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col py-6 space-y-4 px-3">
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

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-center space-x-4 p-4 bg-card/50 rounded-lg border border-border/20">
                <ThemeToggle />
                <LanguageToggle />
                <div className="w-px h-6 bg-border/40" />
                <div className="flex items-center justify-end space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-6"
                  >
                    {t.nav.hire}
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
