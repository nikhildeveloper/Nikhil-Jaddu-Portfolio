import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

import { cn } from "../../utils/cn.ts";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto bg-black py-10  scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "max-w-7xl mx-auto"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-5 sm:mr-10 md:mr-20 mt-3 sm:mt-5">
  <button
    className="relative z-40 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
    onClick={scrollLeft}
    disabled={!canScrollLeft}>
    <FaArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-500" />
  </button>
  <button
    className="relative z-40 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
    onClick={scrollRight}
    disabled={!canScrollRight}>
    <FaArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-500" />
  </button>
</div>

      </div>
    </CarouselContext.Provider>)
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (<>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            layoutId={layout ? `card-${card.title}` : undefined}
            className="max-w-5xl mx-auto bg-black/80 backdrop-blur-xl border border-white/10 h-fit z-[60] my-10 p-6 md:p-12 rounded-3xl font-sans relative">
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={handleClose}>
              <FaTimes className="h-6 w-6 text-white" />
            </button>
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-white/70">
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-2xl md:text-5xl font-semibold text-white mt-4">
              {card.title}
            </motion.p>
            <div className="py-10 text-white/90 text-base md:text-lg leading-relaxed">
              {card.content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      className="rounded-3xl bg-gray-100  h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div
        className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-white text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0" />
    </motion.button>
  </>);
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
  }) => {
    const [isLoading, setLoading] = useState(true);
    return (
      <img
        className={cn(
          "transition duration-300",
          isLoading ? "blur-sm" : "blur-0",
          className,
          "object-cover w-full h-full" // Ensure it takes full width and height of the container
        )}
        onLoad={() => setLoading(false)}
        src={src}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        alt={alt ? alt : "Background of a beautiful view"}
        {...rest}
      />
    );
  };
  
