import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
            Sobre <span className="text-gradient font-medium">Mim</span>
          </h2>
          <p className="text-lg text-soft max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack com experiência em React e Java, 
            focado em criar aplicações eficientes e escaláveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-space font-medium">Minha Jornada</h3>
              <p className="text-soft leading-relaxed">
                Especializado em desenvolvimento Full Stack, trabalho principalmente 
                com React no frontend e Java no backend. Tenho paixão por criar 
                soluções elegantes e funcionais que atendam às necessidades reais 
                dos usuários.
              </p>
              <p className="text-soft leading-relaxed">
                Meu foco está em escrever código limpo, manter boas práticas de 
                desenvolvimento e sempre buscar a melhor experiência do usuário. 
                Acredito que tecnologia deve simplificar e melhorar a vida das pessoas.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-space font-medium">Principais Tecnologias:</h4>
              <div className="grid grid-cols-2 gap-3">
                {["React", "Java", "Spring Boot", "TypeScript", "PostgreSQL", "Git"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-soft">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="subtle-card p-6 rounded-lg minimal-hover">
              <h4 className="text-lg font-space font-medium mb-4">Experiência</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">Full Stack Developer</h5>
                  <p className="text-sm text-soft">Tech Solutions • 2022 - Presente</p>
                  <p className="text-sm text-soft mt-2">
                    Desenvolvimento de aplicações web usando React e Java Spring Boot
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">Desenvolvedor Java</h5>
                  <p className="text-sm text-soft">Empresa Digital • 2021 - 2022</p>
                  <p className="text-sm text-soft mt-2">
                    APIs REST, microserviços e integração com bancos de dados
                  </p>
                </div>
              </div>
            </div>

            <div className="subtle-card p-6 rounded-lg minimal-hover">
              <h4 className="text-lg font-space font-medium mb-4">Educação</h4>
              <div className="border-l-2 border-primary pl-4">
                <h5 className="font-medium">Análise e Desenvolvimento de Sistemas</h5>
                <p className="text-sm text-soft">Faculdade de Tecnologia • 2019 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};