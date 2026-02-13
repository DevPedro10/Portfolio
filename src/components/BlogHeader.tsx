import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import BlogSearchInput from "./BlogSearchInput";
export const BlogHeader = () => {
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

  return (
    <header className="h-full">
      <nav
        className={`sm:block hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/20 py-4"
          : "py-6"
          }`}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="block md:inline text-2xl font-sourceserif font-thin font-inter">
                  {t.hero.name}'s <span className="font-bold">Blog</span>
                </span>
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="hidden lg:flex justify-center">
                <BlogSearchInput />
              </div>

              <div className="flex items-center justify-end space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar altura fixa do nav */}
      <div
        className={`${isScrolled ? "h-[72px]" : "h-[96px]"
          } transition-all duration-500`}
      />
    </header>
  );
};
