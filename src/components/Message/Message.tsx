import tw from "tailwind-styled-components";
import { MessageCircle } from 'lucide-react';

const Container = tw.div``;

const Message = () => {
    return (
        <Container className="rounded-full bg-zinc-50 p-10">
            <MessageCircle className="text-violet-500"/>
        </Container>
    );
};

export default Message;