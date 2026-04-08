import { Button } from "@/components/ui/button";
import { ArrowDown, TestTube } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FadeInUp,
  FadeIn,
  StaggerContainer,
  SlideIn,
} from "@/components/animations";

export const Home = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === "contact") {
      setTimeout(() => {
        scrollToContact();
      }, 100);
    }
  }, []);

  return (
    <section
      id="hero"
      className="flex items-center justify-center pt-24 sm:py-32 relative sm:h-screen h-full"
    >
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <SlideIn direction="up" duration={0.5}>
          <div
            className="text-center space-y-12 max-w-4xl mx-auto"
            style={{ transform: "translateY(-10vh)" }}
          >
            {/* Profile Image */}
            <FadeInUp duration={0.5}>
              <div className="relative mx-auto w-40 h-40 mb-8">
                <img
                  src="https://avatars.githubusercontent.com/u/84449259?v=4"
                  alt="Natã Pedro"
                  className="w-full h-full object-cover rounded-md sm:rounded-full shadow-sm border border-border/20"
                />
              </div>
            </FadeInUp>

            {/* Main Content */}
            <StaggerContainer staggerDelay={0.15}>
              <FadeInUp delay={0.2} duration={0.7}>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-inter font-light leading-tight">
                    <span className="text-foreground font-medium font-inter sm:inline block">
                      {t.hero.name}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {t.hero.subtitle}
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.35} duration={0.7}>
                <div className="flex flex-col my-4 sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={scrollToProjects}
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-8 w-[150px]"
                  >
                    {t.hero.viewProjects}
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 px-8 w-[150px]"
                  >
                    {t.hero.contact}
                  </Button>
                </div>
              </FadeInUp>
            </StaggerContainer>

            {/* Scroll indicator */}
            <FadeIn delay={0.5} duration={0.5}>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-[13vh] sm:translate-y-[20vh] transform">
                <button
                  onClick={scrollToAbout}
                  className="animate-bounce p-3 rounded-full hover:bg-primary/5 transition-colors duration-800"
                  aria-label="Scroll to about section"
                >
                  <ArrowDown className="w-5 h-5 text-primary" />
                </button>
              </div>
            </FadeIn>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};
