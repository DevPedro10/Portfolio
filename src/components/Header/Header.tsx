import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className=" flex h-16 w-3/4 items-center justify-between m-auto">
            <div className="logo text-2xl">Natã</div>
            <nav>
                <ul className="flex gap-4 items-center ">
                    <li><Button variant={"ghost"}>Work</Button></li>
                    <li><Button variant={"ghost"}>Projects</Button></li>
                    <li><Button variant={"ghost"}>About me</Button></li>
                    <li><Button variant={"outline"}>Say Hi</Button></li>
                    <ModeToggle />
                </ul>
            </nav>
        </header>
    )
}
export default Header;