

import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true }) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      if (speed === "fast") {
        duration = "10s";
      } else if (speed === "normal") {
        duration = "30s";
      } else {
        duration = "50s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-20 w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 gap-3 sm:gap-4 py-2 sm:py-4 w-max flex-nowrap animate-scroll"
        style={{
          display: "flex",
          animation: `scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, forwards)`,
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[250px] sm:w-[300px] md:w-[350px] max-w-full relative rounded-2xl border border-white px-3 sm:px-6 py-3 sm:py-4 flex-shrink-0 h-auto min-h-[150px] flex flex-col justify-center"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote>
              <span className="relative z-20 text-sm sm:text-base text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-2 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                {item.title}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* Keyframe animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};
