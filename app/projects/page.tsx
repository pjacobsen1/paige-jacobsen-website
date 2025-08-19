import { Truculenta } from 'next/font/google'

const truculenta = Truculenta({
  weight: '400',
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <div>

        <nav className="absolute top-0 right-0 pr-8 pt-4">
            <ul className="flex flex-row gap-8">
                 <li>
                    <a href="/" className={truculenta.className + " text-xl text-[#68875B] font-bold hover:underline"}>Home</a>
                </li>
                <li>
                    <a href="/about" className={truculenta.className + " text-xl text-[#68875B] font-bold hover:underline"}>About</a>
                </li>
                <li>
                    <a href="/projects" className={truculenta.className + " text-xl text-[#68875B] font-bold hover:underline"}>Projects</a>
                </li>
                <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={truculenta.className + " text-xl text-[#68875B] font-bold hover:underline"}>Resume</a>
                </li>
            </ul>
        </nav>
        
        <main className="bg-[#fff0db] min-h-screen flex flex-col items-start justify-center p-12">
        
            <p>
                projects
            </p>

        </main>

    </div>
  );
}
