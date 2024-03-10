import tw from "tailwind-styled-components";
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

const Container = tw.div`items-center rounded-lg max-w-max mx-auto transition duration-150 ease-in-out hover:shadow-sm hover:border-zinc-100 flex gap-5 text-zinc-50 p-5 mb-5 hover:bg-violet-400/5`;
const Figure = tw.figure`mt-1 rounded-lg min-w-[20rem] max-w-[28rem]`;
const Image = tw.img`rounded-lg blur-[1px] hover:blur-none`;
const ProjectInfo = tw.div`mt-3 max-w-min relative`;
const Keyword = tw.p`ml-3 uppercase text-violet-900 text-sm font-bold`;
const Title = tw.h1`ml-3 mt-3 text-xl`;
const Description = tw.h2`mt-2 text-zinc-400 rounded-md p-3 w-[26rem] right-20`;
const TagsContainer = tw.div`flex items-center mt-5 justify-between`;
const LinksContainer = tw.div`flex gap-3 ml-3`;
const ButtonsContainer = tw.div``;

const ProjectCard = ({ title, thumbnail, description, tags, keyWord, liveDemoLink, repositoryLink }: ProjectProps) => {
    return (
        <Container>
            <Figure>
                <Image src={thumbnail} alt="" />
            </Figure>
            <ProjectInfo>
                <Keyword>{keyWord}</Keyword>
                <Title >{title}</Title>
                <Description>{description}</Description>
                <TagsContainer>
                    <LinksContainer>
                        {tags.map((tag) => (
                            <Badge variant="default" className="text-sm">{tag}</Badge>
                        ))}
                    </LinksContainer>
                    <ButtonsContainer>
                        <Button variant={"link"}>
                            <a href={repositoryLink} target="_blank" rel="noopener noreferrer"><Github className="text-zinc-400" /></a>
                        </Button>
                        <Button variant={"link"}>
                            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer"><ExternalLink className="text-zinc-400" /></a>
                        </Button>
                    </ButtonsContainer>
                </TagsContainer>
            </ProjectInfo>
        </Container>
    )

}

export default ProjectCard;