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
import { Carousel,Card } from '../Home/AppleCardCarousel.jsx';
import hackathon1 from '../../assets/hackathon1.jpeg';
import hackathon2 from '../../assets/hackathon2.jpeg';
import { FaReact,FaJava, FaDatabase, FaPython, FaLinux,FaNodeJs,FaGithub, FaDocker, FaSpotify,FaUsers,FaSearch,FaHandshake,FaLock , FaMicrophone,FaLanguage,FaFileDownload,FaEnvelope,FaPizzaSlice,FaShoppingCart,FaMoneyBillWave, FaUserShield, FaRobot,FaBluetooth,FaLightbulb,FaWifi, FaCuttlefish, FaJs, FaAngular, 
  FaHtml5, FaBootstrap, FaProductHunt, 
  FaJira, FaProjectDiagram, FaGitAlt, FaMicrosoft, FaFlask } from 'react-icons/fa'; // Import the necessary icons
import { SiPython,SiJavascript,SiMongodb, SiExpress, SiJira, SiRedux,SiAngular,SiGit,SiBitbucket,SiFlask,SiOpencv,SiKeras, SiTypescript, SiPostgresql, SiFirebase,  
  SiPostman, SiIntellijidea, SiJupyter, SiTailwindcss} from 'react-icons/si';
import Music from "../../assets/music.jpg"
import Event from "../../assets/event.jpg"
import Point from "../../assets/point.jpg"
import Blind from "../../assets/blind.jpg"

