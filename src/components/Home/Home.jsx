import React from 'react';
import { Timeline } from '../ui/Timeline';
import { motion } from "framer-motion";
import { ShootingStars } from '../ui/ShootingStars';
import { StarsBackground } from '../ui/StarsBackground';
import { ContainerScroll } from '../ui/ContainerScroll';
import { LayoutGrid } from '../ui/LayoutGrid.jsx';
import { ThreeDCardDemo } from './EducationCard.jsx';
import { ExpandableCardDemo } from '../ui/ExpandableCard.jsx';
import { StickyScroll } from '../ui/AcheivementsDisplay.jsx';
import { BackgroundLines } from '../ui/ProjectHeader.jsx';
import { TextGenerateEffect } from '../ui/TextGenerateEffect.jsx';
import { SparklesPreview } from './SparklesText.jsx';
import { ThreeDBioCardDemo } from './BioCard.jsx';
import { PinContainer } from '../ui/ThreeDPinCard.jsx';
import { AnimatedPinDemo } from './ResumePinCard.jsx';
import InfiniteSkills from './InfiniteSkills.jsx';
import LightHeader from './LightHeader.jsx';
import Hero from './HeroCard.jsx';
import AboutMe from './About.jsx';

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
  const achievementsData = [
    {
      title: "Ingineering Hackathon'24 | Luddy's Largest Hackathon",
      description: "Winner - Tackled a problem statement issued by ServiceNow: API for Point of Contact for Collaboration Framework.",
      content: "🥇 Ranked 1st out of 72 teams 🚀",
      image: "src/assets/Hack1.jpeg",  // Replace with actual image path
    },
    {
      title: "Google Developer Student Club (GDSC) Hackathon",
      description: "2nd Runner Up - Developed an AI-powered system for waste management, featuring an automated sorting system that leverages advanced computer vision technologies.",
      content: "🧠 Achieved 94-96% accuracy with YOLO & Faster R-CNN ⚡",
      image: "src/assets/Hack2.jpeg",  // Replace with actual image path
    },
  ];
  const Project=
  [{id:1,content:"hello",},
    {id:2,content:"hello",},
    {id:3,content:"hello",},
    {id:4,content:"hello",},
    {id:5,content:"hello",}
  ]

  return (
    <>
      <div className="relative w-full h-[2rem] bg-black">
        


      </div>
      <div className='flex justify-center items-center bg-black'>
        <Hero/>
        {/* <SparklesPreview /> */}
      </div>
      <SparklesPreview />
          
      <div className='flex justify-center '>
      <AboutMe/>
      <StarsBackground />
        {/* Hero Section with Shooting Stars */}
        {/* <div className="h-[40rem] bg-black flex flex-col items-start justify-around relative w-full ">
          <h2 className="absolute top-20 left-30 z-10 text-8xl md:text-8xl max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
            BUILD
          </h2>
          <h2 className="absolute top-50 left-30 z-10 text-8xl md:text-8xl max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
            SOLVE
          </h2>
          <h2 className="absolute top-80 left-30 z-10 text-8xl md:text-8xl max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
            REPEAT 
          </h2>
          <TextGenerateEffect className='absolute top-120 left-30 ' words={"I don’t just code, I create solutions. If something’s missing, I build it. What started as a hobby became a passion for crafting tools that make life easier."}/>
          <ShootingStars />
        </div> */}



        <div className="h-[40rem] bg-black flex flex-col items-center justify-center relative w-full">
  
          {/* 🔹 SparklesPreview in the Background */}
                  {/* <div className="absolute inset-0 flex justify-center items-center">
                    <SparklesPreview />
                  </div> */}

          {/* 🔹 AnimatedPinDemo in the Foreground */}
          <div className="relative z-10">
            <AnimatedPinDemo />
          </div>

        </div>

        


       <div className="absolute inset-0 flex justify-center items-center">
       <StarsBackground />
       </div>

       </div>      

            
            
          
            
      {/* Timeline Section */}
      <div className="relative z-10 ">
      <Timeline data={timelineData} />
      </div>

      {/* Scrolling Container with Shooting Stars */}
       <div className="relative w-full overflow-hidden">
         {/* Shooting Stars & Background inside the Container */}
         <ShootingStars />
        

         {/* ContainerScroll Component */}
         <ContainerScroll titleComponent={"Projects"}>
           <LayoutGrid />
         </ContainerScroll>
       

     </div>
     <InfiniteSkills/>
      <div>
      <h2 className="absolute z-10 text-3xl md:text-5xl ml-30 font-bold text-white mt-20">

        Education
        </h2>
        <div className="h-[60rem] bg-black flex flex-col items-center justify-center relative w-full">

        <ShootingStars />
        <StarsBackground />
        
        <ThreeDCardDemo/>
          
        </div>
      </div>


       <div className="relative w-full bg-black overflow-hidden">
       
      
     <div className="relative w-full h-auto flex flex-col items-center justify-center">


     
        <div className="relative w-full h-[30rem] flex items-center justify-center">
        <div className="absolute inset-0 flex justify-center items-center">
       <StarsBackground />
       </div>
             <BackgroundLines svgOptions={{ duration: 15 }} />

             <h2 className="absolute z-10 text-3xl md:text-5xl font-bold text-white">

               Achievements
             </h2>
           </div>
           <ShootingStars />
           {/* <StarsBackground /> */}
          
           <div className='pb-50 pr-80'>
           <StickyScroll content={achievementsData} />
           {/* <ShootingStars /> */}
           </div>
           
         </div>
       </div> 
       

       
      
    </>
  );
}

export default Home;



