import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { StarsBackground } from "./StarsBackground";  // Ensure correct import
import { ShootingStars } from "./ShootingStars";

import { 
  FaGithub, FaExternalLinkAlt, FaServer, FaProjectDiagram, FaClock, FaReact, FaNodeJs, 
  FaDocker, FaDatabase, FaJava, FaAngular, FaJs, FaPython 
} from "react-icons/fa";

// IMAGE LINKS
// import gipherImg from '../../../src/assets/gipher.jpeg'
export const ContainerScroll = ({ titleComponent, children }) => {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
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
  const translate = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div className="relative h-auto flex items-center justify-center p-2 md:p-10 overflow-hidden max-w-screen-lg mx-auto" 
    style={{ minHeight: "fit-content", height: "auto", maxHeight: "fit-content" }}
    ref={containerRef}>
      <div className="absolute inset-0 bg-black z-0"></div> 
      <StarsBackground />
      <ShootingStars/>
      <div className="py-6 sm:py-10 md:py-20 w-full relative" style={{ perspective: "700px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};



export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ 
        translateY: translate,
        transformOrigin: "center center"
      }}
      className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white"
    >
      <div className="w-full mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
          {titleComponent}
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
    transformOrigin: "center center",
    boxShadow:
      "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
  }}
  className="w-full max-w-full sm:max-w-7xl md:max-w-9xl 
             border-4 border-[#6C6C6C] p-6 sm:p-8 
             bg-[#222222] rounded-[30px] shadow-2xl relative"
>
  <div className="w-full h-full flex flex-col md:flex-row 
                  overflow-y-auto rounded-2xl bg-zinc-900 p-6 sm:p-8 relative"
       style={{ transformStyle: "preserve-3d" }}>
    {children}
  </div>
</motion.div>
);

