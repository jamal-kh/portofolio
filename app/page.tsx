"use client";

import SectionPagin from "@/components/SectionPagin";
import { useState } from "react";
import Home from "./sections/home/Home";
import sections from "@/context/sections";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
export default function App() {
  const [sectionNumber, setSectionNumber] = useState(0);


  return (
    <div className="w-[70%] h-[70vh] shadow-2xl p-[20px] rounded-[15px] ">
      <div className="border h-[100%] p-[20px] rounded-[10px]">
        <SectionPagin
          Previous={sectionNumber > 0 ? sections[sectionNumber - 1] : null}
          Next={sectionNumber < sections.length ? sections[sectionNumber + 1] : null}
          sectionName={sections[sectionNumber]}
          sectionNumber={sectionNumber}
          setSectionNumber={setSectionNumber}
        />

        <div className="flex h-[90%]">
          {sectionNumber === 0 && <Home />}
          {sectionNumber === 1 && <Projects />}
          {sectionNumber === 2 && <Skills />}
        </div>
      </div>
    </div>
  );
}
