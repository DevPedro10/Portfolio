import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const PracticalTests = () => {
  const { t } = useLanguage();

  const tests = [
    {
      id: 1,
      title: "E-commerce Product Catalog",
      company: "TechCorp Solutions",
      description:
        "Built a responsive product catalog with search, filtering, and cart functionality using React and TypeScript. Implemented advanced state management and optimized performance for large datasets.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Styled Components",
        "Jest",
      ],
      completedDate: "2024-01-15",
      duration: "3 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      challenge:
        "Create a scalable product catalog that can handle 10,000+ products with real-time search and filtering capabilities.",
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      company: "StartupXYZ",
      description:
        "Developed a real-time chat application with WebSocket integration, user authentication, and message persistence. Focused on creating a smooth user experience with typing indicators and message status.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      completedDate: "2024-01-08",
      duration: "4 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      challenge:
        "Build a chat app that supports multiple rooms, file sharing, and works seamlessly across different devices.",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      company: "ProductivityCo",
      description:
        "Created a comprehensive task management system with drag-and-drop functionality, team collaboration features, and detailed analytics dashboard.",
      technologies: ["Vue.js", "Java", "Spring Boot", "PostgreSQL", "Docker"],
      completedDate: "2023-12-20",
      duration: "5 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      challenge:
        "Design an intuitive interface for managing complex project workflows with multiple team members.",
    },
    {
      id: 4,
      title: "API Gateway Microservice",
      company: "CloudTech Inc",
      description:
        "Implemented a robust API gateway with rate limiting, authentication, and request routing for a microservices architecture.",
      technologies: [
        "Java",
        "Spring Cloud Gateway",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
      completedDate: "2023-12-10",
      duration: "6 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      challenge:
        "Create a high-performance gateway that can handle 1000+ requests per second with proper error handling.",
    },
    {
      id: 5,
      title: "Data Visualization Platform",
      company: "AnalyticsPro",
      description:
        "Built an interactive data visualization platform with custom charts, real-time updates, and export capabilities for business intelligence.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      completedDate: "2023-11-25",
      duration: "7 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      challenge:
        "Create dynamic, interactive charts that can process and display large datasets in real-time.",
    },
    {
      id: 6,
      title: "Mobile-First PWA",
      company: "MobileTech",
      description:
        "Developed a Progressive Web App with offline capabilities, push notifications, and native-like performance on mobile devices.",
      technologies: [
        "React",
        "PWA",
        "Service Workers",
        "IndexedDB",
        "Web Push API",
      ],
      completedDate: "2023-11-15",
      duration: "4 days",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      challenge:
        "Build a PWA that works seamlessly offline and provides a native app experience.",
    },
  ];

  const featuredTests = tests.filter((test) => test.featured);
  const otherTests = tests.filter((test) => !test.featured);

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
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-light mb-6">
              {t.practicalTests.title}{" "}
              <span className="text-gradient font-medium">
                {t.practicalTests.titleHighlight}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.practicalTests.subtitle}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-inter font-semibold mb-8 text-center">
            {t.practicalTests.featuredChallenges}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTests.map((test) => (
              <div
                key={test.id}
                className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-inter font-semibold">
                        {test.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {test.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-left gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(test.completedDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.practicalTests.liveDemo}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.practicalTests.viewCode}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Tests */}
        <div>
          <h2 className="text-2xl font-inter font-semibold mb-8 text-center">
            {t.practicalTests.otherChallenges}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTests.map((test) => (
              <div
                key={test.id}
                className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-inter font-semibold">
                      {test.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {test.company}
                    </p>
                  </div>

                  <div className="flex sm:items-center sm:space-x-4 text-xs text-muted-foreground flex-col sm:flex-row space-x-0 items-start gap-2 sm:gap-0">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(test.completedDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{test.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {test.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {test.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {test.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                        +{test.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {t.practicalTests.liveDemo}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-xs"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      {t.practicalTests.viewCode}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <Link to="/contact">
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
