import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Tags = "Javascript" | "Typescript";

interface ProjectProps {
    thumbnail: string;
    keyWord?: string;
    title: string;
    description: string;
    tags: Tags[];
    repositoryLink?: string; // Opcional enquanto estiver desenvolvendo.
    liveDemoLink?: string; // Opcional enquanto estiver desenvolvendo.
}

const ProjectCard = ({ title, thumbnail, description, tags, keyWord, liveDemoLink, repositoryLink }: ProjectProps) => {
    console.log(tags)
    return (
        <div className="items-center rounded-lg max-w-max mx-auto transition duration-150 ease-in-out hover:shadow-sm hover:border-zinc-100 flex gap-5 text-zinc-50 p-5 mb-5 hover:bg-violet-400/5 md::flex-col">
            <figure className="mt-1  rounded-lg min-w-[20rem] max-w-[28rem]">
                <img className="rounded-lg blur-[1px] hover:blur-none" src={thumbnail} alt="" />
            </figure>
            <div>
            <div className="mt-3 max-w-min relative">
                <p className="ml-3 uppercase text-violet-900 text-sm font-bold">{keyWord}</p>
                <h1 className="ml-3 mt-3 text-xl">{title}</h1>
                <h2 className="mt-2 text-zinc-400 rounded-md p-3 w-[26rem] right-20 ">{description}</h2>
                <div className="flex items-center mt-5 justify-between">
                    <div className="flex gap-3 ml-3">
                        {tags.map((tag) => (
                            <Badge variant="default" className="text-sm">{tag}</Badge>
                        ))}
                    </div>
                    <div className="">
                        <Button variant={"link"}>
                            <a href={repositoryLink} target="_blank" rel="noopener noreferrer"><Github className="text-zinc-400" /></a>
                        </Button>
                        <Button variant={"link"}>
                            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer"><ExternalLink className="text-zinc-400" /></a>
                        </Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default ProjectCard;