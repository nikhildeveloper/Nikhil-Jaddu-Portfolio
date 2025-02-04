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

export function AnimatedPinDemo() {
  return (
    <div className="h-[50rem] w-full flex items-center justify-center">
      <PinContainer title="View Resume" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[28rem] h-[28rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
            Nikhil Sai Jaddu
          </h3>

          {/* 🔹 Enlarged Image Container */}
          <div className="flex flex-1 w-full h-[40rem] rounded-xl mt-4 overflow-hidden">
            <img
              src="src/assets/Profile.JPG" // ✅ Replace with your actual image path
              alt="Profile Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* 🔹 Enlarged Text Section */}
          <div className="text-lg !m-0 !p-3 font-semibold">
            <span className="text-slate-400">Software Engineer | Full-Stack Developer </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