import gipherprojectimg from '../../assets/gipherprojectimg.jpeg'
import tourmanagementprojectimg from '../../assets/tourmanagementprojectimg.jpeg'
import timetrackerprojectimg from '../../assets/expenseTracker.jpg'
import pocprojectimg from '../../assets/pocprojectimg.jpeg'

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
  const data1 = [
    {
      category: "MERN Application",
      title: "Tour Management System",
      src: tourmanagementprojectimg,
      content:(
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold 
    text-black bg-white">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="mt-2">
          <span className="text-xl text-black/90"> Interactive Travel Booking Platform </span>
          <br />
          <span className="text-sm text-black/70">Project Overview</span>
        </div>
      </div>
    </div>

    <ul className="list-disc pl-6 text-black/80 mt-4">
      <li className="text-sm md:text-base leading-relaxed">
      The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations.
      </li>
    </ul>

    {/* MERN Stack Icons at the bottom */}
    <div className="flex justify-center space-x-6 mt-8">
      <FaReact className="text-4xl text-blue-600" />
      <FaNodeJs className="text-4xl text-green-600" />
      <FaDatabase className="text-4xl text-yellow-600" />
      <FaDocker className="text-4xl text-blue-500" />
      <FaGithub className="text-4xl text-white" />
    </div>
  </div>
      )
    },
    {
      category: "Angular application with Spring Boot",
      title: "Gipher Go",
      src: gipherprojectimg,
      content:(
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold 
    text-black bg-white">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="mt-2">
          <span className="text-xl text-black/90">Place to find interesting GIFs</span>
          <br />
          <span className="text-sm text-black/70">Project Overview</span>
        </div>
      </div>
    </div>

    <ul className="list-disc pl-6 text-black/80 mt-4">
      <li className="text-sm md:text-base leading-relaxed">
      Designed a dynamic GIF-fetching website with AngularJS and TypeScript, creating an interactive UI using HTML, CSS, and Bootstrap 5. Enabled seamless GIF display with responsive layouts, ensuring a visually engaging user experience across devices. 
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Developed a robust backend with Spring Boot and Java, integrating MySQL for structured metadata and MongoDB for flexible GIF storage. Implemented efficient data retrieval pipelines, supporting quick access to a diverse GIF library for users. 
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Architected microservices with Spring Boot, decoupling search, fetch, and display functionalities for scalability. Streamlined inter-service communication using RESTful APIs, enhancing modularity and system resilience. 
      </li>
      <li className="text-sm md:text-base leading-relaxed">
      Optimized platform performance by leveraging MongoDB’s NoSQL flexibility for high-volume GIF data. Ensured low-latency responses with MySQL indexing, delivering a smooth and reliable GIF browsing experience. 
      </li>
    </ul>

    {/* Tech Stack Icons at the bottom */}
    <div className="flex justify-center space-x-6 mt-8">
      <FaPython className="text-4xl text-blue-500" />
      <SiFlask className="text-4xl text-gray-800" />
      <SiOpencv className="text-4xl text-blue-700" />
      <SiKeras className="text-4xl text-red-600" />
      <FaSpotify className="text-4xl text-green-500" />
    </div>
  </div>
      )
    },
    {
      category: "API",
      title: "Touch : API System for Contact Management",
      src: Point,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mt-2">
                <span className="text-xl text-black/90">Revolutionizing Organizational Collaboration</span>
                <br />
                <span className="text-sm text-black/70">Project Overview</span>
              </div>
            </div>
          </div>
      
          <ul className="list-disc pl-6 text-black/80 mt-4">
            <li className="text-sm md:text-base leading-relaxed">
            Developed a centralized platform with React.js, enabling streamlined onboarding and data management for companies. Built robust APIs using Express.js and Node.js, integrating PostgreSQL to support admin features and seamless third-party integrations.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Integrated advanced search functionality with Node.js, indexing project names, GitHub repositories, and feature-specific data. Enabled seamless collaboration by connecting teams, fostering transparency and efficient knowledge sharing across projects. 
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Implemented secure access controls with token-based authentication and role-based permissions in Express.js. Protected sensitive data while ensuring secure integrations, enhancing trust in cross-team interactions.  
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Developed a scalable API framework in Node.js, deployed on Amazon ECS and Fargate with PostgreSQL. Optimized performance and reduced operational overhead, ensuring a responsive user experience. 
            </li>
          </ul>

          {/* Icons representing features */}
          <div className="flex justify-center space-x-6 mt-8">
            <FaUsers className="text-4xl text-blue-600" />
            <FaSearch className="text-4xl text-green-600" />
            <FaHandshake className="text-4xl text-yellow-600" />
            <FaLock className="text-4xl text-red-600" />
          </div>
        </div>
      )
      
    },
  
    {
      category: "AI",
      title: "Duclear",
      src: timetrackerprojectimg,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mt-2">
                <span className="text-xl text-black/90">Smart Expense Tracker with AI-powered Receipt Analysis</span>
                <br />
                <span className="text-sm text-black/70">Project Overview</span>
              </div>
            </div>
          </div>
      
          <ul className="list-disc pl-6 text-black/80 mt-4">
            <li className="text-sm md:text-base leading-relaxed">
            Developed a MERN stack web application that enables users to track expenses by uploading supermarket bills, integrating OpenAI’s ChatGPT API for automated bill detail extraction and categorization.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Implemented OCR (Tesseract.js / Google Vision API) to process text from uploaded images/PDFs and built a secure user authentication system (JWT, bcrypt.js) with role-based access control.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Designed an interactive dashboard using React.js, Redux Toolkit/Zustand, Chart.js, featuring real-time expense monitoring, automated monthly reports (CSV/PDF downloads), and insightful analytics.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Utilized Multer for file uploads, Cloudinary/Firebase Storage for bill storage, and MongoDB Atlas for scalable data management, ensuring efficient data handling and retrieval.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
            Deployed the frontend on Vercel/Netlify and the backend on Render/Railway/AWS EC2 with CI/CD automation via GitHub Actions, ensuring a responsive UI with Tailwind CSS/Material-UI and a future scope for ML-based financial insights and voice command integration.
            </li>
          </ul>
      
          {/* Icons representing features */}
          <div className="flex justify-center space-x-6 mt-8">
            <FaMicrophone className="text-4xl text-blue-600" />
            <FaLanguage className="text-4xl text-green-600" />
            <FaFileDownload className="text-4xl text-yellow-600" />
            <FaEnvelope className="text-4xl text-red-600" />
          </div>
        </div>
      )
      
    },

 
  ];
  const cards1 = data1.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
   
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

          <div className="w-full h-full bg-black">
            <h2
              className="max-w-7xl pt-40 pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
              Projects
            </h2>
            <Carousel items={cards1} />
          </div>


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