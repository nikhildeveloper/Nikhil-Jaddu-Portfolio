

// import React from 'react';
// import { Timeline } from '../ui/Timeline';
// import { Spotlight } from '../ui/Spotlight';
// import { motion } from "framer-motion";
// import { TextGenerateEffect } from '../ui/TextGenerateEffect';
// import { LampContainer } from '../ui/LampDemo';
// import {ShootingStars } from '../ui/ShootingStars';
// import { StarsBackground } from '../ui/StarsBackground';
// import {ContainerScroll} from '../ui/ContainerScroll';

// function Home() {

//   const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;

//   const timelineData = [
//     {
//       title: "Indiana Daily Student",
//       content: {
//         role: "Web Developer",
//         description: "Designed and developed responsive web pages using React, HTML, and TailwindCSS for Indiana Daily Student.",
//         duration: "Aug 2024 - Present",
//         highlights: [
//           "Built and maintained ad blocks across multiple web pages.",
//           "Enhanced page loading speed by optimizing assets.",
//           "Collaborated with designers and editors to ensure UX consistency."
//         ]
//       }
//     },
//     {
//       title: "IUB",
//       content: {
//         role: "Teaching Assistant",
//         description: "Assisted in teaching System Programming with C and Unix.",
//         duration: "Jan 2024 - May 2024",
//         highlights: [
//           "Helped students debug complex C programs.",
//           "Graded assignments and provided constructive feedback.",
//           "Organized hands-on lab sessions on Unix tools and shell scripting."
//         ]
//       }
//     },
//     {
//       title: "Wipro",
//       content: {
//         role: "Software Engineer",
//         description: "Worked at Wipro, collaborating with FedEx on a Transportation Management System.",
//         duration: "Jun 2020 - Jul 2023",
//         highlights: [
//           "Developed APIs to streamline data retrieval.",
//           "Automated user account creation, reducing setup time by 30%.",
//           "Implemented robust security protocols for API integrations."
//         ]
//       }
//     }
//   ];

//   return(
//     <>
//         {/* <LampContainer>
//         <motion.h1
//           initial={{ opacity: 0.5, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//         >
//           Nikhil Sai Jaddu 
          
//         </motion.h1>
//     </LampContainer> */}
//     <div
//       className="h-[40rem]  dark:bg-neutral-950 flex flex-col items-center justify-center relative w-full">
//       <h2
//         className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
//         {/* <span>Shooting Star</span>
//         <span className="text-white text-lg font-thin">x</span> */}
//         <span>Nikhil Sai Jaddu</span>
//       </h2>
//       <ShootingStars />
      
//     </div>
//     <StarsBackground />
    
//     <Timeline data={timelineData} />
//       {/* <Spotlight/> */}
//       <div>
//         <ContainerScroll/>
//       <ShootingStars />
//       <StarsBackground />
      
//     </div>
      
//     </>
   
//   )
// }

// export default Home;





import React from 'react';
import { Timeline } from '../ui/Timeline';
import { motion } from "framer-motion";
import { ShootingStars } from '../ui/ShootingStars';
import { StarsBackground } from '../ui/StarsBackground';
import { ContainerScroll } from '../ui/ContainerScroll';

function Home() {
  const timelineData = [
    {
      title: "Indiana Daily Student",
      content: {
        role: "Web Developer",
        description: "Designed and developed responsive web pages using React, HTML, and TailwindCSS for Indiana Daily Student.",
        duration: "Aug 2024 - Present",
        highlights: [
          "Built and maintained ad blocks across multiple web pages.",
          "Enhanced page loading speed by optimizing assets.",
          "Collaborated with designers and editors to ensure UX consistency."
        ]
      }
    },
    {
      title: "IUB",
      content: {
        role: "Teaching Assistant",
        description: "Assisted in teaching System Programming with C and Unix.",
        duration: "Jan 2024 - May 2024",
        highlights: [
          "Helped students debug complex C programs.",
          "Graded assignments and provided constructive feedback.",
          "Organized hands-on lab sessions on Unix tools and shell scripting."
        ]
      }
    },
    {
      title: "Wipro",
      content: {
        role: "Software Engineer",
        description: "Worked at Wipro, collaborating with FedEx on a Transportation Management System.",
        duration: "Jun 2020 - Jul 2023",
        highlights: [
          "Developed APIs to streamline data retrieval.",
          "Automated user account creation, reducing setup time by 30%.",
          "Implemented robust security protocols for API integrations."
        ]
      }
    }
  ];

  return (
    <>
      {/* Hero Section with Shooting Stars */}
      <div className="h-[40rem] dark:bg-neutral-950 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative z-10 text-3xl md:text-5xl max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Nikhil Sai Jaddu
        </h2>
        <ShootingStars />
      </div>

      {/* Stars Background for the Whole Page */}
      <StarsBackground />

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Scrolling Container with Shooting Stars */}
      <div className="relative w-full overflow-hidden">
        {/* Shooting Stars & Background inside the Container */}
        <ShootingStars />
        <StarsBackground />

        {/* ContainerScroll Component */}
        <ContainerScroll titleComponent={"Projects"}/>
      </div>
    </>
  );
}

export default Home;
