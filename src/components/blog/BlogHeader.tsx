import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import BlogSearchInput from "./BlogSearchInput";
import { Home } from "lucide-react";
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
        className={`block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/20 py-4"
            : "py-6"
        }`}
      >
        <div className="container mx-auto sm:max-w-6xl px-4 sm:px-6">
          <div className="flex justify-center sm:justify-between w-full">
            <div className="flex items-center">
              <Link to="/blog" className="flex items-center">
                <span className="block md:inline text-2xl font-inter font-thin">
                  {t.hero.name}'s <span className="font-bold">Blog</span>
                </span>
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-5">
              <div className="">
                <Link to={"/"} className="">
                  <Home className="h-5 w-5" />
                </Link>
              </div>

              <div className="">
                <ThemeToggle />
              </div>
              <div className="">
                <BlogSearchInput />
              </div>
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
