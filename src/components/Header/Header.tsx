// import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";



const Header = () => {
    return (
        <header className=" text-zinc-300 flex h-16 w-3/5 items-center justify-between mx-auto mt-10">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://github.com/DevPedro10.png" alt="Natã Profile" />
                </Avatar>
                <h1 className="text-xl font-semibold">Natã Pedro</h1>
            </div>
            <nav>
                <ul className="flex gap-6 items-center text-xl ">
                    <Link to="/work">Work</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/about">About me</Link>
                    {/* <ModeToggle /> */}
                </ul>
            </nav>

            <Button className="text-zinc-50 hover:text-zinc-300" variant={"outline"}>Say Hi</Button>
        </header>
    )
}
export default Header;