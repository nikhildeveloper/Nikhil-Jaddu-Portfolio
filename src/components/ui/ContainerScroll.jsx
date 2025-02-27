// import React, { useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { StarsBackground } from "./StarsBackground";  // Ensure correct import
// import { ShootingStars } from "./ShootingStars";

// import { 
//   FaGithub, FaExternalLinkAlt, FaServer, FaProjectDiagram, FaClock, FaReact, FaNodeJs, 
//   FaDocker, FaDatabase, FaJava, FaAngular, FaJs, FaPython 
// } from "react-icons/fa";
// export const ContainerScroll = ({ titleComponent, children }) => {



//   const Projects = [
//     {
//       id: 1,
//       content: "Tour Management System",
//       icon: [
//         <FaReact className="text-blue-400 text-2xl"/>,
//         <FaNodeJs className="text-green-400 text-2xl"/>,
//         <FaDatabase className="text-yellow-500 text-2xl"/>,
//         <FaDocker className= "text-blue-600 text-2xl"/>
//      ],
//       description: [
//         "The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment. ",
//         "It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.",
//         "Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.", 
//         "The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.",
//         "Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.",
//         "Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations."
//       ],
//       link: "your_tour_management_project_link",
//       github: "your_tour_management_github_link",
//       thumbnail: "src/assets/TourManagement.jpeg",
//     },
//     {
//       id: 2,
//       content: "API System for Contact Management",
//       description: [
//         "Developed a scalable, open-source API framework in Node.js deployed on Amazon ECS, Fargate, and RDS.",
//         "Optimized performance and reduced operational overhead."
//       ],
//       link: "your_api_project_link",
//       github: "your_api_github_link",
//       thumbnail: "src/assets/POC.jpeg",
//     },
//     {
//       id: 3,
//       content: "Gipher Go",
//       description: [
//         "Designed a dynamic website for fetching and displaying GIFs, leveraging HTML, CSS, Bootstrap 5, AngularJS, and TypeScript.",
//         "Backend powered by Spring Boot (Java), MySQL, and MongoDB for efficient data storage."
//       ],
//       link: "your_gipher_project_link",
//       github: "your_gipher_github_link",
//       thumbnail: "src/assets/Gipher.jpeg",
//     },
//     {
//       id: 4,
//       content: "Duclear - Time Tracker",
//       description: [
//         "A powerful time-tracking application built using modern technologies.",
//         "Provides intuitive scheduling, productivity analytics, and seamless tracking features."
//       ],
//       link: "your_duclear_project_link",
//       github: "your_duclear_github_link",
//       thumbnail: "src/assets/TimeTracker.png",
//     },{
//     id: 5,
//     content: "Tour Management System",
//     icon: [
//       <FaReact className="text-blue-400 text-2xl"/>,
//       <FaNodeJs className="text-green-400 text-2xl"/>,
//       <FaDatabase className="text-yellow-500 text-2xl"/>,
//       <FaDocker className= "text-blue-600 text-2xl"/>
//    ],
//     description: [
//       "The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment. ",
//       "It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.",
//       "Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.", 
//       "The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.",
//       "Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.",
//       "Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations."
//     ],
//     link: "your_tour_management_project_link",
//     github: "your_tour_management_github_link",
//     thumbnail: "src/assets/TourManagement.jpeg",
//   },
//   ];
  
  
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//   });
//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   const scaleDimensions = () => {
//     return isMobile ? [0.7, 0.9] : [1.05, 1];
//   };

//   const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
//   const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

//   return (
//     <div className="relative h-auto flex items-center justify-center p-2 md:p-10 overflow-hidden max-w-screen-lg mx-auto " ref={containerRef}>

      
//       {/* Add a Debug Background */}
//       <div className="absolute inset-0 bg-black  z-0"></div> 
//       <StarsBackground />
//       <ShootingStars/>
//       <div className="py-6 sm:py-10 md:py-20 w-full relative" style={{ perspective: "700px" }}>

//         <Header translate={translate} titleComponent={titleComponent} />
//         <Card rotate={rotate} translate={translate} scale={scale} ProjectCards={Projects} >
//           {children }
//         </Card>
//       </div>
//     </div>
//   );
// };



// export const Header = ({ translate, titleComponent }) => {
//   return (
//     <motion.div
//   style={{ translateY: translate }}
//   className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white "
// >
//   <div className="w-full">
//     {/* ✅ Responsive Font Sizes */}
//     {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
//       I always have something to build on..
//     </p> */}

//     {/* ✅ Responsive Title */}
//     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
//       Projects
//     </h2>
//   </div>
// </motion.div>

//   );
// };




// export const Card = ({ rotate, scale, children, ProjectCards }) => (
//   <motion.div
//     style={{
//       rotateX: rotate,
//       scale,
//       boxShadow:
//         "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
//     }}
//     className="w-full max-w-full sm:max-w-3xl md:max-w-5xl 
                
//                border-4 border-[#6C6C6C] p-4 sm:p-6 
//                bg-[#222222] rounded-[30px] shadow-2xl relative"
//   >
//     {/* ✅ Fix: Allows scrolling when content overflows */}
//     <div className="h-full w-full flex flex-col md:flex-row 
//                     overflow-y-auto rounded-2xl bg-zinc-900 p-4 sm:p-6 relative">
//       {React.cloneElement(children, { cards: ProjectCards })}
//     </div>
//   </motion.div>
// );

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { StarsBackground } from "./StarsBackground";  // Ensure correct import
import { ShootingStars } from "./ShootingStars";

