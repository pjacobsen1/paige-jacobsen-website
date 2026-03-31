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

export default function CardFlipQLearning({
  title = "Q-Learning Robot Control",
  description = "This project used Q-learning to train a robot to make action decisions based on environmental state. The system learned policies through reward-driven updates and then executed the highest-value actions to complete tasks autonomously. It highlights experience with reinforcement learning, decision-making systems, and robotics integration, including mapping learned policies directly to real robot behaviors and handling state transitions in a dynamic environment.",
  details=[
    "Developed a Q-learning system that trained a robot to choose actions based on state and reward feedback.",
    "Implemented state-action value updates and execution logic to allow the robot to perform learned behaviors autonomously.",
    "Connected reinforcement learning outputs to ROS2 robot actions, bridging algorithm design with real robotic control."
  ],
  tools = ["ROS2, Python"],
  dates = "October 2025 – November 2025",
  link,
  accentColor = "#e2d5ecff",
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
