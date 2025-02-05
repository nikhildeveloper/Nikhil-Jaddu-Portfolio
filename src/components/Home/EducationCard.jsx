// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../ui/EducationCardContainer";

// // ✅ Use standard `<img>` instead of `next/image`
// const Image = ({ src, alt, ...props }) => (
//   <img src={src} alt={alt} {...props} loading="lazy" />
// );

// // ✅ Education Section with IU & SRM Cards
// export function ThreeDCardDemo() {
//   return (
//     <div className="flex flex-wrap justify-center gap-10">
//       {/* 🔹 Indiana University Bloomington Card */}
//       <CardContainer className="inter-var">
//         <CardBody
//           className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border"
//         >
//           {/* IU Logo */}
//           <CardItem translateZ="100" className="w-full mt-2">
//             <Image
//               src="src/assets/iu-trident-logo.jpg"
//               height="1000"
//               width="1000"
//               className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl"
//               alt="Indiana University Logo"
//             />
//           </CardItem>

//           {/* University Name */}
//           <CardItem translateZ={50} className="text-3xl font-bold text-neutral-600 dark:text-white text-center mt-4">
//             Indiana University Bloomington
//           </CardItem>

//           {/* Degree & Dates */}
//           <CardItem translateZ={30} className="text-lg font-semibold text-neutral-500 dark:text-neutral-300 text-center mt-2">
//             Master of Science in Computer Science
//           </CardItem>
//           <CardItem translateZ={20} className="text-sm text-neutral-400 dark:text-neutral-400 text-center">
//             August 2023 - May 2025
//           </CardItem>

//           {/* Coursework */}
//           <div className="mt-4">
//             <CardItem translateZ={20} className="text-lg font-semibold text-neutral-500 dark:text-neutral-300">
//               Relevant Coursework:
//             </CardItem>
//             <CardItem translateZ={10} className="text-sm text-neutral-400 dark:text-neutral-400">
//               - Applied Algorithms  
//               - Software Engineering  
//               - Advanced Database Concepts  
//               - Applied Machine Learning  
//               - Elements of Artificial Intelligence  
//             </CardItem>
//           </div>
//         </CardBody>
//       </CardContainer>

//       {/* 🔹 SRM University Card */}
//       <CardContainer className="inter-var">
//         <CardBody
//           className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border"
//         >
//           {/* SRM Logo */}
//           <CardItem translateZ="100" className="w-full mt-2">
//             <Image
//               src="src/assets/srm-logo.png"
//               height="1000"
//               width="1000"
//               className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl"
//               alt="SRM University Logo"
//             />
//           </CardItem>

//           {/* University Name */}
//           <CardItem translateZ={50} className="text-3xl font-bold text-neutral-600 dark:text-white text-center mt-4">
//             SRM University
//           </CardItem>

//           {/* Degree & Dates */}
//           <CardItem translateZ={30} className="text-lg font-semibold text-neutral-500 dark:text-neutral-300 text-center mt-2">
//             Bachelor of Science in Computer Science
//           </CardItem>
//           <CardItem translateZ={20} className="text-sm text-neutral-400 dark:text-neutral-400 text-center">
//             August 2018 - May 2022
//           </CardItem>
//         </CardBody>
//       </CardContainer>
//     </div>
//   );
// }

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/EducationCardContainer";

// ✅ Keeping Image from Left to Right but NOT Full Background
const Image = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} loading="lazy" />
);

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* 🔹 Indiana University Bloomington Card */}
      <CardContainer className="inter-var">
        <CardBody
          className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border"
        >
          {/* 🔹 Image Stretched Fully from Left to Right */}
          <CardItem translateZ="100" className="w-full">
            <Image
              src="src/assets/iu-trident-logo.jpg"
              height="1000"
              width="1000"
              className="w-full h-64 object-cover rounded-xl"
              alt="Indiana University"
            />
          </CardItem>

          {/* 🔹 Text Content */}
          <div className="text-center mt-6">
            <CardItem translateZ={50} className="text-3xl font-bold text-white">
              Indiana University Bloomington
            </CardItem>

            <CardItem translateZ={30} className="text-lg font-semibold mt-2 text-white">
              Master of Science in Computer Science
            </CardItem>

            <CardItem translateZ={20} className="text-sm text-gray-400">
              August 2023 - May 2025
            </CardItem>


          </div>
        </CardBody>
      </CardContainer>

      {/* 🔹 SRM University Card */}
      <CardContainer className="inter-var">
        <CardBody
          className="relative group/card hover:shadow-2xlhover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border"
        >
          {/* 🔹 Image Stretched Fully from Left to Right */}
          <CardItem translateZ="100" className="w-full">
            <Image
              src="src/assets/srm-logo.png"
              height="1000"
              width="1000"
              className="w-full h-64 object-cover rounded-xl"
              alt="SRM University"
            />
          </CardItem>

          {/* 🔹 Text Content */}
          <div className="text-center mt-6">
            <CardItem translateZ={50} className="text-3xl font-bold text-white ">
              SRM University
            </CardItem>

            <CardItem translateZ={30} className="text-lg font-semibold mt-2 text-white">
              Bachelor of Science in Computer Science
            </CardItem>

            <CardItem translateZ={20} className="text-sm text-gray-400">
              August 2018 - May 2022
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
