import { ProjectInterface } from "@/types/projects";
import cover_moveat from '@/assets/projects/moveat/moveat_cover.png';
import shipshort_cover from '@/assets/projects/shipshort/shipshort_cover.png';
import broomail_cover from '@/assets/projects/broomail/broomail_cover.png';
import portfolio_cover from '@/assets/projects/portfolio/portfolio_cover.png';


export const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "Portfólio",
    description: "Portfólio técnico pessoal que reúne minhas experiências, estudos e artigos, funcionando tanto como vitrine profissional quanto como laboratório para testar tecnologias, padrões e decisões arquiteturais em um ambiente real e versionado. O projeto evolui continuamente junto com minha experiência.",
    technologies: ["React", "Typescript", "Shadcn/UI"],
    image_url: portfolio_cover,
    github: "https://github.com/DevPedro10/Portfolio",
    // live: "https://live.example.com",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "ShipShort",
    description: "ShipShort é um encurtador de URLs simples e direto, criado com foco em rapidez, confiabilidade e controle. Permite gerar links curtos e compartilháveis de forma eficiente e gerenciável.",
    technologies: ["React", "Typescript", "Java", "Cassandra", "Redis"],
    image_url: shipshort_cover,
    github: "https://github.com/shipshort",
    // live: "https://live.example.com",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "Broomail",
    description: "Gerenciador de emails",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image_url: broomail_cover,
    github: "https://github.com/broomail",
    // live: "https://live.example.com",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Moveat",
    description: "Plataforma de treino e alimentação",
    technologies: ["Next.js", "TypeScript", "Shadcn/UI"],
    image_url: cover_moveat,
    github: "https://github.com/Moveat-Fit",
    // live: "https://live.example.com",
    isHighlighted: false,
  },
];
