import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { CardDemo } from '../ui/SkillsCard';
import { AnimatedTooltip } from "./AnimatedToolTip";
// import SkillsDisplay from "../Home/SkillsDisplay";
import { StarsBackground } from '../ui/StarsBackground';
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Work Experience
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Here&apos;s a timeline of my experience.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left Section */}
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  
                <div
                  className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                  
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.title}
              </h3>
              
            </div>

            {/* Glassy Card */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="glass-card p-6 rounded-2xl shadow-lg bg-opacity-50 border border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  {/* Left Column: Content */}

                  {/* Updated Description Section with Better Styling */}
                <div className="w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.content.role}
                  </h3>
                  <p className="text-sm text-neutral-400 italic mb-4">
                    {item.content.duration}
                  </p>

                {/* ✅ Improved Description Formatting */}
                <div className="space-y-3 text-neutral-300 text-1xl leading-relaxed">
                  {item.content.description.split('. ').map((point, idx) => (
                    point.trim() && (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400">📌</span> 
                        <span className="font-semibold text-white/90">{point}.</span>
                      </div>
                    )
                  ))}
                </div>

                {/* ✅ Bullet Point Highlights */}
                <ul className="mt-4 list-disc list-outside text-sm text-neutral-300 space-y-2">
                  {item.content.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-snug">{highlight}</li>
                  ))}
                </ul>
              </div>


                  {/* Right Column: CardDemo */}
                  {/* <div className="w-full md:w-1/3">
                    <CardDemo />
                  </div> */}
                  
                </div>
                  {/* <SkillsDisplay/> */}
              </div>
            </div>
          </div>
        ))}
        {/* Vertical Line Animation */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
      <StarsBackground />
    </div>
  );
};
