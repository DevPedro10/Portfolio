import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "/lovable-uploads/d5ecf219-5f14-455f-8213-6945f16692ad.png";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Subtle background elements */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mx-auto w-40 h-40 mb-8">
            <img
              src={profileImage}
              alt="Natã Pedro"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-space font-light leading-tight">
                Olá, eu sou{" "}
                <span className="text-gradient font-medium">Natã Pedro</span>
              </h1>
              
              <p className="text-lg md:text-xl text-soft leading-relaxed max-w-2xl mx-auto">
                Desenvolvedor Full Stack especializado em React e Java, 
                criando soluções web modernas e escaláveis
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="minimal-hover bg-primary hover:bg-primary/90 font-medium px-8">
                Ver Projetos
              </Button>
              <Button variant="outline" size="lg" className="minimal-hover font-medium px-8">
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-3 rounded-full subtle-card minimal-hover"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};