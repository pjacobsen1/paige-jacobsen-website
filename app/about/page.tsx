"use client";

import { Truculenta, Fredericka_the_Great, Keania_One } from 'next/font/google'
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../../components/draggable-card";
import { IconCloud } from "../../components/magicui/icon-cloud";
import { WordRotate } from "@/components/magicui/word-rotate";

const fredericka = Fredericka_the_Great({
  weight: '400',
  subsets: ['latin'],
})

const truculenta = Truculenta({
  weight: '400',
  subsets: ['latin'],
})

const keania = Keania_One({
  weight: '400',
  subsets: ['latin'],
})

const items = [
    {
      title: "Minor: Media Arts and Design",
      image:
        "/mad.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Major: Computer Science",
      image:
        "/cs.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Computer Science Instructional Laboratory",
      image:
        "/csil.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "University of Chicago",
      image:
        "/uchicago.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Chicago, IL",
      image:
        "/chicago.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Paige Jacobsen",
      image:
        "/profile.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

const slugs = [
  "python",
  "c",
  "mysql",
  "javascript",
  "typescript",
  "html5",
  "tailwindcss",
  "css",
  "nextdotjs",
  "vue.js",
  "arduino",
  "git",
  "googlecloud",
  "vim",
  "linux",
  "figma",
];

export default function About() {

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/68875B`,
    );

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
            
            <main className="bg-[#fff0db] min-h-screen flex flex-row items-center justify-center p-12 gap-16 h-screen overflow-hidden">
                
                {/* left */}
                <div className="flex flex-col items-start justify-center min-w-[400px] max-w-[500px] h-full pl-10">
                    <h1 className={fredericka.className + " text-8xl text-[#68875B] mb-10"}>
                        PAIGE JACOBSEN
                    </h1>
                    <p
                        className={truculenta.className + " text-lg text-[#68875B]"}
                    >
                        I’m a computer science student at the University of Chicago with a passion for building 
                        at the intersection of design and technology. My experience spans frontend development—where 
                        I enjoy creating responsive, user-friendly interfaces to full-stack projects and even systems-level
                        course work. I’m driven by curiosity and creativity, whether that’s designing digital experiences,
                        experimenting with AI-powered tools, or tackling research challenges in unexpected spaces. 
                        This site highlights the projects I’ve built, the skills I’m growing, and the ways I’m exploring 
                        how technology can be both functional and inspiring.
                    </p>
                    <img
                        src="/vine.png"
                        alt="Paige Jacobsen profile"
                        className="mt-10"
                    />
                    
                </div>
                
                {/* right */}
                <div className="flex-1 flex items-center justify-center mr-10" style={{ position: 'relative' }}>
                    <DraggableCardContainer className="relative z-50 flex min-h-[600px] w-[600px] items-center justify-center overflow-visible">
                        {items.map((item, idx) => (
                            <DraggableCardBody key={item.title + idx} className={item.className + ' z-50 bg-[#FFFAF5] dark:bg-[#FFFAF5]'}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="pointer-events-none relative z-50 h-80 w-80 object-cover"
                                />
                                <h3 className={truculenta.className + " mt-4 text-center text-2xl font-bold text-[#68875B] dark:text-[#68875B]"}>
                                    {item.title}
                                </h3>
                            </DraggableCardBody>
                        ))}
                    </DraggableCardContainer>
                </div>

            </main>

            {/* skills */}
            <section className="w-full bg-[#eae3c9] flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full ">
                    
                    <div className="flex flex-col justify-center h-full items-center">
                        <h3 className={fredericka.className + " text-4xl text-[#68875B] font-bold mb-4"}>
                            Skills
                        </h3>
                    </div>

                    <div className="flex flex-col justify-center h-full">
                        <p className={truculenta.className + " text-2xl text-[#68875B] font-bold"}>
                            <span className="font-extrabold">
                                Languages:
                            </span>
                        </p>
                        <p className={truculenta.className + " text-xl text-[#68875B]"}>
                            Java, Python, C, SQL, JavaScript, HTML, Tailwind CSS
                        </p>
                        <p className={truculenta.className + " text-2xl text-[#68875B] font-bold"}>
                            <span className="font-extrabold">
                                Frameworks & Platforms:
                            </span>
                        </p>
                        <p className={truculenta.className + " text-xl text-[#68875B]"}>
                            Next.js, Vue.js, Arduino, TinyML
                        </p>
                        <p className={truculenta.className + " text-2xl text-[#68875B] font-bold"}>
                            <span className="font-extrabold">
                                Tools & Technologies: 
                            </span>
                        </p>
                        <p className={truculenta.className + " text-xl text-[#68875B]"}>
                            Git, Google Cloud Platform, VS Code, Vim, Linux, Figma, Data Scraping
                        </p>
                    </div>

                    <div className="-mt-10">
                        <div className="flex items-center justify-center overflow-hidden -mb-8">
                            <IconCloud images={images} />
                        </div>
                    </div>

                </div>
            </section>

            {/* line */}
            <section className="w-full bg-[#fff0db] pb-1 flex flex-col items-center justify-center">
            </section>

            {/* courses */}
            <section className="w-full bg-[#eae3c9] flex flex-col items-center justify-center py-9 h-80">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full ">

                    <div className="flex flex-col justify-center h-full items-center">
                        <div 
                            className="inline-block transition-all duration-[6000ms] ease-in-out border-2 border-[#68875B] p-4 rounded"
                        >
                            <WordRotate
                            words={["Engineering Interactive Devices", "Software Development", "Computer Security"]}
                            duration={1500}
                            className={keania.className + " text-2xl text-[#68875B]"}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center h-full items-center">
                        <p className={truculenta.className + " text-2xl text-[#68875B]"}>
                            Engineering Interactive Devices, Software Development, Computer Security
                        </p>
                    </div>

                     <div className="flex flex-col justify-center h-full items-center">
                        <h3 className={fredericka.className + " text-4xl text-[#68875B] font-bold mb-4"}>
                            Relevant Coursework
                        </h3>
                    </div>
                    
                </div>
            </section>

            {/* contact */}
            <section className="w-full bg-[#fff0db] py-7 flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center h-full items-center">
                    <div className="flex flex-row gap-6 ">
                        <a href="https://github.com/pjacobsen1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#68875B" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/paigejacobsen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#68875B" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2 3.597 4.59v5.606z"/></svg>
                        </a>
                        <a href="mailto:pjacobsen@uchicago.edu" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#68875B" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.99c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.99c-1.104 0-2 .896-2 2v.217l11.99 7.065 11.99-7.065v-.217z"/></svg>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}
