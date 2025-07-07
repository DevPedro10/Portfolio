import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"]
    },
    {
      title: t.skills.backend,
      skills: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "REST APIs", "JPA/Hibernate"]
    },
    {
      title: t.skills.tools,
      skills: ["Git", "Docker", "Maven", "IntelliJ IDEA", "Linux", "Gradle"]
    }
  ];

  const otherSkills = [
    "Spring Framework", "Microserviços", "Metodologias Ágeis", "Testes Unitários", 
    "Clean Code", "SOLID", "Jest", "Bootstrap", "Figma", "VS Code"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="section-title mb-8">
            {t.skills.title} <span className="text-gradient">{t.skills.titleHighlight}</span>
          </h1>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="imposing-card p-8 rounded-xl space-y-8">
              <h2 className="text-2xl font-space font-bold text-center text-gradient">
                {category.title}
              </h2>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-secondary/50 p-4 rounded-lg text-center font-medium hover:bg-secondary/70 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="text-center">
          <h2 className="text-2xl font-space font-bold mb-12 text-soft">
            {t.skills.otherSkills}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 imposing-card rounded-full font-medium text-sm hover:shadow-imposing transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
