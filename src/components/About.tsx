import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
            {t.about.title} <span className="text-gradient font-medium">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-space font-medium">{t.about.myJourney}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.description2}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-space font-medium">{t.about.mainTech}</h4>
              <div className="grid grid-cols-2 gap-3">
                {["React", "Java", "Spring Boot", "TypeScript", "PostgreSQL", "Git"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 border border-border/20 p-6 rounded-lg hover:bg-card/70 transition-colors duration-300">
              <h4 className="text-lg font-space font-medium mb-4">{t.about.experience}</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">{t.about.positions.fullstack}</h5>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="https://www.plusoft.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Plusoft - empresa onde trabalho"
                      aria-label="Site externo da Plusoft"
                      className="underline hover:text-primary transition-colors"
                    >
                      Plusoft</a>{" "}• 2024 - Presente</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Trabalho diretamente no core da aplicação, implementando funcionalidades críticas e garantindo a escalabilidade e a performance do sistema. Minhas responsabilidades incluem otimizar e desenvolver APIs, refatorar métodos para reduzir o consumo de memória, e resolver bugs reportados pelo suporte, assegurando a estabilidade e a qualidade do produto para os usuários finais. Utilizo principalmente Spring Boot, RabbitMQ e React.js, com integração de clientes de redes sociais (Facebook, WhatsApp, Instagram, Telegram) para atendimento via bot. Atuo com bancos de dados Oracle e MongoDB e utilizo CI/CD com Bamboo. Realizo análises de pods e nodes em ambientes Kubernetes hospedados na OCI e AWS.                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">{t.about.positions.java}</h5>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="https://www.plusoft.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Plusoft - empresa onde trabalho"
                      aria-label="Site externo da Plusoft"
                      className="underline hover:text-primary transition-colors"
                    >
                      Plusoft</a>{" "}• 2022 - 2024</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Criação e manutenção de fluxos backend para chatbot, integrando APIs internas e externas para melhorar a experiência do usuário. Também atuei na melhoria da interface visual do bot, utilizando Groovy no backend e JavaScript no frontend.                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border/20 p-6 rounded-lg hover:bg-card/70 transition-colors duration-300">
              <h4 className="text-lg font-space font-medium mb-4">{t.about.education}</h4>
              <div className="border-l-2 border-primary pl-4">
                <h5 className="font-medium">{t.about.positions.degree}</h5>
                <p className="text-sm text-muted-foreground">Faculdade Impacta • 2023 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};