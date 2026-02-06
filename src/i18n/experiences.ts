// IDs e estrutura base das experiências
export const experiencesConfig = [
    {
        id: "tokio-marine",
        company: "Tokio Marine Seguradora",
        startDate: "2023",
        endDate: "atual",
    },
] as const;

export type ExperienceId = typeof experiencesConfig[number]["id"];
