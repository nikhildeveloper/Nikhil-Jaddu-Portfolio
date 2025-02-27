import React from 'react';
import { Timeline } from '../ui/Timeline';
import { motion } from "framer-motion";
import { ShootingStars } from '../ui/ShootingStars';
import { StarsBackground } from '../ui/StarsBackground';
import { ContainerScroll } from '../ui/ContainerScroll';
import { LayoutGrid } from '../ui/LayoutGrid.jsx';
import { ThreeDCardDemo } from './EducationCard.jsx';
// import { ExpandableCardDemo } from '../ui/ExpandableCard.jsx';
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
import CardGrid from './CardGrid';

import hackathon1 from '../../assets/hackathon1.jpeg';
import hackathon2 from '../../assets/hackathon2.jpeg';


function Home() {
  const timelineData = [
    {
      title: "Indiana Daily Student",
      content: {
        role: "Web Developer",
        description: "Designed and developed responsive web pages for Indiana Daily Student",
        duration: "Aug 2024 - Present",
        highlights: [
        
      "Developed and maintained scalable, responsive web applications using React.js, JavaScript and TailwindCSS, ensuring cross-browser and cross-device compatibility while enhancing performance and user experience. ",
      "Optimized ad block loading strategies by implementing asynchronous API calls, React hooks rendering pipeline enhancements, lazy loading, and caching mechanisms, leading to a 60% increase in user retention on high-traffic pages.",
      "Designed and integrated RESTful API endpoints with PostgreSQL, MongoDB, Express.js, and Redis, enabling real-time data updates, efficient retrieval, and seamless backend integration, improving database query efficiency by 40%.",
      "Led the development of the IDS Legislation Tracker, leveraging React.js, Next.js, Node.js, Firebase Firestore, and Redux for state management, ensuring scalable buildouts and responsive UI design, reducing page load times by 35%.",
      "Collaborated with designers and editors to ensure UX consistency and accessibility compliance across all platforms."
        ]
      }
    },
    {
      title: "IUB",
      content: {
        role: "Teaching Assistant",
        description: "Assisted in teaching System Programming with C and Unix, Network Administration",
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
        role: "Software Engineer",
        description: "Handled backend development using Java",
        duration: "Jan 2022 - Aug 2023",
        highlights: [
          "Collaborated with FedEx as a dedicated Full Stack Developer, actively contributing to the development and maintenance of the Transportation Management System (TMS), which efficiently processes over 10,000 shipments per month.",
          "Boosted data retrieval efficiency by 30% by implementing Oracle PL/SQL stored procedures, indexing strategies, and partitioning techniques, leading to faster transactional queries and optimized database performance.",
          "Developed and integrated RESTful APIs with FedEx’s logistics infrastructure, enabling seamless data exchange and real-time shipment tracking, improving delivery accuracy by 25%.",
          "Implemented microservices architecture using Spring Boot, Kafka, and Docker, ensuring scalability, fault tolerance, and efficient asynchronous communication, which enhanced system resilience and reduced processing latency by 35%.",
          "Implemented modern software development best practices including CI/CD pipelines (GitHub Actions, Jenkins) and containerization (Docker, Kubernetes), improving deployment efficiency and system reliability by 50%."
        ]
      }
    },

  ];
  const achievementsData = [
    {
      title: "Ingineering Hackathon'24 | Luddy's Largest Hackathon",
      description: "Winner - Tackled a problem statement issued by ServiceNow: API for Point of Contact for Collaboration Framework.",
      content: "🥇 Ranked 1st out of 72 teams 🚀",
      image: hackathon1,  // Replace with actual image path
    },
    {
      title: "Google Developer Student Club (GDSC) Hackathon",
      description: "2nd Runner Up - Developed an AI-powered system for waste management, featuring an automated sorting system that leverages advanced computer vision technologies.",
      content: "🧠 Achieved 94-96% accuracy with YOLO & Faster R-CNN ⚡",
      image: hackathon2,  // Replace with actual image path
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
      {/* <div className="w-full flex justify-start pl-4 sm:pl-1 md:pl-12 ">
        <SparklesPreview />
      </div> */}
{/* ✅ Wrapping Sparkles in a flex container to ensure alignment */}
{/* ✅ Keep `max-w-8xl`, but limit internal width */}
<div className="w-full flex justify-center md:justify-start max-w-8xl mx-auto px-6 sm:px-12">
  <div className="w-full max-w-7xl flex items-center justify-center md:justify-start">
    <SparklesPreview />
  </div>
</div>





      {/* ✅ About Me Section */}

    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-8xl mx-auto px-6 sm:px-12 py-10 gap-y-10 md:gap-x-16">
      <div className="w-full md:w-1/2 max-w-3xl flex justify-center md:justify-start">
        <AboutMe />
      </div>
      <div className="w-full md:w-1/2 max-w-3xl flex justify-center md:justify-end">
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
      <div className="relative w-full flex flex-col items-start justify-center py-10 px-6 sm:px-12">
        {/* ✅ Education Heading - Aligned Left */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 mt-40 self-center text-center">
          Education
        </h2>

        {/* ✅ Keeps ThreeDCardDemo Centered */}
        <div className="w-full flex justify-center">
          <ThreeDCardDemo />
        </div>
      </div>


      {/* ✅ Acheivements */}
      <div className="relative w-full bg-black overflow-hidden">
        <div className="relative w-full h-auto flex flex-col items-center justify-center">     
            <div className="relative w-full h-[10rem] flex items-center justify-center">
              <div className="absolute inset-0 flex justify-center items-center">
              <StarsBackground />
              </div>
              <BackgroundLines svgOptions={{ duration: 15 }} />
              <h2 className="absolute z-10 text-3xl md:text-5xl font-bold text-white ">
                Achievements
              </h2>
            </div>
            <ShootingStars />
            {/* <StarsBackground /> */}
            <div className="flex justify-center items-center w-full">

              <StickyScroll content={achievementsData} />
            </div>


          </div>
        </div> 
      </div>

      

      {/* <div className='bg-black'>
      <div className="absolute inset-0 flex justify-center items-center">
          <StarsBackground />
      </div>
     
      <CardGrid/>
      
      </div> */}
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