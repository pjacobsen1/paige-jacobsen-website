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

export default function CardFlipShell({
  title = "Unix Shell",
  description = "The Unix Shell is a fully functional command-line interpreter built in C, designed to mimic core behaviors of traditional Unix shells. It supports job control with foreground and background processes, robust output redirection (> and >+), accurate path resolution, and both interactive and batch input modes. With built-in commands like cd, pwd, and exit, and full support for launching external programs via fork(), execvp(), and wait(), the project demonstrates practical experience in system-level programming and process management.",
  details = [
    "Developed a command-line shell in C with support for command parsing, built-in commands (cd, pwd, exit), and both batch and interactive modes.",
    "Implemented standard and advanced output redirection using system calls such as dup2, fork(), and execvp(), including safe handling of temporary files.",
    "Managed process creation, input validation, and error reporting to reliably replicate core Unix shell behavior and support job control."
  ],
  tools = ["C"],
  dates = "December 2024",
  link,
  accentColor = "#ddecd5ff",
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
