// import React from "react";
// import { PinContainer } from "../ui/ThreeDPinCard.jsx";

// export function AnimatedPinDemo() {
//   return (
//     <div className="h-[40rem] w-full flex items-center justify-center">
//       <PinContainer title="View Portfolio" href="https://twitter.com/mannupaaji">
//         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
//           <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
//             Nikhil Sai Jaddu
//           </h3>

//           {/* 🔹 Image as Background Instead of Gradient */}
//           <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
//             <img
//               src="src/assets/Profile.JPG "// ✅ Replace with your actual image path
//               alt="Profile Background"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           <div className="text-base !m-0 !p-3 font-normal">
//             <span className="text-slate-500">Software Engineer.</span>
//           </div>
//         </div>
//       </PinContainer>
//     </div>
//   );
// }

import React from "react";
import { PinContainer } from "../ui/ThreeDPinCard.jsx";

// export function AnimatedPinDemo() {
//   return (
//     <div className="w-full flex items-center justify-center md:ml-10 md:mr-20 px-4 sm:px-8">
//       <PinContainer title="View Resume" href="https://twitter.com/mannupaaji">
//         <div className="flex basis-full flex-col p-4 sm:p-6 tracking-tight text-slate-100/50 sm:basis-1/2 
//                         w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem]">
          
//           {/* ✅ Name Section */}
//           <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base sm:text-lg text-slate-100">
//             Nikhil Sai Jaddu
//           </h3>

//           {/* ✅ Responsive Image Section */}
//           <div className="flex flex-1 w-full rounded-xl mt-4 overflow-hidden">
//             <img
//               src="src/assets/Profile.JPG" // ✅ Replace with your actual image path
//               alt="Profile Background"
//               className="w-full h-full object-cover rounded-xl max-h-52 sm:max-h-64 md:max-h-80"
//             />
//           </div>

//           {/* ✅ Responsive Text Section */}
//           <div className="text-sm sm:text-base md:text-lg !m-0 !p-3 font-semibold">
//             <span className="text-slate-400">Software Engineer | Full-Stack Developer</span>
//           </div>
//         </div>
//       </PinContainer>
//     </div>
//   );
// }
export function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-8 md:px-0">
      <PinContainer title="View Resume" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 sm:p-6 tracking-tight text-slate-100/50 
                        w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem]">
          
          {/* ✅ Name Section */}
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base sm:text-lg text-slate-100">
            Nikhil Sai Jaddu
          </h3>

          {/* ✅ Responsive Image Section */}
          <div className="flex flex-1 w-full rounded-xl mt-4 overflow-hidden">
            <img
              src="src/assets/Profile.JPG" // ✅ Replace with your actual image path
              alt="Profile Background"
              className="w-full h-full object-cover rounded-xl max-h-52 sm:max-h-64 md:max-h-80"
            />
          </div>

          {/* ✅ Responsive Text Section */}
          <div className="text-sm sm:text-base md:text-lg !m-0 !p-3 font-semibold">
            <span className="text-slate-400">Software Engineer | Full-Stack Developer</span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

