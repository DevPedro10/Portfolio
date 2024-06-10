import tw from "tailwind-styled-components";
import ProjectCard from "./ProjectCard";

interface ProjectsProps { };


const Container = tw.section`h-screen`
const Wrapper = tw.div`w-full  mx-auto pt-20`
const TextDiv = tw.div`md:px-0`;
const Title = tw.h1`text-3xl mb-3 ml-1 font-bold text-mainOrange`;
const SubTitle = tw.h2`text-zinc-100 text-5xl w-1/2 mb-3 font-leo font-semibold text-mainBlue`;

const Projects = ({ }: ProjectsProps) => {
    return (
        <>
            <Container className="">
                <Wrapper className="md:w-9/12">
                    <TextDiv className="my-12">
                        <Title>PROJECTS</Title>
                        <SubTitle className="">Here are some of the projects i've worked on</SubTitle>
                    </TextDiv>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <ProjectCard
                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                            title="Lorem ipsum dolor"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                            tags={["Typescript", "Javascript"]}
                            repositoryLink="https://www.google.com"
                            liveDemoLink="https://www.google.com"
                        />
                        <ProjectCard
                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                            title="Lorem ipsum dolor"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                            tags={["Typescript", "Javascript"]}
                            repositoryLink="https://www.google.com"
                            liveDemoLink="https://www.google.com"
                        />

                        <ProjectCard
                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                            title="Lorem ipsum dolor"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                            tags={["Typescript", "Javascript"]}
                            repositoryLink="https://www.google.com"
                            liveDemoLink="https://www.google.com"
                        />
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
export default Projects;