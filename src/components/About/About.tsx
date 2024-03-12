import tw from "tailwind-styled-components";
import Header from "../Header/Header";


const MainSection = tw.section``;
const Figure = tw.figure``;
const Image = tw.img``;
const ContainerTexts = tw.div``;
const Title = tw.h1``;
const Resume = tw.div``;
const LineSpan = tw.span`leading-8 mt-10 block`;

const About = () => {
    return (
        <>
            <Header noPhoto={true} />
            <MainSection className="mt-20 w-2/3 mx-auto h-[50vh]">
                <div className="flex gap-5 items-center justify-center h-full">
                    <Figure className="rounded-md ">
                        <Image src="https://github.com/DevPedro10.png" className="rounded-md w-3/4" />
                    </Figure>
                    <ContainerTexts className="text-zinc-50 w-1/2">
                        <Title className="font-leo text-3xl  leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quod.</Title>
                        <Resume className="text-zinc-300 text-xl mt-10">
                            <LineSpan>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit. Dicta pariatur molestias necessitatibus id iste ullam.</LineSpan>
                            <LineSpan>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, nihil ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.</LineSpan>
                            <LineSpan>Lorem ipsum dolor sit amet consectetur adipisicing elit.</LineSpan>
                        </Resume>
                    </ContainerTexts>
                </div>
            </MainSection>
        </>
    )
}
export default About;