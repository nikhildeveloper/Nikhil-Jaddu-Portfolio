import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { StarsBackground } from "./StarsBackground";  // Ensure correct import
import { ShootingStars } from "./ShootingStars";
export const ContainerScroll = ({ titleComponent, children }) => {
  const Projects=[
    {id:1,content:"Tour Management",thumbnail:"src/assets/TourManagement.jpeg"},
    {id:2,content:"API Contact Management",thumbnail:"src/assets/POC.jpeg"},
    {id:3,content:"Gipher Go",thumbnail:"src/assets/Gipher.jpeg"},
    {id:4,content:"Duclear",thumbnail:"src/assets/TimeTracker.png"},

  ]
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
    <div className="relative w-full h-[50rem] md:h-[80rem] flex items-center justify-center p-2 md:p-10 overflow-hidden" ref={containerRef}>
      
      {/* Add a Debug Background */}
      <div className="absolute inset-0 bg-black  z-0"></div> 
      <StarsBackground />
      <ShootingStars/>
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "700px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} ProjectCards={Projects}>
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
      className="max-w-10xl mx-auto "
    >
      <div className="text-center text-white"> 
        <div className="text-9xl md:text-5xl ">
          <p>I always have something to build on..</p>
        </div>
        
        <div className="text-9xl md:text-7xl font-bold mb-10">
        
          Projects
        </div>
      </div>

    </motion.div>
  );
};


export const Card = ({ rotate, scale, children, ProjectCards }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[40rem] md:h-[45rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl md:p-4 relative">
      {React.cloneElement(children, {cards:ProjectCards})}
    </div>
  </motion.div>
);
