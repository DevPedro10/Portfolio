import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { practicalTests } from "@/content/practicalTests";

export const PracticalTests = () => {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen py-0 sm:py-20 px-6">
      <div className="container mx-auto sm:max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-light mb-6">
              {t.practicalTests.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.practicalTests.subtitle}
            </p>
          </div>
        </div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          {practicalTests.map((test) => (
            <div
              key={test.id}
              className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-inter font-semibold">
                      {test.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {test.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{formatDate(test.completedDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{test.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-sm mb-2">
                      {t.practicalTests.challenge}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {test.challenge}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {test.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {test.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {test.demoUrl && (
                    <a
                      href={test.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.practicalTests.liveDemo}
                      </Button>
                    </a>
                  )}
                  <a
                    href={test.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.practicalTests.viewCode}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 border border-border/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-inter font-semibold mb-4">
              {t.practicalTests.interestedTitle}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.practicalTests.interestedDescription}
            </p>
            <Link to="/#contact">
              <Button
                variant="outline"
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                {t.practicalTests.discussProject}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
