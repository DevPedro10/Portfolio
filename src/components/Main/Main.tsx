import { Github, Linkedin } from 'lucide-react'

import { Button } from '../ui/button';
const Main = () => {
    return (
        <main className='w-3/5 mx-auto mt-40'>
            <div>
                <p className='text-zinc-400 text-xl mb-3 ml-1 font-bold'>HI, I'M NATÃ.</p>
                <h1 className='text-zinc-100 text-7xl mb-3 font-leo font-semibold'>Crafting web solutions.</h1>
                <h2 className='ml-2 text-zinc-200 text-3xl font-thin'>A Full Stack Developer specializing in TypeScript, React, and Java, with a focus on browser-based projects. Currently, I work at Plusoft.</h2>

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