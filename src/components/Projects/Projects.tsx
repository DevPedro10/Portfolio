import tw from "tailwind-styled-components";
import ProjectCard from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const MainSection = tw.section`w-full md:w-3/5 mx-auto h-screen`
const TextDiv = tw.div`md:px-0`;
const Title = tw.h1`text-violet-500 text-1xl font-bold mt-5`;
const SubTitle = tw.h2`w-fit md:w-1/2 mt-4 text-4xl font-leo text-zinc-400 font-semibold`;

const Projects = () => {
    return (
        <>
            <MainSection className="my-32">
                <TextDiv className="my-12">
                    <Title>PROJECTS</Title>
                    <SubTitle className="">Here are some of the projects i've worked on</SubTitle>
                </TextDiv>
                <div className="shrink grow flex-wrap">
                    <Carousel className="w-full max-w-6xl">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">

                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">

                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">

                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">

                                        <ProjectCard
                                            thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                                            title="Lorem ipsum dolor"
                                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                                            tags={["Typescript", "Javascript"]}
                                            repositoryLink="https://www.google.com"
                                            liveDemoLink="https://www.google.com"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </MainSection>
        </>
    )
}
export default Projects;