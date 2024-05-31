import tw from "tailwind-styled-components";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
type Tags = "Javascript" | "Typescript";

interface ProjectProps {
    thumbnail: string;
    title: string;
    description: string;
    tags: Tags[];
    repositoryLink?: string; // Opcional enquanto estiver desenvolvendo.
    liveDemoLink?: string; // Opcional enquanto estiver desenvolvendo.
}

const Container = tw.div`rounded-lg w-80 transition duration-150 ease-in-out hover:shadow-sm hover:border-zinc-100 text-zinc-50 mb-5`;
const Figure = tw.figure`rounded-lg w-80`;
const Image = tw.img`rounded-t-lg w-max`;
const ProjectInfo = tw.div`mt-3 p-3`;
const Title = tw.h1` mt-3 text-xl`;
const Description = tw.h2`mt-2 text-zinc-400 rounded-md w-[26rem] right-20 w-full`;
const TagsContainer = tw.div`flex items-center gap-3 w-max`;
const LinksContainer = tw.div`mt-3`;
const ButtonsContainer = tw.div`flex gap-3`;
const Button = tw.button``;
const styleIcons = `text-zinc-400 hover:text-violet-500`

const ProjectCard = ({ title, thumbnail, description, tags, liveDemoLink, repositoryLink }: ProjectProps) => {
    return (
        <Container className="basis-80 hover:hover:translate-y-[-10px] hover:bg-zinc-950/15 ease-in-out duration-300 hover:shadow-xl">
            <Figure>
                <Image src={thumbnail} alt=""/>
            </Figure>
            <ProjectInfo>
                <TagsContainer>
                    {tags.map((tag) => (
                        <Badge variant="default" className="text-xs font-medium">{tag}</Badge>
                    ))}
                </TagsContainer>
                <Title >{title}</Title>
                <Description>{description}</Description>

                <LinksContainer>
                    <ButtonsContainer>
                        <Button>
                            <a href={repositoryLink} target="_blank" rel="noopener noreferrer"><Github className={styleIcons} /></a>
                        </Button>
                        <Button>
                            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer"><ExternalLink className={styleIcons} /></a>
                        </Button>
                    </ButtonsContainer>
                </LinksContainer>

            </ProjectInfo>
        </Container>
    )

}

export default ProjectCard;