import tw from "tailwind-styled-components";
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard";

const MainSection = tw.section`w-3/5 mx-auto mt-2`
const TextDiv = tw.div`text-center my-20`;
const Title = tw.h1`text-5xl font-leo text-zinc-400 font-semibold`;
const SubTitle = tw.h2`text-violet-500 text-1xl font-bold mt-5`;

const AllProjects = () => {
    return (
        <>
            <Header />
            <MainSection>
                <TextDiv>
                    <Title>Projects</Title>
                    <SubTitle>HERE ARE SOME OF THE PROJECTS I'VE WORKED ON</SubTitle>
                </TextDiv>
                <div>
                    <ProjectCard
                        thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                        keyWord="Full Stack"
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                        tags={["Typescript", "Javascript"]}
                        repositoryLink="https://www.google.com"
                        liveDemoLink="https://www.google.com"
                    />
                    <ProjectCard
                        thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                        keyWord="Full Stack"
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                        tags={["Typescript", "Javascript"]}
                        repositoryLink="https://www.google.com"
                        liveDemoLink="https://www.google.com"
                    />
                    <ProjectCard
                        thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                        keyWord="Full Stack"
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
export default AllProjects;