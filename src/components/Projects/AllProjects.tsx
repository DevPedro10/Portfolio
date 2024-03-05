import Project from "./Project";

const AllProjects = () => {

    return (
        <div className="flex w-3/5 mx-auto mt-20 ">
            <section className="text-zinc-50 w-3/5 fixed">
                <h1 className="text-5xl font-leo font-semibold">Projects</h1>
                <h2 className="text-violet-500 text-1xl mb-3 ml-1 font-bold mt-1">HERE ARE SOME OF THE PROJECTS I'VE WORKED ON</h2>
                <p className="mt-7 w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos aperiam cum consequuntur amet aliquam fuga perferendis ipsa voluptatum, quibusdam, rem dolorem? Sequi, rerum harum. Nemo.</p>

            </section>
            <span className="no-use w-3/5"></span>
            <section className="w-3/5">
                <Project
                    thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                    title="Projeto 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                    tags={["Typescript", "Javascript"]} />
                <Project
                    thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                    title="Projeto 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                    tags={["Typescript", "Javascript"]} />
                <Project
                    thumbnail="https://i.pinimg.com/originals/2d/73/5d/2d735d98fe75dcd5ff7c21dd92860bf7.jpg"
                    title="Projeto 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis, libero id placeat eos Lorem ipsum dolor sit amet"
                    tags={["Typescript", "Javascript"]} />




            </section>
        </div>
    )
}

export default AllProjects;