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
        
          "Built the IDS Legislation Tracker UI with React.js and Redux, designing for complex data needs. Integrated dynamic state management and JWT authentication, enabling efficient handling of real-time legislative updates.",
          "Crafted RESTful APIs using Express.js and Node.js, integrating MongoDB for data flow. Tested with Postman, ensuring reliable support for dynamic content updates across the platform.",
          "Implemented dynamic ad rendering by integrating Google Ad Manager (GAM) and Google Tag Manager (GTM), leveraging DOM manipulation and script injection to optimize ad placement and tracking.",
          "Streamlined page load performance with React.js hooks and lazy loading for list items on high-traffic days. Added Redis caching for frequent queries, ensuring a seamless and responsive user experience."
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
        duration: "Jul 2022 - Aug 2023",
        highlights: [
          "Designed 15+ user screens for order creation and invoice generation, powered by RESTful APIs built with Spring Boot and Spring MVC, integrated with Redis for caching, Swagger for documentation, and Postman for testing, improving system efficiency by 20%.",
          "Optimized database performance for 10,000+ monthly shipments using Oracle PL/SQL stored procedures, indexing, and partitioning, reducing query execution time by 30% and enhancing system scalability.",
          "Developed a real-time Shipment Tracking Microservice using Spring Boot, Kafka, and Docker, orchestrated with Kubernetes and configured with Spring Cloud Config, enabling live updates for 10,000+ shipments and ensuring fault tolerance.",
          "Fortified APIs with OAuth2 authentication via Spring Security, reducing unauthorized access by 30% and ensuring compliance with secure shipment processing workflows.",
          "Enabled real-time shipment tracking with 25% higher accuracy by implementing event-driven architecture with Kafka, improving data consistency and asynchronous communication."
        ]
      }
    },
    {
      title: "Wipro | Intern",
      content: {
        role: "Java FullStack developer",
        description: "Worked on MEAN stack",
        duration: "Jan 2022 - Aug 2022",
        highlights: [
          "Continuous learning and best coding practices were maintained through weekly hands-on assignments, timely project deliveries, and adherence to industry standards, ensuring code quality, maintainability, and on-time completion of 100% of project milestones.",
          "Developed and maintained full-stack web applications using Angular, Java, and Spring Boot, ensuring scalability and performance.",
          "Designed and implemented RESTful APIs and microservices with Spring Boot, improving modularity and data exchange efficiency."
        ]
      }
    },
    

  ];
  const achievementsData = [
    {
      title: "Ingineering Hackathon'24 | Luddy's Largest Hackathon",
      description: "Winner - Tackled a problem statement issued by ServiceNow: API for Point of Contact for Collaboration Framework.",
      content: "🥇 Ranked 1st out of 72 teams 🚀",
      image: hackathon2,  // Replace with actual image path
    },
    {
      title: "Google Developer Student Club (GDSC) Hackathon",
      description: "2nd Runner Up - Developed an AI-powered system for waste management, featuring an automated sorting system that leverages advanced computer vision technologies.",
      content: "🧠 Achieved 94-96% accuracy with YOLO & Faster R-CNN ⚡",
      image: hackathon1,  // Replace with actual image path
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
      <div className="flex justify-center items-center ">
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