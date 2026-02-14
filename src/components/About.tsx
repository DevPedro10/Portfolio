import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInUp, SlideIn } from "@/components/animations";

export const About = () => {
  const { t } = useLanguage();
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  const experiences = Object.entries(t.experience.experiences || {}).map(
    ([key, value]) => ({
      id: key,
      ...value,
    }),
  );

  const handlePrevExperience = () => {
    setCurrentExperienceIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1,
    );
  };

  const handleNextExperience = () => {
    setCurrentExperienceIndex((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1,
    );
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <section id="about" className="scroll-mt-[100px] px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <SlideIn direction="left" duration={0.7}>
            <div className="space-y-8">
              <FadeInUp duration={0.6}>
                <div className="space-y-6">
                  <h3 className="text-xl font-inter font-medium">
                    {t.about.myJourney}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.description1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.about.description2}
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2} duration={0.6}>
                <div className="space-y-4">
                  <h4 className="text-lg font-inter font-medium">
                    {t.about.mainTech}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "React",
                      "Java",
                      "Spring Boot",
                      "TypeScript",
                      "PostgreSQL",
                      "Git",
                    ].map((tech) => (
                      <div key={tech} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </SlideIn>

          <SlideIn direction="right" duration={0.7} delay={0.1}>
            <div className="space-y-6">
              <div className="min-h-98 bg-card/50 border border-border/20 p-6 rounded-lg hover:bg-card/70 transition-colors duration-300 flex flex-col">
                <h4 className="text-lg font-inter font-medium mb-6">
                  {t.about.experience}
                </h4>

                {experiences.length > 0 && currentExperience && (
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="border-l-2 border-primary pl-4 min-h-64">
                      <h5 className="font-medium">
                        {currentExperience.jobTitle}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {currentExperience.company} • {currentExperience.period}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed min-h-24">
                        {currentExperience.description}
                      </p>

                      {currentExperience.technologies && (
                        <div className="mt-4 pt-4 border-t border-border/20">
                          <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                            Tecnologias
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {currentExperience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Carrossel Controls */}
                    <div className="flex items-center justify-between pt-4 mt-6 border-t border-border/20">
                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevExperience}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          aria-label="Experiência anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextExperience}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          aria-label="Próxima experiência"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex gap-2">
                        {experiences.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentExperienceIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentExperienceIndex
                              ? "bg-primary w-6"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                              }`}
                            aria-label={`Ir para experiência ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-card/50 border border-border/20 p-6 rounded-lg hover:bg-card/70 transition-colors duration-300">
                <h4 className="text-lg font-inter font-medium mb-4">
                  {t.about.education}
                </h4>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">{t.about.positions.degree}</h5>
                  <p className="text-sm text-muted-foreground">
                    Faculdade Impacta • 2023 - 2025
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
