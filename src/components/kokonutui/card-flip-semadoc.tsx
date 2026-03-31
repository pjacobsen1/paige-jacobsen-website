"use client";

import { useState } from "react";

export interface CardFlipProps {
  title?: string;
  description?: string; // longer description for front
  details?: string[]; // what you actually did as bullet points
  tools?: string[];
  dates?: string;
  link?: string;
  accentColor?: string;
}

export default function CardFlipSemadoc({
  title = "SemaDoc",
  description = "SemaDoc is an AI-powered documentation tool developed for the UChicago’s Computer Science Instructional Laboratory, designed to automate and streamline documentation workflows using large language models (LLMs). It integrates with Trello for smooth project tracking and supports over 500 concurrent users with sub-100ms database response times. Widely adopted across eight CSIL teams, SemaDoc has reduced documentation processes from hours to minutes for tasks like project updates, API references, and technical specifications.",
  details = [
    "Developed a fully responsive frontend using TypeScript, Tailwind CSS, and Next.js, enhancing usability for 25 student developers.",
    "Collaborated with a 4-person team to integrate LLaMA models and Retrieval-Augmented Generation (RAG) for faster, context-aware content generation.",
    "Integrated asynchronous Trello workflows and existing APIs to streamline project tracking and documentation automation."
  ],
  tools = ["Next.js", "TypeScript", "Tailwind CSS"],
  dates = "June 2025 – Present",
  link,
  accentColor = "#d5daecff",
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[340px] h-[420px] [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        }`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl bg-[#fff9f2] border border-zinc-200 shadow-md p-6 flex flex-col [backface-visibility:hidden] transition-opacity duration-700 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Title */}
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            {title}
          </h3>

          {/* Accent bar */}
          <div
            className="w-50 h-2 rounded mb-4"
            style={{ backgroundColor: accentColor }}
          />

          {/* Project description */}
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        </div>

        {/* Back */}
        <div
            className={`absolute inset-0 w-full h-full rounded-xl border border-zinc-200 shadow-md p-6 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] transition-opacity duration-700 ${
                !isFlipped ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: accentColor }}
        >
          {/* Name */}
          <h3 className="text-2xl font-bold mb-1">
            {title}
          </h3>

          {/* Dates */}
          <p className="text-sm text-zinc-500 mb-3 ">{dates}</p>

          {/* Bullet points of what you did */}
          <ul className="list-disc list-inside text-sm mb-4 space-y-1">
            {details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Tools */}
          {tools.length > 0 && (
            <p className="text-sm">
              <strong>Tools:</strong> {tools.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
