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
import CardGrid from './CardGrid.jsx';


function Home() {
  const timelineData = [
    {
      title: "Indiana Daily Student",
      content: {
        role: "Web Developer",
        description: "Designed and developed responsive web pages using React, HTML, and TailwindCSS for Indiana Daily Student.",
        duration: "Aug 2024 - Present",
        highlights: [
        
      "Developed and maintained scalable, responsive web applications using React.js, HTML5, TailwindCSS, and JavaScript, ensuring cross-browser and cross-device compatibility.",
      "Optimized ad block loading strategies with asynchronous API calls, React hooks (useEffect, useState), and rendering pipeline enhancements, increasing user retention by 30% on high-traffic pages.",
      "Designed and integrated RESTful API endpoints with PostgreSQL and MongoDB, enabling real-time data updates and efficient retrieval for web features.",
      "Enhanced page loading speed by optimizing assets, implementing lazy loading, and leveraging React memoization techniques (React.memo, useCallback).",
      "Collaborated with designers and editors to ensure UX consistency and accessibility compliance across all platforms."
        ]
      }
    },
    {
      title: "IUB",
      content: {
        role: "Teaching Assistant",
        description: "Assisted in teaching System Programming with C and Unix.",
        duration: "Aug 2024 - Present",
        highlights: [
          "Provided in-depth instruction in C and Unix, educating over 100+ students across multiple semesters and fostering a strong technical foundation.",
          "Served as a Graduate Associate Instructor for A538: Network Technologies and System Administration, mentoring graduate instructors and guiding them in technical writing and system administration concepts.",
          
        ]
      }
    },
    {
      title: "Wipro",
      content: {
        role: "Software Developer",
        description: "Worked at Wipro, collaborating with FedEx on a Transportation Management System.",
        duration: "Jan 2022 - Jul 2023",
        highlights: [
          "Collaborated with FedEx as a Full Stack Developer to design, develop, and maintain the Transportation Management System, automating workflows and processing 10,000+ shipments monthly.",
          "Optimized backend services using Java and RESTful APIs, integrating Oracle databases to enhance data retrieval speed by 30% and support scalability.",
          "Built over 15 responsive user interfaces using JavaScript, HTML5, and CSS3, ensuring seamless performance on all major devices.",
          "Facilitated within an Agile/Scrum framework, utilizing Git for version control and collaboration, ensuring timely delivery of high-quality software."
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
    // backup
    // <>
    //   <div className="relative w-full h-[2rem] bg-black">
        


    //   </div>
    //   <div className='flex justify-center items-center bg-black'>
    //     <Hero/>
    //     {/* <SparklesPreview /> */}
    //   </div>
    //   <SparklesPreview />
    //   <StarsBackground />
    //   <div className="flex flex-col md:flex-row items-center justify-center w-full bg-black px-6 sm:px-12 py-10">
    //     {/* ✅ About Me - Appears FIRST on mobile */}
    //     <div className="w-full md:w-1/2 mb-10 md:mb-0">
    //       <AboutMe />
    //     </div>

    //     {/* ✅ Card Section - Appears BELOW on mobile */}
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <AnimatedPinDemo />
    //     </div>

    //     {/* ✅ Background Effect (Correctly Positioned) */}
    //     <div className="absolute inset-0 -z-10">
    //       <StarsBackground />
    //     </div>
    //   </div>

          
            
    //   {/* Timeline Section */}
    //   <div className="relative z-10 ">
    //   <Timeline data={timelineData} />
    //   </div>

    //   {/* Scrolling Container with Shooting Stars */}
    //    <div className="relative w-full overflow-hidden">
    //      {/* Shooting Stars & Background inside the Container */}
    //      <ShootingStars />
        

    //      {/* ContainerScroll Component */}
    //      <ContainerScroll titleComponent={"Projects"}>
    //        <LayoutGrid />
    //      </ContainerScroll>
       

    //  </div>
    //  <InfiniteSkills/>
    //   <div>
    //   <h2 className="absolute z-10 text-3xl md:text-5xl ml-30 font-bold text-white mt-20">

    //     Education
    //     </h2>
    //     <div className="h-[60rem] bg-black flex flex-col items-center justify-center relative w-full">

    //     <ShootingStars />
    //     <StarsBackground />
        
    //     <ThreeDCardDemo/>
          
    //     </div>
    //   </div>


    //    <div className="relative w-full bg-black overflow-hidden">
       
      
    //  <div className="relative w-full h-auto flex flex-col items-center justify-center">


     
    //     <div className="relative w-full h-[30rem] flex items-center justify-center">
    //     <div className="absolute inset-0 flex justify-center items-center">
    //    <StarsBackground />
    //    </div>
    //          <BackgroundLines svgOptions={{ duration: 15 }} />

    //          <h2 className="absolute z-10 text-3xl md:text-5xl font-bold text-white">

    //            Achievements
    //          </h2>
    //        </div>
    //        <ShootingStars />
    //        {/* <StarsBackground /> */}
          
    //        <div className='pb-50 pr-80'>
    //        <StickyScroll content={achievementsData} />
    //        {/* <ShootingStars /> */}
    //        </div>
           
    //      </div>
    //    </div> 
       

       
      
    // </>
    <>
    {/* ✅ Global Background (Prevents Line Issue) */}
    <div className="relative w-full bg-black">
      <StarsBackground />
      <ShootingStars />
      {/* ✅ Hero Section */}
      <div className="flex justify-center items-center">
        <Hero />
      </div>
      {/* ✅ Wrap in a div with proper alignment */}
      <div className="w-full flex justify-start pl-4 sm:pl-1 md:pl-12">
        <SparklesPreview />
      </div>


      {/* ✅ About Me Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 sm:px-12 py-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <AboutMe />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <AnimatedPinDemo />
        </div>
      </div>

      {/* ✅ Timeline Section */}
      <div className="relative z-10">
        <Timeline data={timelineData} />
        
      </div>

      {/* ✅ Projects Section */}
      {/* <div className="relative w-full overflow-hidden">
        <ShootingStars />
        <ContainerScroll titleComponent={"Projects"}>
          <LayoutGrid />
        </ContainerScroll>
      </div> */}


            {/* ✅ Projects Section */}
      <div className="relative w-full overflow-hidden">
        <ShootingStars />
        <ContainerScroll titleComponent={"Projects"}>
        <CardGrid/>
        </ContainerScroll>
      </div>

      {/* ✅ Infinite Skills Section */}
      <InfiniteSkills />

      {/* ✅ Education Section */}
      <div className="relative w-full flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Education
        </h2>
        <ThreeDCardDemo />
      </div>

      {/* ✅ Ach */}
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
      </div>

      <div className='bg-black'>
      <div className="absolute inset-0 flex justify-center items-center">
          <StarsBackground />
      </div>
     
      <CardGrid/>
      
      </div>
  </>
  );
}

export default Home;


    // <>
    //   <div className="relative w-full h-[2rem] bg-black">
        


    //   </div>
    //   <div className='flex justify-center items-center bg-black'>
    //     <Hero/>
    //     {/* <SparklesPreview /> */}
    //   </div>
    //   <SparklesPreview />
    //   <StarsBackground />
    //   <div className="flex flex-col md:flex-row items-center justify-center w-full bg-black px-6 sm:px-12 py-10">
    //     {/* ✅ About Me - Appears FIRST on mobile */}
    //     <div className="w-full md:w-1/2 mb-10 md:mb-0">
    //       <AboutMe />
    //     </div>

    //     {/* ✅ Card Section - Appears BELOW on mobile */}
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <AnimatedPinDemo />
    //     </div>

    //     {/* ✅ Background Effect (Correctly Positioned) */}
    //     <div className="absolute inset-0 -z-10">
    //       <StarsBackground />
    //     </div>
    //   </div>

          
            
    //   {/* Timeline Section */}
    //   <div className="relative z-10 ">
    //   <Timeline data={timelineData} />
    //   </div>

    //   {/* Scrolling Container with Shooting Stars */}
    //    <div className="relative w-full overflow-hidden">
    //      {/* Shooting Stars & Background inside the Container */}
    //      <ShootingStars />
        

    //      {/* ContainerScroll Component */}
    //      <ContainerScroll titleComponent={"Projects"}>
    //        <LayoutGrid />
    //      </ContainerScroll>
       

    //  </div>
    //  <InfiniteSkills/>
    //   <div>
    //   <h2 className="absolute z-10 text-3xl md:text-5xl ml-30 font-bold text-white mt-20">

    //     Education
    //     </h2>
    //     <div className="h-[60rem] bg-black flex flex-col items-center justify-center relative w-full">

    //     <ShootingStars />
    //     <StarsBackground />
        
    //     <ThreeDCardDemo/>
          
    //     </div>
    //   </div>


    //    <div className="relative w-full bg-black overflow-hidden">
       
      
    //  <div className="relative w-full h-auto flex flex-col items-center justify-center">


     
    //     <div className="relative w-full h-[30rem] flex items-center justify-center">
    //     <div className="absolute inset-0 flex justify-center items-center">
    //    <StarsBackground />
    //    </div>
    //          <BackgroundLines svgOptions={{ duration: 15 }} />

    //          <h2 className="absolute z-10 text-3xl md:text-5xl font-bold text-white">

    //            Achievements
    //          </h2>
    //        </div>
    //        <ShootingStars />
    //        {/* <StarsBackground /> */}
          
    //        <div className='pb-50 pr-80'>
    //        <StickyScroll content={achievementsData} />
    //        {/* <ShootingStars /> */}
    //        </div>
           
    //      </div>
    //    </div> 
       

       
      
    // </>