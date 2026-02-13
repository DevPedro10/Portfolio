import { Notebook } from "lucide-react";
import { Button } from "./ui/button";

export const BlogNewsletter = () => {
  return (
    <div className="mt-16 text-center w-full">
      <div className="bg-card/50 border border-border/20 rounded-lg p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Notebook className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-space font-semibold mb-4">
          Receba novos artigos
        </h3>
        <p className="text-muted-foreground mb-6">
          Inscreva-se para receber notificações sobre novos artigos e conteúdos
          sobre desenvolvimento de software.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu email"
            className="flex-1 px-4 py-2 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button
            variant="outline"
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            Inscrever-se
          </Button>
        </div>
      </div>
    </div>
  );
};
