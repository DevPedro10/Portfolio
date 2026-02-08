import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { FlaskConical, Notebook } from "lucide-react";
import CV from "@/assets/Desenvolvedor Java.pdf";
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
    {
      label: t.nav.practicalTests,
      path: "/practical-tests",
      icon: FlaskConical,
      available: false,
    },
    {
      label: t.nav.articles,
      path: "/articles",
      icon: Notebook,
      available: false,
    },
  ];

  return (
    <header className="h-full">
      <nav
        className={`sm:block hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/20 py-4"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center w-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="block md:inline text-2xl font-arial">
                  {t.hero.name}
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex items-center gap-3">
                {navItems
                  .filter((item) => item.isSection)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id!)}
                      className="py-2 px-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className="px-3 py-0 m-0 text-sm font-medium text-muted-foreground 
                      hover:text-primary 
                      data-[state=open]:text-primary 
                      focus:text-primary 
                      active:text-primary 
                      transition-colors duration-300 
                      bg-transparent 
                      hover:bg-transparent 
                      focus:bg-transparent 
                      active:bg-transparent 
                      data-[state=open]:bg-transparent"
                      >
                        {t.nav.more}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-[180px] bg-background rounded-md">
                        {navItems
                          .filter((item) => !item.isSection)
                          .map((item) => {
                            const Icon = item.icon;
                            return (
                              <NavigationMenuLink asChild key={item.label}>
                                <a
                                  href={item.path}
                                  className="flex items-center gap-2 py-3 px-2 text-sm text-muted-foreground 
                                hover:text-primary 
                                transition-colors duration-200 
                                bg-transparent 
                                hover:bg-transparent 
                                focus:bg-transparent 
                                active:bg-transparent 
                                data-[state=open]:bg-transparent"
                                >
                                  {Icon && (
                                    <Icon
                                      size={16}
                                      className="text-muted-foreground"
                                    />
                                  )}
                                  {item.label}
                                  {/* {!item.available && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                      DEV
                                    </span>
                                  )} */}
                                </a>
                              </NavigationMenuLink>
                            );
                          })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <ThemeToggle />
              <LanguageToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(CV, "_blank")}
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-6"
              >
                {t.nav.hire}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar altura fixa do nav */}
      <div
        className={`${
          isScrolled ? "h-[72px]" : "h-[96px]"
        } transition-all duration-500`}
      />
    </header>
  );
};
