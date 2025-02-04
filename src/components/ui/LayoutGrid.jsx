
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "../../utils/cn";

// export const LayoutGrid = ({
//   cards
// }) => {
//   const [selected, setSelected] = useState(null);
//   const [lastSelected, setLastSelected] = useState(null);

//   const handleClick = (card) => {
//     setLastSelected(selected);
//     setSelected(card);
//   };

//   const handleOutsideClick = () => {
//     setLastSelected(selected);
//     setSelected(null);
//   };

//   return (
//     (<div
//       className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-2  max-w-7xl mx-auto gap-4 relative">
//       {cards.map((card, i) => (
//         <div key={i} className={cn(card.className, "")}>
//           <motion.div
//             onClick={() => handleClick(card)}
//             className={cn(card.className, "relative overflow-hidden", selected?.id === card.id
//               ? " rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
//               : lastSelected?.id === card.id
//               ? "z-40 bg-white rounded-xl h-full w-full"
//               : "bg-white rounded-xl h-full w-full")}
//             layoutId={`card-${card.id}`}>
//             {selected?.id === card.id && <SelectedCard selected={selected} />}
//             <ImageComponent card={card} />
//           </motion.div>

//         </div>
        
//       ))}
//       <motion.div
//         onClick={handleOutsideClick}
//         className={cn(
//           "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
//           selected?.id ? "pointer-events-auto" : "pointer-events-none"
//         )}
//         animate={{ opacity: selected?.id ? 0.3 : 0 }} />
//     </div>)
//   );
// };

// // const ImageComponent = ({ card }) => {
// //   return (
// //     <div className="relative w-full h-full">
// //       {/* Image */}
// //       <motion.img
// //         layoutId={`image-${card.id}-image`}
// //         src={card.thumbnail}
// //         height="600"
// //         width="600"
// //         className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
// //         alt="thumbnail"
// //       />

// //       {/* Minimal Arrow Button at Bottom Right */}
// //       <button 
// //         className="absolute bottom-2 right-10 text-white text-4xl opacity-70 hover:opacity-100 transition"
// //         onClick={() => console.log(`Clicked on card ${card.id}`)}
// //       >
// //         ➜
// //       </button>
// //     </div>
// //   );
// // };

// const ImageComponent = ({ card }) => {
//   return (
//     <div className="relative w-full h-full flex flex-col">
//       {/* Image Container (Full Height) */}
//       <motion.img
//         layoutId={`image-${card.id}-image`}
//         src={card.thumbnail}
//         height="600"
//         width="600"
//         className="object-cover object-top inset-0 h-full w-full transition duration-200"
//         alt="thumbnail"
//       />

//       {/* Translucent Glassy Footer */}
//       <div className="absolute bottom-0 left- w-full h-16 bg-black/30 backdrop-blur-md text-white flex items-center justify-between px-4 py-2">
//         {/* Title */}
//         <span className="text-lg font-semibold">{card.content}</span>

//         {/* Arrow Button */}
//         <button
//           className="text-white text-2xl opacity-80 hover:opacity-100 transition"
//           onClick={() => console.log(`Clicked on card ${card.id}`)}
//         >
//           ➜
//         </button>
//       </div>
//     </div>
//   );
// };



