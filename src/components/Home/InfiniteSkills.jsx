

// import React from "react";
// import { InfiniteMovingCards } from "../ui/InfiniteCards";
// import { SiPython, SiJavascript, SiMongodb, SiAngular, SiGit, SiTailwindcss, SiJupyter, SiIntellijidea } from "react-icons/si";
// import { FaReact, FaJava, FaNodeJs, FaHtml5, FaMicrosoft } from "react-icons/fa";
// import { SiPostman } from "react-icons/si";

// function InfiniteSkills() {
//   const skills = [
//     {
//       quote: "Programming Languages",
//       name: "",
//       title: (
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
//           <div className="flex flex-col items-center">
//             <SiPython className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />
//             <span className="text-xs sm:text-sm md:text-base text-white">Python</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <SiJavascript className="text-3xl sm:text-4xl md:text-5xl text-yellow-500" />
//             <span className="text-xs sm:text-sm md:text-base text-white">JavaScript</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaJava className="text-3xl sm:text-4xl md:text-5xl text-red-600" />
//             <span className="text-xs sm:text-sm md:text-base text-white">Java</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <SiJupyter className="text-3xl sm:text-4xl md:text-5xl text-red-500" />
//             <span className="text-xs sm:text-sm md:text-base text-white">Jupyter</span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       quote: "Other Tools",
//       name: "",
//       title: (
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
//           <div className="flex flex-col items-center">
//             <FaMicrosoft className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />
//             <span className="text-xs sm:text-sm md:text-base text-white">Microsoft</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <SiPostman className="text-3xl sm:text-4xl md:text-5xl text-orange-500" />
//             <span className="text-xs sm:text-sm md:text-base text-white">Postman</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <SiIntellijidea className="text-3xl sm:text-4xl md:text-5xl text-purple-600" />
//             <span className="text-xs sm:text-sm md:text-base text-white">IntelliJ IDEA</span>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-auto sm:h-[30rem] flex flex-col bg-black justify-center relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-8">
//       {/* ✅ Responsive Heading */}

      
//       {/* ✅ Responsive Infinite Cards */}
//       <InfiniteMovingCards items={skills} direction="right" speed="slow" />
//       <InfiniteMovingCards items={skills} direction="left" speed="slow" />
      
//     </div>
//   );
// }

// export default InfiniteSkills;

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteCards";
import { 
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiMysql, SiMongodb, 
  SiRedis, SiReact, SiRedux, SiNextdotjs, SiAngular, SiTailwindcss, 
  SiBootstrap, SiJquery, SiSpringboot, SiSpring, SiNodedotjs, 
  SiExpress, SiHugo, SiMocha, SiKubernetes, SiDocker, SiAmazonwebservices, 
  SiFirebase, SiJenkins, SiGithubactions, 
  SiIntellijidea, SiEclipseide, SiPostman, SiJupyter, SiJira, SiGithub, 
  SiApachekafka, SiCplusplus, SiC } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

function InfiniteSkills() {
  const skills = [
    {
      quote: "Programming Languages",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <FaJava className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-600" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiC className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">C</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">C++</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Web Development",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <SiReact className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedux className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Redux</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAngular className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Angular</span>
          </div>
          <div className="flex flex-col items-center">
            <SiBootstrap className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">TailwindCSS</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Backend & Frameworks",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <SiSpringboot className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSpring className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Spring MVC</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNodedotjs className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiHugo className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">HUGO</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMocha className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Mocha</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Databases",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">PL/SQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedis className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Redis</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Cloud & DevOps",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
          <div className="flex flex-col items-center">
            <SiKubernetes className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Kubernetes</span>
          </div>
          <div className="flex flex-col items-center">
            <SiDocker className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAmazonwebservices className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Firebase</span>
          </div>

          <div className="flex flex-col items-center">
            <SiJenkins className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Jenkins</span>
          </div>
        </div>
      ),
    },
    {
      quote: "Developer Tools",
      name: "",
      title: (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">

          <div className="flex flex-col items-center">
            <SiIntellijidea className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">IntelliJ</span>
          </div>
          <div className="flex flex-col items-center">
            <SiEclipseide className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Eclipse</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostman className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Postman</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-500" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">Jupyter</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">GitHub</span>
          </div>
        </div>
      ),
    }
  ];
  
  return (
    <div className="h-auto sm:h-[30rem] flex flex-col bg-black justify-center relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-8">
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      <InfiniteMovingCards items={skills} direction="left" speed="slow" />
    </div>
  );
}

export default InfiniteSkills;