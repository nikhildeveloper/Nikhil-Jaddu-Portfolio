import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom"
import { useEffect } from "react";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setIsHovered(false);
  };

  const onTouchStart = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setIsHovered(true);
  };

  const onTouchEnd = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setIsHovered(false);
  };

  return (
    (<Link
      className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      href={href || "/"}>
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden">
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} isHovered={isHovered} />
    </Link>)
  );
};

export const PinPerspective = ({
  title,
  href,
  isHovered
}) => {
  return (
    (<motion.div
      className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
      animate={{ opacity: isHovered ? 1 : 0 }}>
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"></motion.div>
          </>
        </div>

        <>
          <motion.div
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div
            className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div
            className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div
            className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>)
  );
};



// export const PinPerspective = ({ title, href }) => {
//   const [isClicked, setIsClicked] = useState(false);

//   // ✅ Close resume link when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest(".resume-card")) {
//         setIsClicked(false);
//       }
//     };
//     if (isClicked) {
//       document.addEventListener("click", handleOutsideClick);
//     }
//     return () => document.removeEventListener("click", handleOutsideClick);
//   }, [isClicked]);

//   return (
//     <motion.div
//       className={`w-96 h-80 flex items-center justify-center 
//                  opacity-100 sm:opacity-0 
//                  ${isClicked ? "opacity-100" : "opacity-0"}
//                  group-hover/pin:opacity-100 
//                  z-[60] transition duration-500 resume-card`} // ✅ Added click-based visibility
//       onClick={(e) => {
//         e.stopPropagation(); // ✅ Prevents immediate close after clicking the card
//         setIsClicked(!isClicked);
//       }}
//     >
//       {/* ✅ Mobile Version - Click to Reveal Resume Link */}
//       {isClicked && (
//         <div className="block sm:hidden absolute top-0 inset-x-0 flex justify-center mt-2">
//           <a
//             href={href}
//             target="_blank"
//             className="relative flex space-x-2 items-center z-10 rounded-full 
//                      bg-zinc-950 py-1 px-4 ring-1 ring-white/10"
//           >
//             <span className="text-white text-xs font-bold">{title}</span>
//           </a>
//         </div>
//       )}

//       {/* ✅ Desktop Version - Hover to Reveal */}
//       <div className="w-full h-full -mt-7 flex-none inset-0">
//         <div className="absolute top-0 inset-x-0 flex justify-center">
//           <a
//             href={href}
//             target="_blank"
//             className={`relative hidden sm:flex space-x-2 items-center z-10 rounded-full 
//                        bg-zinc-950 py-1 px-4 ring-1 ring-white/10 transition duration-500 
//                        ${isClicked ? "opacity-100" : "opacity-0 sm:opacity-100"}`}
//           >
//             <span className="relative z-20 text-white text-xs font-bold">
//               {title}
//             </span>
//           </a>
//         </div>

//         {/* ✅ Background Animation - Appears Only on Click */}
//         {isClicked && (
//           <div
//             style={{
//               perspective: "1000px",
//               transform: "rotateX(70deg) translateZ(0)",
//             }}
//             className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//           >
//             {/* ✅ Glowing Circles Animation - Appears Only When Clicked */}
//             {[0, 2, 4].map((delay) => (
//               <motion.div
//                 key={delay}
//                 initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
//                 animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
//                 transition={{ duration: 6, repeat: Infinity, delay }}
//                 className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] 
//                            rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//               />
//             ))}
//           </div>
//         )}

//         {/* ✅ Animated Highlight Lines - Only When Clicked */}
//         {isClicked && (
//           <>
//             <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b 
//                                    from-transparent to-cyan-500 translate-y-[14px] 
//                                    w-px h-20 group-hover/pin:h-40 blur-[2px]" />
//             <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b 
//                                    from-transparent to-cyan-500 translate-y-[14px] 
//                                    w-px h-20 group-hover/pin:h-40" />
//             <motion.div className="absolute right-1/2 translate-x-[1.5px] 
//                                    bottom-1/2 bg-cyan-600 translate-y-[14px] 
//                                    w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
//             <motion.div className="absolute right-1/2 translate-x-[0.5px] 
//                                    bottom-1/2 bg-cyan-300 translate-y-[14px] 
//                                    w-[2px] h-[2px] rounded-full z-40" />
//           </>
//         )}
//       </div>
//     </motion.div>
//   );
// };