// const SelectedCard = ({
//   selected
// }) => {
//   return (
//     (<div
//       className=" h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60] bg-black">
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 0.6,
//         }}
//         className="absolute inset-0 h-full w-full bg-black opacity-60 z-10 text-white" />
//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{
//           opacity: 0,
//           y: 100,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         className="relative px-8 pb-4 z-[70] text-white bg-black" >
//         {selected?.content}
//       </motion.div>
//     </div>)
//   );
// };


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const LayoutGrid = ({ cards }) => {
//   const [selected, setSelected] = useState(null);

//   const handleClick = (card) => {
//     setSelected(card); // Expand this card
//   };

//   const handleClose = () => {
//     setSelected(null); // Reset back to normal view
//   };

//   return (
//     <div className="w-full h-full p-10 max-w-7xl mx-auto relative">
//       {/* Render either the grid or the expanded card */}
//       <AnimatePresence mode="wait">
//         {!selected ? (
//           <motion.div key="grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {cards.map((card) => (
//               <motion.div
//                 key={card.id}
//                 className="relative overflow-hidden cursor-pointer rounded-xl shadow-lg"
//                 layoutId={`card-${card.id}`}
//                 onClick={() => handleClick(card)}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <ImageComponent card={card} />
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             key="selected"
//             layoutId={`card-${selected.id}`}
//             className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//           >
//             <motion.div
//               className="w-[85vw] md:w-[60vw] h-[75vh] bg-black rounded-xl shadow-xl overflow-hidden relative flex flex-col"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             >
//               <SelectedCard selected={selected} handleClose={handleClose} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const ImageComponent = ({ card }) => {
//   return (
//     <div className="relative w-full h-full flex flex-col rounded-xl overflow-hidden">
//       {/* Image */}
//       <motion.img
//         layoutId={`image-${card.id}-image`}
//         src={card.thumbnail}
//         className="object-cover object-top inset-0 h-full w-full transition duration-200 rounded-xl"
//         alt="thumbnail"
//       />

//       {/* Translucent Footer with Rounded Edges */}
//       <div className="absolute bottom-0 left-0 w-full h-16 bg-black/30 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 rounded-b-xl">
//         <span className="text-lg font-semibold">{card.content}</span>
//         <button className="text-white text-2xl opacity-80 hover:opacity-100 transition">➜</button>
//       </div>
//     </div>
//   );
// };

// const SelectedCard = ({ selected, handleClose }) => {
//   return (
//     <motion.div
//       className="w-full h-full flex flex-col justify-center items-center text-center p-10 text-white relative rounded-xl"
//       initial={{ scale: 0.8 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0.8 }}
//     >
//       {/* Close Button */}
//       <button
//         className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition"
//         onClick={handleClose}
//       >
//         ✖
//       </button>

//       <motion.div className="text-5xl font-bold">{selected.content}</motion.div>
//     </motion.div>
//   );
// };


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (card) => {
    setSelected(card); // Expands the card
  };

  const handleClose = () => {
    // Add a delay to prevent flickering
    setTimeout(() => {
      setSelected(null);
    }, 300); // Adjust delay for a smoother transition
  };

  return (
    <div className="w-full h-full p-6 max-w-12xl mx-auto relative">
      {/* Render the grid OR expanded card */}
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="relative overflow-hidden cursor-pointer rounded-xl shadow-lg"
                layoutId={`card-${card.id}`}
                onClick={() => handleClick(card)}
                whileHover={{ scale: 1.05 }}
              >
                <ImageComponent card={card} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="selected"
            layoutId={`card-${selected.id}`}
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="w-[85vw] md:w-[60vw] h-[75vh] bg-black rounded-xl shadow-xl overflow-hidden relative flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <SelectedCard selected={selected} handleClose={handleClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <div className="relative w-full h-full flex flex-col rounded-xl overflow-hidden">
      {/* Image */}
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className="object-cover object-top inset-0 h-full w-full transition duration-200 rounded-xl"
        alt="thumbnail"
      />

      {/* Translucent Footer with Rounded Edges */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black/30 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 rounded-b-xl">
        <span className="text-lg font-semibold">{card.content}</span>
        <button className="text-white text-2xl opacity-80 hover:opacity-100 transition">➜</button>
      </div>
    </div>
  );
};

const SelectedCard = ({ selected, handleClose }) => {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center text-center p-10 text-white relative rounded-xl"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition"
        onClick={handleClose}
      >
        ✖
      </button>

      <motion.div className="text-5xl font-bold">{selected.content}</motion.div>
    </motion.div>
  );
};
