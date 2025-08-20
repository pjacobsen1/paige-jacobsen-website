"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";

export const DivOrigami = () => {
  return (
    <section className="flex h-72 flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={0} bgColor="bg-orange-300" textColor="text-neutral-900">
            <SiAmazon />
          </LogoItem>,
          <LogoItem key={1} bgColor="bg-green-300" textColor="text-neutral-900">
            <SiGoogle />
          </LogoItem>,
          <LogoItem key={2} bgColor="bg-blue-300" textColor="text-neutral-900">
            <SiMeta />
          </LogoItem>,
          <LogoItem key={3} bgColor="bg-white" textColor="text-black">
            <SiGithub />
          </LogoItem>,
          <LogoItem key={4} bgColor="bg-purple-300" textColor="text-neutral-900">
            <SiTwitch />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement<LogoItemProps>[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  const currentIndex = index % items.length;
  const currentItem = items[currentIndex];

  return (
    <div
      style={{ transform: "rotateY(-20deg)", transformStyle: "preserve-3d" }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl bg-[#fff0db]"
    >
      <AnimatePresence mode="sync">
        {/* Top half */}
        <motion.div
          key={currentIndex + "_top"} // key stable per card
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            backfaceVisibility: "hidden",
          }}
          transition={{ duration: TRANSITION_DURATION_IN_SECS, ease: "easeInOut" }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {currentItem}
        </motion.div>

        {/* Bottom half */}
        <motion.div
          key={currentIndex + "_bottom"} // key stable per card
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            backfaceVisibility: "hidden",
          }}
          transition={{ duration: TRANSITION_DURATION_IN_SECS, ease: "easeInOut" }}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {currentItem}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{ transform: "translateZ(1px)", borderColor: "#fff0db" }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2"
      />
    </div>
  );
};

interface LogoItemProps {
  children: React.ReactNode;
  bgColor: string;
  textColor?: string;
}

const LogoItem = ({ children, bgColor, textColor }: LogoItemProps) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg text-6xl",
        bgColor,
        textColor
      )}
    >
      {children}
    </div>
  );
};
