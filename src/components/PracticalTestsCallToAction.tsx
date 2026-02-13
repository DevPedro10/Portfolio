import { Button } from "@/components/ui/button";
import { TestTube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const PracticalTestsCallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card/30 border border-border/20 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <TestTube className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-inter font-medium mb-4">
            {t.practicalTests.callToAction.title}
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.practicalTests.callToAction.description}
          </p>

          <Link to="/practical-tests">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
            >
              {t.practicalTests.callToAction.button}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};