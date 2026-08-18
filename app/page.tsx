"use client";
import { Truculenta, Fredericka_the_Great } from 'next/font/google'
import { useState, useEffect } from "react";

const fredericka = Fredericka_the_Great({
    weight: '400',
    subsets: ['latin'],
})

const truculenta = Truculenta({
    weight: '400',
    subsets: ['latin'],
})

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        }
    }, []);

    if (isMobile) {
        return (
        <div className="flex items-center justify-center bg-[#fff0db] min-h-screen overflow-hidden p-12">
            <p className="text-lg text-[#68875B]">
                This site is only accessible on a computer. Please visit on a desktop device.
            </p>
        </div>
        );
    }

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
            
                <h1 className={fredericka.className + " text-9xl text-[#68875B]"}>
                    PAIGE JACOBSEN
                </h1>
                
                <p className={truculenta.className + " text-2xl text-[#68875B] mt-8"}>
                    Fourth Year at the <a href="https://www.uchicago.edu/" target="_blank" rel="noopener noreferrer" className="underline text-[#68875B]">University of Chicago</a>
                </p>

                <p className={truculenta.className + " text-xl text-[#68875B] mt-4"}>
                    Computer Science Major, Media Arts and Design Minor
                </p>

                <div className="flex flex-row gap-6 mt-6">
                    <a href="https://www.linkedin.com/in/paigejacobsen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#68875B" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2 3.597 4.59v5.606z"/></svg>
                    </a>
                    <a href="mailto:pjacobsen@uchicago.edu" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#68875B" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.99c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.99c-1.104 0-2 .896-2 2v.217l11.99 7.065 11.99-7.065v-.217z"/></svg>
                    </a>
                </div>

            </main>
        </div>
    )
}
