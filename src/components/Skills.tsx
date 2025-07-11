import { useLanguage } from "@/contexts/LanguageContext";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: t.skills.backend,
      skills: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Redis", "REST APIs", "JPA/Hibernate", "RabbitMQ"]
    },
    {
      title: t.skills.tools,
      skills: ["Git", "Docker", "Maven", "Gradle", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
            {t.skills.title} <span className="text-gradient font-medium">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card/50 border border-border/20 p-6 rounded-lg space-y-6 hover:bg-card/70 transition-colors duration-300">
              <h3 className="text-xl font-space font-medium text-center text-gradient">
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
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-space font-medium mb-8 text-muted-foreground">{t.skills.otherSkills}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Spring Framework", "JPA/Hibernate", "Metodologias Ágeis", "Testes Unitários",
              "Clean Code", "Microserviços",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card/50 border border-border/20 rounded-full text-sm font-medium hover:bg-card/70 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};