import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor com mais de 5 anos de experiência criando aplicações 
            web modernas e soluções digitais inovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-space font-semibold">Minha Jornada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comecei minha jornada no desenvolvimento aos 18 anos, fascinado pela 
                possibilidade de criar soluções que impactam a vida das pessoas. 
                Desde então, tenho me dedicado a aprender continuamente e 
                acompanhar as mais recentes tecnologias do mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Especializado em React, Node.js e TypeScript, adoro trabalhar tanto 
                no frontend quanto no backend, criando experiências completas e 
                performáticas. Meu foco está sempre na qualidade do código e na 
                experiência do usuário.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-space font-medium">O que me motiva:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Resolver problemas complexos com soluções elegantes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Aprender novas tecnologias e metodologias
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Colaborar em equipes multidisciplinares
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Criar produtos que fazem a diferença
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass p-6 space-y-4">
              <h4 className="text-lg font-space font-medium">Experiência</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">Senior Full Stack Developer</h5>
                  <p className="text-sm text-muted-foreground">Tech Company • 2022 - Presente</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Liderança técnica em projetos de larga escala usando React, Node.js e AWS
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">Full Stack Developer</h5>
                  <p className="text-sm text-muted-foreground">Startup Inc. • 2020 - 2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Desenvolvimento de aplicações web e mobile usando tecnologias modernas
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-medium">Junior Developer</h5>
                  <p className="text-sm text-muted-foreground">AgenciaWeb • 2019 - 2020</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Desenvolvimento frontend e integração com APIs REST
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass p-6">
              <h4 className="text-lg font-space font-medium mb-4">Educação</h4>
              <div className="border-l-2 border-primary pl-4">
                <h5 className="font-medium">Ciência da Computação</h5>
                <p className="text-sm text-muted-foreground">Universidade Federal • 2016 - 2020</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Bacharelado com foco em Engenharia de Software e Algoritmos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};