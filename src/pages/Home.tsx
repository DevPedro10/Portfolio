import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "/lovable-uploads/d5ecf219-5f14-455f-8213-6945f16692ad.png";

export const Home = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-16 max-w-5xl mx-auto">
          <div className="relative mx-auto w-56 h-56 mb-12">
            <div className="absolute inset-0 rounded-full bg-imposing animate-pulse-slow opacity-20"></div>
            <img
              src={profileImage}
              alt={t.hero.name}
              className="relative z-10 w-full h-full object-cover rounded-full shadow-imposing border-4 border-background"
            />

          </div>

          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-7xl font-space font-black leading-tight tracking-tight">
                {t.hero.greeting}{" "}
                <span className="text-gradient block md:inline font-black">
                  {t.hero.name}
                </span>
              </h1>

              <p className="section-subtitle text-xl md:text-2xl font-medium">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/projects">
                <Button size="lg" variant="transparent" className="capitalize">
                  {t.hero.viewProjects}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="imposing-button imposing-card px-12 py-4 text-base capitalize">
                  {t.hero.contact}
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNext}
              className="animate-bounce p-4 rounded-full imposing-card hover:shadow-imposing transition-all duration-900"
              aria-label={t.hero.scrollDown}
            >
              <ArrowDown className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};