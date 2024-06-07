import tw from 'tailwind-styled-components'
import { Button } from '../ui/button';
import { BookUser, Github, Linkedin, Mouse } from 'lucide-react'
import Header from '../Header/Header';

interface MainProps { };

const Container = tw.main` mx-auto`;
const HomeContainer = tw.div`mt-40`;
const Title = tw.h1`text-violet-500 text-3xl mb-3 ml-1 font-bold`;
const Subtitle = tw.h2`text-zinc-100 text-7xl mb-3 font-leo font-semibold`
const Description = tw.h3`ml-2 text-zinc-200 text-3xl font-thin mt-6`;
const SocialContainer = tw.div`flex items-center mt-8 ml-2 gap-3`;
const ResumeButton = tw(Button)`hover:text-secondaryBlue hover:border-secondaryBlue text-xl border-2 border-[#27496D] text-[#27496D] font-semibold flex items-center rounded-md px-3 h-11 transition-all duration-600 ease-in-out`;
const SocialButton = tw(Button)`px-2 py-5`;
const GithubIcon = tw(Github)`text-mainBlue hover:text-secondaryBlue`;
const LinkedinIcon = tw(Linkedin)`text-mainBlue hover:text-secondaryBlue`;
const Scroll = tw.div`mt-40 blink text-zinc-50 text-mainBlue animate-blink`;
const MouseIcon = tw(Mouse)`mx-auto w-[32px] h-[32px]`;
const MouseText = tw.p`text-center mt-2 font-bold`;
const Main = ({ }: MainProps) => {
    return (
        <div className={`h-screen bg-zinc-200`}>
            <Header />
            <Container className='w-9/12'>
                <HomeContainer>
                    <div className='w-9/12'>
                        <Title className='text-mainOrange'>HI, I'M NATÃ.</Title>
                        <Subtitle className='text-mainBlue'>Crafting web solutions.</Subtitle>
                        <Description className='text-mainBlue'>A Full Stack Developer specializing in TypeScript, React, and Java, with a focus on browser-based projects. Currently, I work at Plusoft.</Description>
                    </div>
                    <SocialContainer>
                        <ResumeButton variant={"outline"}><BookUser className='mr-2' /> Resume</ResumeButton>
                        <SocialButton variant={'link'}><GithubIcon /></SocialButton>
                        <SocialButton variant={'link'}><LinkedinIcon /></SocialButton>
                    </SocialContainer>
                </HomeContainer>
                <Scroll>
                    <MouseIcon />
                    <MouseText>Scroll</MouseText>
                </Scroll>
            </Container>
        </div>
    )
}
export default Main;