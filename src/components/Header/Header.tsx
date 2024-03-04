// import { ModeToggle } from "../mode-toggle";
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
                    <li>Work</li>
                    <li>Projects</li>
                    <li>Articles</li>
                    <li>About me</li>
                    {/* <ModeToggle /> */}
                </ul>
            </nav>

            <Button className="text-zinc-50 hover:text-zinc-300" variant={"outline"}>Say Hi</Button>
        </header>
    )
}
export default Header;