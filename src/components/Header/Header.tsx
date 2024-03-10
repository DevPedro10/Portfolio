import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Container = tw.header`text-zinc-300 flex h-16 w-3/5 items-center justify-between mx-auto mt-10`;
const AvatarContainer = tw.div`flex items-center gap-4`;
const NameAvatar = tw.h1`text-xl font-semibold`;
const NavBar = tw.nav``;
const List = tw.ul`flex gap-6 items-center text-xl `;


const Header = () => {
    return (
        <Container>
            <AvatarContainer>
                <Avatar>
                    <AvatarImage src="https://github.com/DevPedro10.png" alt="Natã Profile" />
                </Avatar>
                <NameAvatar>Natã Pedro</NameAvatar>
            </AvatarContainer>
            <NavBar>
                <List className="flex gap-6 items-center text-xl ">
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/about">About me</Link>
                </List>
            </NavBar>

            <Button variant={"outline"}>Say Hi</Button>
        </Container>
    )
}
export default Header;