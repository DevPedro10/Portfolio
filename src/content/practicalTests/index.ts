export interface PracticalTest {
    id: number;
    title: string;
    company: string;
    description: string;
    technologies: string[];
    completedDate: string;
    duration: string;
    demoUrl?: string;
    codeUrl: string;
    challenge: string;
}

export const practicalTests: PracticalTest[] = [
    {
        id: 1,
        title: "Sistema de Agendamento Inteligente de Transferências Financeiras",
        company: "Tokio Marine Seguradora",
        description:
            "Desenvolvimento de uma aplicação Full-Stack para agendamento de transferências financeiras com cálculo automático de taxas baseado em regras de negócio. O Backend foi construído em Java 11 com Spring Boot seguindo arquitetura em camadas (Controller, Service, Repository), utilizando H2 in-memory e BigDecimal para precisão monetária. O Frontend foi desenvolvido em React com TypeScript e Vite, consumindo APIs REST e oferecendo interface responsiva para cadastro e consulta de agendamentos.",
        technologies: [
            "Java 11",
            "Spring Boot 2.7",
            "Spring Data JPA",
            "H2 Database",
            "Gradle",
            "React",
            "TypeScript",
            "Vite"
        ],
        completedDate: "2025-03-10",
        duration: "3 days",
        // demoUrl: "#",
        codeUrl: "https://github.com/DevPedro10/tokio-marine-holdings-practical-test",
        challenge:
            "Implementar corretamente uma regra de cálculo de taxa baseada em data futura da transferência, garantindo precisão monetária, separação de responsabilidades com arquitetura em camadas e integração completa entre Backend Java/Spring Boot e Frontend React."
    },
];
