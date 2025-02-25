

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteCards";
import { SiPython, SiJavascript, SiMongodb, SiAngular, SiGit, SiTailwindcss, SiJupyter, SiIntellijidea } from "react-icons/si";
import { FaReact, FaJava, FaNodeJs, FaHtml5, FaMicrosoft } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

function InfiniteSkills() {
  const skills = [
    {
      quote: "Programming Languages",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <SiPython className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />
            <span className="text-xs sm:text-sm md:text-base text-white">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-3xl sm:text-4xl md:text-5xl text-yellow-500" />
            <span className="text-xs sm:text-sm md:text-base text-white">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="text-3xl sm:text-4xl md:text-5xl text-red-600" />
            <span className="text-xs sm:text-sm md:text-base text-white">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter className="text-3xl sm:text-4xl md:text-5xl text-red-500" />
            <span className="text-xs sm:text-sm md:text-base text-white">Jupyter</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Other Tools",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <FaMicrosoft className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />
            <span className="text-xs sm:text-sm md:text-base text-white">Microsoft</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostman className="text-3xl sm:text-4xl md:text-5xl text-orange-500" />
            <span className="text-xs sm:text-sm md:text-base text-white">Postman</span>
          </div>
          <div className="flex flex-col items-center">
            <SiIntellijidea className="text-3xl sm:text-4xl md:text-5xl text-purple-600" />
            <span className="text-xs sm:text-sm md:text-base text-white">IntelliJ IDEA</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-auto sm:h-[30rem] flex flex-col bg-black justify-center relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-8">
      {/* ✅ Responsive Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left mb-4 sm:mb-6">
        Technical Skills
      </h2>
      
      {/* ✅ Responsive Infinite Cards */}
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      <InfiniteMovingCards items={skills} direction="left" speed="slow" />
    </div>
  );
}

export default InfiniteSkills;
