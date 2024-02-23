import { ModeToggle } from "../mode-toggle";

const Header = () => {
    return (
        <header className=" flex h-16 w-3/4 items-center justify-between m-auto">
            <div className="logo text-2xl">pdro.</div>
            <nav>
                <ul className="flex gap-8 items-center ">
                    <li>Work</li>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                    <ModeToggle />
                </ul>
            </nav>
        </header>
    )
}
export default Header;