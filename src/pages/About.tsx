import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="section-title mb-8">
            {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
          </h1>
          <p className="section-subtitle">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-space font-bold">{t.about.myJourney}</h2>
              <div className="space-y-6">
                <p className="text-soft leading-relaxed text-lg">
                  {t.about.description1}
                </p>
                <p className="text-soft leading-relaxed text-lg">
                  {t.about.description2}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-space font-semibold">{t.about.mainTech}</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Java", "Spring Boot", "TypeScript", "PostgreSQL", "Git"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-3 imposing-card p-4 rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full shadow-strong"></div>
                    <span className="text-foreground font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="imposing-card p-8 rounded-xl">
              <h3 className="text-xl font-space font-bold mb-6">{t.about.experience}</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg">{t.about.positions.fullstack}</h4>
                  <p className="text-sm text-soft">Tech Solutions • 2022 - Presente</p>
                  <p className="text-sm text-soft mt-2">
                    Desenvolvimento de aplicações web usando React e Java Spring Boot
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg">{t.about.positions.java}</h4>
                  <p className="text-sm text-soft">Empresa Digital • 2021 - 2022</p>
                  <p className="text-sm text-soft mt-2">
                    APIs REST, microserviços e integração com bancos de dados
                  </p>
                </div>
              </div>
            </div>

            <div className="imposing-card p-8 rounded-xl">
              <h3 className="text-xl font-space font-bold mb-6">{t.about.education}</h3>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-lg">{t.about.positions.degree}</h4>
                <p className="text-sm text-soft">Faculdade de Tecnologia • 2019 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};