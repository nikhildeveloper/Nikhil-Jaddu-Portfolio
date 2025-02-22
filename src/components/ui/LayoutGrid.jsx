
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (card) => {
    setSelected(card);
  };

  const handleClose = () => {
    setTimeout(() => {
      setSelected(null);
    }, 300);
  };

  return (
    <div className="w-full h-full p-4 sm:p-6 max-w-12xl mx-auto relative">
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
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
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 rounded-4xl sm:p-8 overflow-hidden"
                style={{ maxWidth: "100vw", maxHeight: "100vh" }}  // Added this line
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >

            <motion.div
              className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] 
                         min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] max-h-[90vh] 
                         bg-black rounded-xl shadow-xl flex flex-col p-0 sm:p-10 
                         overflow-hidden"
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
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className="object-cover object-top inset-0 h-full w-full transition duration-200 rounded-xl"
        alt="thumbnail"
      />

      <div className="absolute bottom-0 left-0 w-full h-14 bg-black/30 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 rounded-b-xl">
        <span className="text-md sm:text-lg font-semibold">{card.content}</span>
        <button className="text-white text-xl sm:text-2xl opacity-80 hover:opacity-100 transition">➜</button>
      </div>
    </div>
  );
};


const SelectedCard = ({ selected, handleClose }) => {
  return (
<motion.div
  className="w-full max-w-screen-md min-h-[60vh] max-h-[60vh] bg-black rounded-xl shadow-xl flex flex-col p-6 sm:p-10 overflow-hidden"
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.8 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>

      {/* ✅ Fixed: Ensuring Full Height Usage with Scroll */}
      <div className="w-full h-full flex flex-col overflow-hidden">
        {/* ✅ Ensuring the content inside is scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-white text-black p-1 sm:p-2 rounded-full shadow-sm hover:bg-gray-300 transition"
            onClick={handleClose}
          >
            ✖
          </button>

          {/* Project Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center m-4 sm:m-6 pt-5 ">
            <motion.div className="text-xl sm:text-3xl text-white font-semibold mb-2 sm:mb-0">{selected.content}</motion.div>
            <div className="flex gap-2 sm:gap-3">
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-blue-600 transition"
                >
                  Visit
                </a>
              )}
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-600 transition"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          {/* ✅ Scrollable Content */}
          <div className="overflow-y-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[75vh] p-2 sm:p-4 ">
            <ul className="text-sm sm:text-md md:text-lg text-gray-300 list-disc list-outside pl-5 space-y-2">
              {selected.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 sm:mt-6 flex justify-center gap-3">
          {selected.icon.map((icon, index) => (
            <span key={index} className="text-xl sm:text-2xl">{icon}</span>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  );
};
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const LayoutGrid = ({ cards }) => {
//   const [selected, setSelected] = useState(null);

//   const handleClick = (card) => {
//     setSelected(card);
//   };

//   const handleClose = () => {
//     setTimeout(() => {
//       setSelected(null);
//     }, 300);
//   };

//   return (
//     <motion.div 
//       className="relative w-full max-w-screen-lg mx-auto p-4 sm:p-6"
//       animate={{ height: selected ? "auto" : "100%" }} // Container grows dynamically
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       <AnimatePresence mode="wait">
//         {!selected ? (
//           <motion.div
//             key="grid"
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
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
//             className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 p-4 sm:p-8 overflow-hidden"
//             style={{ maxWidth: "100%", maxHeight: "100%" }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//           >
//             <motion.div
//               className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] 
//                          bg-black rounded-xl shadow-xl 
//                          flex flex-col p-0 sm:p-10 overflow-hidden"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1, height: "auto" }} // Make the modal expand dynamically
//               exit={{ scale: 0.8 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <SelectedCard selected={selected} handleClose={handleClose} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const ImageComponent = ({ card }) => {
//   return (
//     <div className="relative w-full h-full flex flex-col rounded-xl overflow-hidden">
//       <motion.img
//         layoutId={`image-${card.id}-image`}
//         src={card.thumbnail}
//         className="object-cover object-top inset-0 h-full w-full transition duration-200 rounded-xl"
//         alt="thumbnail"
//       />
//       <div className="absolute bottom-0 left-0 w-full h-14 bg-black/30 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 rounded-b-xl">
//         <span className="text-md sm:text-lg font-semibold">{card.content}</span>
//         <button className="text-white text-xl sm:text-2xl opacity-80 hover:opacity-100 transition">
//           ➜
//         </button>
//       </div>
//     </div>
//   );
// };

// const SelectedCard = ({ selected, handleClose }) => {
//   return (
//     <motion.div
//       className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] 
//                  bg-black rounded-xl shadow-xl 
//                  flex flex-col p-6 sm:p-10 overflow-hidden"
//       initial={{ scale: 0.8 }}
//       animate={{ scale: 1, height: "auto" }} // Expand dynamically
//       exit={{ scale: 0.8 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       {/* ✅ Modal Content with Scrollable Area */}
//       <div className="w-full h-full flex flex-col overflow-hidden">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-sm hover:bg-gray-300 transition"
//           onClick={handleClose}
//         >
//           ✖
//         </button>

//         {/* Project Title */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center m-4 sm:m-6 pt-5">
//           <motion.div className="text-xl sm:text-3xl text-white font-semibold mb-2 sm:mb-0">
//             {selected.content}
//           </motion.div>
//           <div className="flex gap-2 sm:gap-3">
//             {selected.link && (
//               <a
//                 href={selected.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-blue-600 transition"
//               >
//                 Visit
//               </a>
//             )}
//             {selected.github && (
//               <a
//                 href={selected.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-600 transition"
//               >
//                 GitHub Repo
//               </a>
//             )}
//           </div>
//         </div>

//         {/* ✅ Scrollable Content */}
//         <div className="overflow-y-auto h-auto max-h-[75%] sm:max-h-[80%] md:max-h-[85%] p-2 sm:p-4">
//           <ul className="text-sm sm:text-md md:text-lg text-gray-300 list-disc list-outside pl-5 space-y-2">
//             {selected.description.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Project Icons */}
//         <div className="mt-4 sm:mt-6 flex justify-center gap-3">
//           {selected.icon.map((icon, index) => (
//             <span key={index} className="text-xl sm:text-2xl">{icon}</span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default LayoutGrid;
