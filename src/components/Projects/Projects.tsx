import Header from "../Header/Header";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {

    return (
        <>
            <Header />
            <section className="w-3/5 mx-auto mt-2">
            <div className="text-center my-20">
                <p className="text-5xl font-leo text-zinc-400 font-semibold">Projects</p>
                <h1 className="text-violet-500 text-1xl font-bold mt-5">HERE ARE SOME OF THE PROJECTS I'VE WORKED ON</h1>
            </div>



                <div className="">
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
            </section>
        </>
    )
}

export default AllProjects;