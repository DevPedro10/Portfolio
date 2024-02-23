const Header = () => {
    return (
        <header className=" flex h-16 w-3/4 items-center justify-between m-auto">
            <div className="logo text-2xl">pdro.</div>
            <nav>
                <ul className="flex gap-8">
                    <li>Work</li>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;