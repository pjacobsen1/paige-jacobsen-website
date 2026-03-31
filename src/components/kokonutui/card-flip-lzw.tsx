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

export default function CardFlipLZW({
  title = "LZW File Compressor",
  description = "The LZW File Compressor is a C-based implementation of the Lempel-Ziv-Welch (LZW) lossless compression algorithm, enabling efficient and reliable file compression and decompression of various file types. It supports robust file I/O operations and handles complex edge cases, including recursive decoding and unknown codes, ensuring accurate restoration of the original data. This project demonstrates expertise in compression theory, memory management, and fault-tolerant systems-level programming.",
  details = [
    "Implemented Lempel-Ziv-Welch (LZW) lossless compression and decompression in C, enabling efficient file encoding and decoding.",
    "Handled robust file I/O and edge cases, including recursive decoding and unknown codes, to ensure accurate data restoration.",
    "Applied memory management techniques and fault-tolerant programming to create a reliable, error-resistant compression system."
  ],
  tools = ["C"],
  dates = "October 2024 – November 2024",
  link,
  accentColor = "#f6ccccff",
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