import { 
  FaGithub, FaExternalLinkAlt, FaServer, FaProjectDiagram, FaClock, FaReact, FaNodeJs, 
  FaDocker, FaDatabase, FaJava, FaAngular, FaJs, FaPython 
} from "react-icons/fa";

// IMAGE LINKS
import gipherImg from '../../../src/assets/gipher.jpeg'
export const ContainerScroll = ({ titleComponent, children }) => {



  // const Projects = [
  //   {
  //     id: 1,
  //     content: "Tour Management System",
  //     icon: [
  //       <FaReact className="text-blue-400 text-2xl"/>,
  //       <FaNodeJs className="text-green-400 text-2xl"/>,
  //       <FaDatabase className="text-yellow-500 text-2xl"/>,
  //       <FaDocker className= "text-blue-600 text-2xl"/>
  //    ],
  //     description: [
  //       "The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment. ",
  //       "It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.",
  //       "Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.", 
  //       "The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.",
  //       "Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.",
  //       "Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations."
  //     ],
  //     link: "your_tour_management_project_link",
  //     github: "your_tour_management_github_link",
  //     thumbnail: "src/assets/TourManagement.jpeg",
  //   },
  //   {
  //     id: 2,
  //     content: "API System for Contact Management",
  //     description: [
  //       "Developed a scalable, open-source API framework in Node.js deployed on Amazon ECS, Fargate, and RDS.",
  //       "Optimized performance and reduced operational overhead."
  //     ],
  //     link: "your_api_project_link",
  //     github: "your_api_github_link",
  //     thumbnail: "src/assets/POC.jpeg",
  //   },
  //   {
  //     id: 3,
  //     content: "Gipher Go",
  //     description: [
  //       "Designed a dynamic website for fetching and displaying GIFs, leveraging HTML, CSS, Bootstrap 5, AngularJS, and TypeScript.",
  //       "Backend powered by Spring Boot (Java), MySQL, and MongoDB for efficient data storage."
  //     ],
  //     link: "your_gipher_project_link",
  //     github: "your_gipher_github_link",
  //     thumbnail: false,
  //   },
  //   {
  //     id: 4,
  //     content: "Duclear - Time Tracker",
  //     description: [
  //       "A powerful time-tracking application built using modern technologies.",
  //       "Provides intuitive scheduling, productivity analytics, and seamless tracking features."
  //     ],
  //     link: "your_duclear_project_link",
  //     github: "your_duclear_github_link",
  //     thumbnail: "src/assets/TimeTracker.png",
  //   },{
  //   id: 5,
  //   content: "Tour Management System",
  //   icon: [
  //     <FaReact className="text-blue-400 text-2xl"/>,
  //     <FaNodeJs className="text-green-400 text-2xl"/>,
  //     <FaDatabase className="text-yellow-500 text-2xl"/>,
  //     <FaDocker className= "text-blue-600 text-2xl"/>
  //  ],
  //   description: [
  //     "The Tour Management System is a cloud-native, secure, and high-performance travel booking platform built using React.js, Node.js, Express.js, and MongoDB, with Docker and Kubernetes for seamless deployment. ",
  //     "It ensures scalability and high availability through containerized microservices and Kubernetes auto-scaling.",
  //     "Robust security is implemented with JWT authentication, bcrypt encryption, and role-based access control (RBAC) to protect user data.", 
  //     "The system delivers a fast and seamless user experience, leveraging Redis caching, optimized MongoDB queries, and an interactive React.js frontend.",
  //     "Automated CI/CD pipelines (GitHub Actions/Jenkins) streamline deployments, reducing manual effort and improving development efficiency.",
  //     "Additionally, real-time monitoring with Prometheus and Grafana provides deep insights into system performance, ensuring proactive issue resolution and smooth operations."
  //   ],
  //   link: "your_tour_management_project_link",
  //   github: "your_tour_management_github_link",
  //   thumbnail: "src/assets/tourmanagement.jpeg",
  // },
  // ];
  
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative h-auto flex items-center justify-center p-2 md:p-10 overflow-hidden max-w-screen-lg mx-auto " 
    style={{ minHeight: "fit-content", height: "auto", maxHeight: "fit-content" }}
    ref={containerRef}>

      
      {/* Add a Debug Background */}
      <div className="absolute inset-0 bg-black  z-0"></div> 
      <StarsBackground />
      <ShootingStars/>
      <div className="py-6 sm:py-10 md:py-20 w-full relative" style={{ perspective: "700px" }}>

        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} >
          {children }
        </Card>
      </div>
    </div>
  );
};



export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
  style={{ translateY: translate }}
  className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white "
>
  <div className="w-full">
    {/* ✅ Responsive Font Sizes */}
    {/* <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
      I always have something to build on..
    </p> */}

    {/* ✅ Responsive Title */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
      Projects
    </h2>
  </div>
</motion.div>

  );
};




export const Card = ({ rotate, scale, children}) => (
<motion.div
  style={{
    rotateX: rotate,
    scale,
    boxShadow:
      "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
  }}
  className="w-fit max-w-full sm:max-w-3xl md:max-w-5xl 
             border-4 border-[#6C6C6C] p-4 sm:p-6 
             bg-[#222222] rounded-[30px] shadow-2xl relative"
>
  <div className="w-full flex flex-col md:flex-row 
                  overflow-hidden rounded-2xl bg-zinc-900 p-4 sm:p-6 relative">
    {children}
  </div>
</motion.div>
);

