
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub,FaEnvelope } from "react-icons/fa";

// import { useEffect, useRef } from "react";

// const Hero = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
//     elements?.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={containerRef} className=" ml-20 relative overflow-hidden bg-black">
//       <div className="absolute inset-0 dot-pattern opacity-20" />

//       <div className="container mx-auto px-6 py-5 relative z-10">
//         <div className="w-full mx-auto space-y-8">
//           <p className="text-accent animate-on-scroll text-2xl font-light tracking-wide text-white">
//             Hey there! I'm-
//           </p>

//           <h1 className="animate-on-scroll text-6xl md:text-8xl font-bold tracking-tight text-white">
//             Nikhil Sai Jaddu.
//           </h1>

//           <div className="space-y-4">
//             <h2 className="animate-on-scroll text-3xl sm:text-4xl font-semibold text-white " >
//               Software Developer. {" "}
//               <span className="text-gray-400 font-normal ml-2">
//                Bridging logic and creativity to build impactful applications.
//               </span>
//             </h2>

//             <div className="animate-on-scroll space-y-2 text-gray-400">
//               <p className="flex items-center gap-2">
//                 <span className="text-xl">🚀</span>
//                 Specialized in Full stack applications (MERN & MEAN)
//               </p>
//               <p className="flex items-center gap-2">
//                 <span className="text-xl">⚡</span>
//                 Actively looking for SDE and Full Stack Developer roles{" "}
//                 {/* <span className="text-accent">GGL</span> */}
//               </p>
//             </div>
//           </div>

//           <div className="animate-on-scroll flex flex-wrap gap-4 pt-4 text-white">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300"
//               >
//                 <FaGithub className="w-5 h-5" />
//                 <span className="text-sm font-medium">Github</span>
//               </a>

//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300"
//               >
//                 <CiLinkedin className="w-5 h-5" />
//                 <span className="text-sm font-medium">LinkedIn</span>
//               </a>

//               <a
//                 href="mailto:example@email.com"
//                 className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300"
//               >
//                 <FaEnvelope className="w-5 h-5" />
//                 <span className="text-sm font-medium">Email</span>
//               </a>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-black text-white w-full px-4 sm:px-8 lg:px-20 py-10 md:ml-10 lg:ml-10"
    >
      <div className="container mx-auto text-left">  
        {/* ✅ "Hey there! I'm-" now left-aligned & smaller */}
        <p className="text-accent animate-on-scroll text-sm sm:text-lg font-light tracking-wide">
          Hey there! I'm-
        </p>

        <h1 className="animate-on-scroll text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight">
          Nikhil Sai Jaddu.
        </h1>

        <h2 className="animate-on-scroll text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
          Software Developer.{" "}
          <span className="text-gray-400 font-normal">
            Bridging logic and creativity to build impactful applications.
          </span>
        </h2>

        {/* ✅ Skills Section - Properly Wrapped */}
        <div className="animate-on-scroll text-gray-400 mt-4 space-y-2">
          <p className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">🚀</span>
            Specialized in Full stack applications (MERN & MEAN)
          </p>
          <p className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">⚡</span>
            Actively looking for SDE and Full Stack Developer roles
          </p>
        </div>

        {/* ✅ Social Links - Responsive Layout */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300 text-sm md:text-base"
          >
            <FaGithub className="w-5 h-5" />
            <span>Github</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300 text-sm md:text-base"
          >
            <CiLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:example@email.com"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-600 bg-black hover:bg-gray-800 transition duration-300 text-sm md:text-base"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
