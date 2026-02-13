export const experience = {
  tokio: {
    jobTitle: "Desenvolvedor Java",
    company: "Tokio Marine Seguradora",
    period: "Atual",
    description:
      "Trabalho diretamente no core da aplicação, implementando funcionalidades críticas e garantindo a escalabilidade e a performance do sistema. Minhas responsabilidades incluem otimizar e desenvolver APIs.",
    technologies: [
      "Spring Boot",
      "RabbitMQ",
      "React.js",
      "Oracle",
      "MongoDB",
      "Bamboo CI/CD",
      "Kubernetes",
      "OCI",
      "AWS",
    ],
    highlights: [
      "Desenvolvimento core da aplicação com funcionalidades críticas",
      "Otimização e desenvolvimento de APIs",
      "Otimização do consumo de memória",
      "Integração de redes sociais (Facebook, WhatsApp, Instagram, Telegram)",
      "Gerenciamento de infraestrutura Kubernetes e cloud",
    ],
  },
  plusoft: {
    jobTitle: "Desenvolvedor Full Stack",
    company: "Plusoft",
    period: "2022 - 2025",
    description:
      "Criação e manutenção de fluxos backend para chatbot, integrando APIs internas e externas para melhorar a experiência do usuário. Também atuei na melhoria da interface visual do bot, utilizando Groovy no backend e JavaScript no frontend.",
    technologies: [
      "Groovy",
      "JavaScript",
      "Backend",
      "Frontend",
      "Integração de APIs",
    ],
    highlights: [
      "Desenvolvimento de fluxos backend para chatbot",
      "Integração de APIs (internas e externas)",
      "Melhorias na interface visual",
      "Desenvolvimento Full Stack",
    ],
  },
} as const;

export type ExperienceKey = keyof typeof experience;
