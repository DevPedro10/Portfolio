import tw from "tailwind-styled-components";
import ProjectCard from "./ProjectCard";

const MainSection = tw.section`w-full md:w-3/5 mx-auto`
const TextDiv = tw.div`px-14 md:px-0 my-20`;
const Title = tw.h1`text-violet-500 text-1xl font-bold mt-5`;
const SubTitle = tw.h2`w-fit md:w-1/2 mt-4 text-4xl font-leo text-zinc-400 font-semibold`;

const Projects = () => {
    return (
        <>
            <MainSection>
                <TextDiv>
                    <Title>PROJECTS</Title>
                    <SubTitle className="">Here are some of the projects i've worked on</SubTitle>
                </TextDiv>
                <div className="flex justify-center shrink grow flex-wrap gap-8">
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
                    <ProjectCard
                        thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                        tags={["Typescript", "Javascript"]}
                        repositoryLink="https://www.google.com"
                        liveDemoLink="https://www.google.com"
                    />
                </div>
            </MainSection>
        </>
    )
}
export default Projects;