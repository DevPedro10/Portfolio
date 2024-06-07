import tw from "tailwind-styled-components";
import './ProjectCard.scss';
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

const Container = tw.div`w-92 transition duration-150 ease-in-out hover:shadow-sm`;
const Figure = tw.figure`w-92`;
const Image = tw.img`w-max`;
const ProjectInfo = tw.div`p-3`;
const Title = tw.h1`text-xl text-mainOrange`;
const Description = tw.h2`mt-2`;
const Divider = tw.hr`my-3 h-[2px] bg-mainOrange`;
const TagsContainer = tw.div`flex items-center gap-3 w-max`;
const LinksContainer = tw.div`mt-3`;
const ButtonsContainer = tw.div`flex gap-3 ml-1`;
const Button = tw.button``;
const styleIcons = `text-mainBlue hover:text-secondaryBlue`

const ProjectCard = ({ title, thumbnail, description, tags, liveDemoLink, repositoryLink }: ProjectProps) => {
    return (
        <div className="">
            <div className="card border-2 hover:border-transparent">
                <div className="borderCustom"></div>
                <div className="content">
                    <Container className="basis-80">
                        <Figure>
                            <Image src={thumbnail} alt="" />
                        </Figure>
                        <ProjectInfo>
                            <Title className="font-semibold">{title}</Title>
                            <Description className="text-mainBlue">{description}</Description>
                            <Divider />
                            <TagsContainer>
                                {tags.map((tag) => (
                                    <Badge variant="default" className="text-xs font-medium bg-mainBlue/20 text-mainBlue">{tag}</Badge>
                                ))}
                            </TagsContainer>
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

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;