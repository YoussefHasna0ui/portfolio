"use client";
import { ProjectType } from "@/lib/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  MotionValue,
} from "framer-motion"; // Added MotionValue import
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { GithubIcon, Link2 } from "lucide-react";

export default function ProjectCard({ project }: { project: ProjectType }) {
  // Declare mouseX and mouseY with const instead of let
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Updated onMouseMove to have proper typing
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
          <div className="my-4 flex justify-between items-center w-full">
            <Image
              src={project.icon}
              width={project.icon === "./sumz.svg" ? 100 : 40}
              height={project.icon === "./sumz.svg" ? 100 : 40}
              alt="icon"
            />
            <Badge className="rounded-full dark:bg-green-200 bg-indigo-400">
              {project.type === "FS"
                ? "Full stack"
                : project.type === "FE"
                ? "Front-end"
                : "Back-end"}
            </Badge>
          </div>
          <>
            <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {project.name}
            </h4>
            <p className="leading-6 pt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              {project.shortDescription}
            </p>
            <div className="pt-4 flex md:flex-row flex-wrap">
              {project.tags?.map((tag, idx) => (
                <p
                  key={idx}
                  className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs font-medium italic bg-gray-50 mr-2 px-1`}
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center w-full mt-2">
              {project.link && (
                <Link href={project.link} target="_blank">
                  <Badge className="rounded-full gap-1 flex">
                    Live
                    <Link2 className="h-3 w-3" />
                  </Badge>
                </Link>
              )}
              <Link href={project.source_code_link} target="_blank">
                <Badge className="rounded-full gap-1 flex">
                  <GithubIcon className="w-3 h-3" />
                  Source
                </Badge>
              </Link>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

// Updated HoverPattern component with correct typing for motion values
function HoverPattern({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
