import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "Tailwind", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Maven", level: 80 },
        { name: "IntelliJ", level: 85 },
        { name: "Linux", level: 75 }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
            Minhas <span className="text-gradient font-medium">Habilidades</span>
          </h2>
          <p className="text-lg text-soft max-w-2xl mx-auto leading-relaxed">
            Tecnologias que utilizo para criar soluções eficientes e escaláveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="subtle-card p-6 rounded-lg space-y-6 minimal-hover">
              <h3 className="text-xl font-space font-medium text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-soft">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2">
                      <div
                        className="h-2 hero-gradient rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-space font-medium mb-8 text-soft">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Spring Framework", "JPA/Hibernate", "Metodologias Ágeis", "Testes Unitários", 
              "Clean Code", "SOLID", "Redux", "Jest", "Maven", "Gradle", 
              "Microserviços", "Bootstrap"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 subtle-card rounded-full text-sm font-medium minimal-hover"
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