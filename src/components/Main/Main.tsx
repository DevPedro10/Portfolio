import tw from 'tailwind-styled-components'
import { Button } from '../ui/button';
import { Github, Linkedin, Mouse } from 'lucide-react'

const Container = tw.main`w-3/5 mx-auto mt-40`;
const HomeContainer = tw.div``;
const Title = tw.h1`text-violet-500 text-xl mb-3 ml-1 font-bold`;
const Subtitle = tw.h2`text-zinc-100 text-7xl mb-3 font-leo font-semibold`
const Description = tw.h3`ml-2 text-zinc-200 text-3xl font-thin mt-6`;
const SocialContainer = tw.div`flex items-center mt-8 ml-2 gap-3`;
const ResumeButton = tw(Button)`px-2 py-5 px-5 py-5`;
const SocialButton = tw(Button)`px-2 py-5`;
const GithubButton = tw(Github)`text-violet-500`;
const LinkedinButton = tw(Linkedin)`text-violet-500`;
const Scroll = tw.div`mt-40 blink text-zinc-50 animate-blink`;
const MouseIcon = tw(Mouse)`mx-auto w-[32px] h-[32px]`;
const MouseText = tw.p`text-center mt-2 font-bold`;
const Main = () => {
    return (
        <Container>
            <HomeContainer>
                <Title>HI, I'M NATÃ.</Title>
                <Subtitle>Crafting web solutions.</Subtitle>
                <Description>A Full Stack Developer specializing in TypeScript, React, and Java, with a focus on browser-based projects. Currently, I work at Plusoft.</Description>
                <SocialContainer>
                    <ResumeButton variant={"outline"}>Resume</ResumeButton>
                    <SocialButton variant={'link'}><GithubButton /></SocialButton>
                    <SocialButton variant={'link'}><LinkedinButton /></SocialButton>
                </SocialContainer>
            </HomeContainer>
            <Scroll>
                <MouseIcon />
                <MouseText>Scroll</MouseText>
            </Scroll>
        </Container>
    )
}
export default Main;