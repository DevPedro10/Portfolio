import { Github, Linkedin, Mouse } from 'lucide-react'
import './Main.scss'

import { Button } from '../ui/button';
const Main = () => {
    return (
        <main className='w-3/5 mx-auto mt-40'>
            <div>
                <p className='text-violet-500 text-xl mb-3 ml-1 font-bold'>HI, I'M NATÃ.</p>
                <h1 className='text-zinc-100 text-7xl mb-3 font-leo font-semibold'>Crafting web solutions.</h1>
                <h2 className='ml-2 text-zinc-200 text-3xl font-thin mt-6'>A Full Stack Developer specializing in TypeScript, React, and Java, with a focus on browser-based projects. Currently, I work at Plusoft.</h2>

                <div className='flex items-center mt-8 ml-2 gap-3'>
                    <Button variant={"outline"} className='px-10 py-5 text-zinc-50 hover:text-zinc-300'>Resume</Button>
                    <Button className="px-2 py-5" variant={'link'}><Github className="text-violet-500" /></Button>
                    <Button className="px-2 py-5" variant={'link'}><Linkedin className="text-violet-500" /></Button>
                </div>
            </div>

            <div className='mt-40 blink text-zinc-50'>
                <Mouse className='mx-auto ' size={32} />
                <p className='text-center mt-2 font-bold'>Scroll</p>
            </div>

            {/* <Section/> */}
        </main>
    )
}
export default Main;