import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInUp, ScaleIn } from "@/components/animations";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend.title,
      skills: t.skills.frontend.skills,
    },
    {
      title: t.skills.backend.title,
      skills: t.skills.backend.skills,
    },
    {
      title: t.skills.database.title,
      skills: t.skills.database.skills,
    },
    {
      title: t.skills.tools.title,
      skills: t.skills.tools.skills,
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto sm:max-w-6xl px-4 sm:px-6">
        <FadeInUp duration={0.7}>
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-light mb-4 sm:mb-6">
              {t.skills.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.skills.subtitle}
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {skillCategories.map((category, index) => (
            <ScaleIn key={index} delay={index * 0.2} duration={0.6}>
              <div className="bg-card/50 border border-border/20 p-4 sm:p-6 rounded-lg space-y-4 sm:space-y-6 hover:bg-card/70 transition-colors duration-300">
                <h3 className="text-xl font-inter font-medium text-center">
                  {category.title}
                </h3>
                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-3 bg-secondary/50 rounded-lg text-center font-medium hover:bg-secondary/70 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Additional Skills */}
        <FadeInUp delay={0.4} duration={0.7}>
          <div className="mt-8 sm:mt-16 text-center">
            <h3 className="text-lg sm:text-xl font-inter font-medium mb-4 sm:mb-8 text-muted-foreground">
              {t.skills.otherSkills}
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4">
              {t.skills.otherSkillsList.map((skill, index) => (
                <ScaleIn key={index} delay={0.5 + index * 0.1} duration={0.5}>
                  <span className="px-4 py-2 bg-card/50 border border-border/20 rounded-full text-sm font-medium hover:bg-card/70 transition-colors duration-300 inline-block">
                    {skill}
                  </span>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
