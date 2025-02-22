
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
