


import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

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
        rootMargin: "-30% 0px -30% 0px", // Detects when text reaches center
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
    <div className="relative flex justify-center bg-black rounded-md w-full px-4 sm:px-6 md:px-8 max-w-7xl">
      {/* ✅ Main Container (Flex on Large Screens, Column on Small Screens) */}
      <div className="h-[80vh] overflow-y-auto flex flex-col lg:flex-row space-y-6 lg:space-x-10 w-full p-4 sm:p-6 lg:p-10 mt-0">
        
        {/* ✅ Sticky Image for Small Screens (Now Fixed at Top) */}
        <div className="lg:hidden w-full flex justify-center sticky top-0 bg-black pb-4 z-10">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg h-auto max-h-[300px]">
            {content.map((item, index) => (
              activeCard === index && (
                <motion.img
                  key={index}
                  src={item.image}
                  alt="Achievement"
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-lg transition-opacity duration-500"
                />
              )
            ))}
          </div>
        </div>

        {/* ✅ Scrollable Content - Fully Responsive */}
        <div 
          ref={containerRef} 
          className="h-[70vh] lg:h-[70vh] overflow-y-auto w-full lg:w-2/3 px-2 sm:px-4 md:px-6"
        >
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="max-w-2xl">
              {content.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  data-index={index}
                  className=" my-25 sm:my-10 md:my-24 lg:my-30 xl:my-36"
                >
                  <motion.h2
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-300 max-w-lg mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-center lg:text-left"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Sticky Image for Large Screens (Keeps Image on Right Side) */}
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
