// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import { cn } from "../../utils/cn";

// export const StickyScroll = ({
//   content,
//   contentClassName
// }) => {
//   const [activeCard, setActiveCard] = React.useState(0);
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
//     // target: ref
//     container: ref,
//     offset: ["start start", "end start"],
//   });
//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map((_, index) => index / cardLength);
//     const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
//       const distance = Math.abs(latest - breakpoint);
//       if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//         return index;
//       }
//       return acc;
//     }, 0);
//     setActiveCard(closestBreakpointIndex);
//   });

//   const backgroundColors = [
//     "var(--slate-900)",
//     "var(--black)",
//     "var(--neutral-900)",
//   ];
//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

//   useEffect(() => {
//     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
//   }, [activeCard]);

//   return (
//     (<motion.div
//       animate={{
//         backgroundColor: backgroundColors[activeCard % backgroundColors.length],
//       }}
//       className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
//       ref={ref}>
//       <div className="div relative flex items-start px-4">
//         <div className="max-w-2xl">
//           {content.map((item, index) => (
//             <div key={item.title + index} className="my-20">
//               <motion.h2
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.3,
//                 }}
//                 className="text-2xl font-bold text-slate-100">
//                 {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.3,
//                 }}
//                 className="text-kg text-slate-300 max-w-sm mt-10">
//                 {item.description}
//               </motion.p>
//             </div>
//           ))}
//           <div className="h-40" />
//         </div>
//       </div>
//       <div
//         style={{ background: backgroundGradient }}
//         className={cn(
//           "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
//           contentClassName
//         )}>
//         {content[activeCard].content ?? null}
//       </div>
//     </motion.div>)
//   );
// };



// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll, motion } from "framer-motion";
// import { cn } from "../../utils/cn";

// export const StickyScroll = ({ content }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     container: ref,
//     offset: ["start start", "end start"],
//   });

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map((_, index) => index / content.length);
//     const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
//       return Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
//     }, 0);
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <motion.div
//       className="h-[45rem] overflow-y-auto flex justify-center relative space-x-10 p-10 bg-black rounded-md"
//       ref={ref}
//     >
//       {/* Left Side: Titles & Descriptions */}
//       <div className="relative flex items-start px-4">
//         <div className="max-w-2xl">
//           {content.map((item, index) => (
//             <div key={index} className="my-20">
//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl font-bold text-white"
//               >
//                 {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-lg text-gray-300 max-w-lg mt-4"
//               >
//                 {item.description}
//               </motion.p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side: Image Cards (Instead of Gradient Backgrounds) */}
//       <div className="hidden lg:flex flex-col items-center justify-center h-auto w-[350px]">
//         {content[activeCard]?.image && (
//           <motion.img
//             key={activeCard}
//             src={content[activeCard].image}
//             alt="Achievement"
//             className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         )}
//       </div>
//     </motion.div>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const StickyScroll = ({ content }) => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  // ✅ Get scrolling progress
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  // ✅ Detect which text block is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleIndex = activeCard;

        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);

          if (entry.isIntersecting) {
            visibleIndex = index;
          }
        });

        setActiveCard(visibleIndex);
      },
      {
        root: containerRef.current,
        rootMargin: "-40% 0px -40% 0px", // Detects when text reaches center
        threshold: 0.3, // Ensures image updates only when section is well into view
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="mt-[-4rem] relative flex justify-center bg-black rounded-md w-full ml-40">
      {/* ✅ Scrollable Text Section */}
      <div
        ref={containerRef}
        className="h-[80vh] overflow-y-auto flex space-x-10 w-full p-10"
      >
        {/* Left Side: Titles & Descriptions */}
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                className="my-40"
              >
                <motion.h2
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-white"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-gray-300 max-w-lg mt-4"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right Side: Image Syncs with Scroll */}
        <div className="hidden lg:flex flex-col items-center justify-center h-[400px] w-[350px] sticky top-20">
          {content.map((item, index) => (
            <motion.img
              key={index}
              src={item.image}
              alt="Achievement"
              className={`absolute w-full h-auto max-h-[350px] object-cover rounded-lg shadow-lg transition-opacity duration-500 ${
                activeCard === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
