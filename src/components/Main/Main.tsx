import { Github, Linkedin } from 'lucide-react'

import { Button } from '../ui/button';
import './Main.css';
const Main = () => {
    return (
        <main>
            <div>
                <p className='text-zinc-400 text-xl mb-3 ml-1'>I'm</p>
                <h1 className='text-zinc-100 text-8xl mb-3'>Natã Pedro.</h1>
                <h2 className='ml-2 text-zinc-200'>A full stack developer with solid experience in Java and React. Currently, I work at <span>Plusoft</span>. I focus on creating robust and intuitive solutions for our projects. My expertise lies in development both on the front-end and back-end. I'm committed to building efficient and scalable systems that deliver a superior experience to end user</h2>

                <div className='flex items-center mt-8 ml-2 gap-3'>
                    <Button variant={"outline"} className='px-10 py-5'>Resume</Button>
                    <Button className="px-2 py-5" variant={'ghost'}><Github /></Button>
                    <Button className="px-2 py-5" variant={'ghost'}><Linkedin /></Button>

                </div>
            </div>

        </main>
    )
}
export default Main;