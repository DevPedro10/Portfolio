import { navigation } from "./navigation";
import { home } from "./home";
import { about } from "./about";
import { experienceSection, experience } from "./experience";
import { skills } from "./skills";
import { projects } from "./projects";
import { contact } from "./contact";
import { footer } from "./footer";
import { practicalTests } from "./practicalTests";

export const pt = {
    nav: navigation,
    hero: home,
    about,
    experience: { ...experienceSection, experiences: experience },
    skills,
    projects,
    contact,
    footer,
    practicalTests,
} as const;
