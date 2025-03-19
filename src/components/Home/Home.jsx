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
import Food from "../../assets/food.avif"
import IOT from "../../assets/IOT.jpg"

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
      category: "Web Development",
      title: "Tour Management System",
      src: Event,
      content:(
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold 
    text-black bg-white">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="mt-2">
          <span className="text-xl text-black/90">Innovative Event Booking System</span>
          <br />
          <span className="text-sm text-black/70">Project Overview</span>
        </div>
      </div>
    </div>

    <ul className="list-disc pl-6 text-black/80 mt-4">
      <li className="text-sm md:text-base leading-relaxed">
        Designed and established an innovative venue booking system, EventMate, which streamlined the booking process, resulting in a 40% reduction in time spent on venue selection for event managers.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
        Architected a microservices-based framework for EventMate, improving modularity and scalability, which boosted deployment speed by 30%, enabling faster feature releases and minimizing downtime.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
        Enhanced scalability and reliability by utilizing Docker for containerization and deploying services on platforms like Render and Azure, effectively accommodating increasing user demands.
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
      category: "Machine Learning",
      title: "Emotion Based Music Recommendation System",
      src: Music,
      content:(
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold 
    text-black bg-white">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="mt-2">
          <span className="text-xl text-black/90">Emotion-Driven Music Recommendation System Using Language Analysis</span>
          <br />
          <span className="text-sm text-black/70">Project Overview</span>
        </div>
      </div>
    </div>

    <ul className="list-disc pl-6 text-black/80 mt-4">
      <li className="text-sm md:text-base leading-relaxed">
        Implemented a real-time facial expression recognition system using Convolutional Neural Networks (CNN) with Keras and OpenCV, achieving 95% accuracy in detecting emotions such as happiness, sadness, anger, and neutrality.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
        Integrated the system with the Spotify API, leveraging playlist recommendations based on detected emotions, enabling personalized music experiences tailored to users’ moods.
      </li>
      <li className="text-sm md:text-base leading-relaxed">
        Built an interactive Flask-based web application featuring live webcam feeds for emotion detection, multilingual support for global accessibility, and inspirational quotes linked to emotional states, enhancing user interaction and retention by 25%.
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
      title: "Touch : Point Of Contact API",
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
              Centralized data management and streamlined onboarding for companies, with robust APIs for admin features and integrations.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Advanced search capabilities integrated with project names, GitHub repositories, and feature-specific searches for seamless collaboration.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Enhanced collaboration by connecting employees across teams and projects, promoting transparency and knowledge sharing.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Secure access with role-based control and token-based authentication to protect sensitive data and ensure secure integrations.
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
      category: "Machine Learning",
      title: "Text Convert Language Translation Application",
      src: Blind,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mt-2">
                <span className="text-xl text-black/90">Voice-Activated Language Translation System for Visually Challenged or Illiterate Individuals</span>
                <br />
                <span className="text-sm text-black/70">Project Overview</span>
              </div>
            </div>
          </div>
      
          <ul className="list-disc pl-6 text-black/80 mt-4">
            <li className="text-sm md:text-base leading-relaxed">
              Speech recognition to enable voice interaction for source and target language selection.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Real-time translation between languages using the `translate` library.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Text-to-speech (TTS) functionality to read out translations and provide feedback to the user.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Option to save the translation to a file and send it via email with attachment.
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
    {
      category: "Web Development",
      title: "GoFood- Food Delivery App",
      src: Food,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mt-2">
                <span className="text-xl text-black/90">GoFood - Food Delivery App</span>
                <br />
                <span className="text-sm text-black/70">Project Overview</span>
              </div>
            </div>
          </div>
      
          <ul className="list-disc pl-6 text-black/80 mt-4">
            <li className="text-sm md:text-base leading-relaxed">
              A fully functional food delivery app built with the MERN stack, enabling users to order food from a variety of local restaurants and have it delivered directly to their doorstep. The app provides seamless user experience with a clean interface for browsing restaurants and menus.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Real-time order tracking that allows users to monitor their food's journey from restaurant to delivery, ensuring transparency and user satisfaction. Notifications keep users updated on the status of their order, such as when it’s being prepared, on its way, or delivered.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Secure and easy-to-use payment gateway integration that supports multiple payment options like credit cards, debit cards, and online wallets, ensuring users can pay effortlessly for their orders while keeping their financial data safe.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              A comprehensive admin panel designed for restaurant owners and app administrators to manage and monitor orders, customers, restaurant listings, and menus. The panel also allows administrators to track and resolve customer issues, add new restaurants, and update restaurant information as needed.
            </li>
          </ul>
      
          {/* Icons representing features */}
          <div className="flex justify-center space-x-6 mt-8">
            <FaPizzaSlice className="text-4xl text-red-600" />
            <FaShoppingCart className="text-4xl text-green-600" />
            <FaMoneyBillWave className="text-4xl text-yellow-600" />
            <FaUserShield className="text-4xl text-blue-600" />
          </div>
        </div>
      )
      
    },
    {
      category: "IoT",
      title: "Automatic Surface Disinfecting Robot Using UV Light",
      src: IOT,
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-black bg-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mt-2">
                <span className="text-xl text-black/90">Automatic Surface Disinfecting Robot</span>
                <br />
                <span className="text-sm text-black/70">Project Overview</span>
              </div>
            </div>
          </div>
      
          <ul className="list-disc pl-6 text-black/80 mt-4">
            <li className="text-sm md:text-base leading-relaxed">
              Developed an IoT-based automatic surface disinfecting robot utilizing an HC-SR04 distance sensor to measure distances and control movement, ensuring effective coverage and cleaning.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              The robot autonomously navigates the room, detecting and avoiding obstacles to reach every corner, ensuring complete disinfection of surfaces, much like a robotic vacuum.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Equipped with UV light technology to disinfect surfaces safely, reducing the need for manual cleaning and improving hygiene in the environment.
            </li>
            <li className="text-sm md:text-base leading-relaxed">
              Real-time data processing and control of robot movements are managed through IoT systems, allowing users to track and monitor the cleaning process remotely for better convenience.
            </li>
          </ul>
      
          {/* Icons representing features */}
          <div className="flex justify-center space-x-6 mt-8">
            <FaRobot className="text-4xl text-gray-600" />
            <FaBluetooth className="text-4xl text-blue-600" />
            <FaLightbulb className="text-4xl text-yellow-600" />
            <FaWifi className="text-4xl text-green-600" />
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