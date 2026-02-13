export const experience = {
    tokio: {
        jobTitle: "Java Developer",
        company: "Tokio Marine Seguradora",
        period: "Current",
        description:
            "I work directly on the core of the application, implementing critical features and ensuring the scalability and performance of the system. My responsibilities include optimizing and developing APIs, refactoring methods to reduce memory consumption, and resolving bugs reported by support, ensuring product stability and quality for end users. I primarily use Spring Boot, RabbitMQ and React.js, with integration of social network clients (Facebook, WhatsApp, Instagram, Telegram) for bot service. I work with Oracle and MongoDB databases and use CI/CD with Bamboo. I perform analysis of pods and nodes in Kubernetes environments hosted on OCI and AWS.",
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
            "Core application development with critical features",
            "API optimization and development",
            "Memory consumption optimization",
            "Social network integration (Facebook, WhatsApp, Instagram, Telegram)",
            "Kubernetes and cloud infrastructure management",
        ],
    },
    plusoft: {
        jobTitle: "Full Stack Developer",
        company: "Plusoft",
        period: "2024 - Present",
        description:
            "Creation and maintenance of backend flows for chatbot, integrating internal and external APIs to improve user experience. I also worked on improving the visual interface of the bot, using Groovy in the backend and JavaScript in the frontend.",
        technologies: [
            "Groovy",
            "JavaScript",
            "Backend",
            "Frontend",
            "API Integration",
        ],
        highlights: [
            "Backend flow development for chatbot",
            "API integration (internal and external)",
            "Visual interface improvements",
            "Full Stack development",
        ],
    },
} as const;

export type ExperienceKey = keyof typeof experience;
