"use client";

import IProject from "@/interface/IProject";
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({
  title,
  desc,
  codeLink,
}: IProject) {
  return (
    <div className="border flex flex-col justify-between border-black rounded-lg p-4 min-h-[150px] h-[200px]  bg-white text-black shadow-sm ">
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 text-[#00000060]">{desc}</p>
      </div>
      <div className="flex gap-2">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 flex flex-1 justify-center items-center gap-1 rounded-[7px] border  bg-black text-white transition"
        >
          <FaGithub /> <span>Github</span>
        </a>
      </div>
    </div>
  );
}
