import { Badge } from "../ui/badge";

type Tags = "Javascript" | "Typescript";

interface ProjectProps {
    title: string;
    thumbnail: string;
    description: string;
    tags: Tags[];
}

const Project = ({ title, thumbnail, description, tags }: ProjectProps) => {
    console.log(tags)
    return (
        <div className=" h-48 rounded-lg flex gap-5 text-zinc-50 p-5 mb-5">
            <div className="w-1/2">
                <img className="mt-1 border border-violet-500/20 rounded-lg" src={thumbnail} alt="" />
            </div>
            <div className="">
                <h1 className="font-bold">{title}</h1>
                <h2 className="mt-2 text-zinc-400">{description}</h2>
                <div className="mt-5 flex gap-3">
                    {tags.map((tag) => (
                        <Badge variant="default" className="">{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Project;