export const experience = {
  tokio: {
    jobTitle: "Desenvolvedor Java",
    company: "Wayon IT | Tokio Marine Seguradora",
    period: "11/2025 - 04/2026",
    description:
      "Na Wayon IT, alocado na Tokio Marine Seguradora, onde atuo no desenvolvimento de sistemas para o setor de seguros utilizando tecnologias web e móveis como JavaScript, TypeScript, Vue, Java, Spring Boot e bancos de dados Oracle SQL e MongoDB.",
    technologies: [
      "Spring Boot",
      "RabbitMQ",
      "Vue",
      "Oracle",
      "MongoDB",
      "GitLab",
      "JSP (Java Server Pages)",
    ],
  },
  plusoft: {
    jobTitle: "Desenvolvedor Full Stack",
    company: "Plusoft",
    period: "05/2022 - 10/2025",
    description:
      "Atuei no desenvolvimento e evolução de APIs e sistemas em Java com Spring dentro de uma plataforma de Inteligência Artificial, integrando clientes de redes sociais para atendimento automatizado via bots. Também colaborei com deploys e gestão de bancos de dados, garantindo alta disponibilidade e performance.",
    technologies: [
      "Java (Spring Framework)",
      "Kubernetes (OCI)",
      "RabbitMQ",
      "Reddit",
      "MongoDB",
      "React.js (TypeScript)",
    ],
  },
} as const;

export type ExperienceKey = keyof typeof experience;
