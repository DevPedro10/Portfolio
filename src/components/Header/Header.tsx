import './Header.scss'
import tw from "tailwind-styled-components";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Mail, MailOpen } from 'lucide-react';
import { useState } from 'react';

const Container = tw.header`text-zinc-300 flex w-9/12 h-28 items-center justify-between mx-auto`;
const AvatarContainer = tw.div`flex items-center gap-4`;
const NameAvatar = tw.h1`text-xl font-semibold text-[#27496D]`;
const NavBar = tw.nav``;
const List = tw.ul``;
const ListItem = tw.li``;
const Ancor = tw.a`customLink`;

interface HeaderProps {
    noPhoto?: boolean;
}

const Header = ({ noPhoto }: HeaderProps) => {
    const [hover, setHover] = useState(false);

    return (
        <Container>
            <AvatarContainer>
                {!noPhoto && (
                    <Avatar>
                        <AvatarImage src="https://github.com/DevPedro10.png" alt="Natã Profile" />
                    </Avatar>
                )}
                <NameAvatar>Natã Pedro</NameAvatar>
            </AvatarContainer>
            <NavBar>
                <List>
                    {/* <Link to="/experience">Experience</Link> */}

                    <ListItem>
                        <Ancor className='customLink' href="/">Home</Ancor>
                    </ListItem>
                    <ListItem>
                        <Ancor className='customLink' href="/projects">Projects</Ancor>
                    </ListItem>
                    <ListItem>
                        <Ancor className='customLink' href="/articles">Articles</Ancor>
                    </ListItem>
                    <ListItem>
                        <Ancor className='customLink' href="/about">About me</Ancor>
                    </ListItem>
                </List>
            </NavBar>

            <List>
                <ListItem className=''>
                    <a href="#" className="customLink" id="sayHi"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {hover ? <MailOpen /> : <Mail />} Say Hi</a>
                </ListItem>
            </List>
        </Container>
    )
}
export default Header;