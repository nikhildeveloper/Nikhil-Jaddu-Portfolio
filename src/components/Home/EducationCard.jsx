
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/EducationCardContainer";

const Image = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} loading="lazy" />
);

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 p-4 m-30px">
      {/* 🔹 Indiana University Bloomington Card */}
      <CardContainer className="inter-var">
        <CardBody
          className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] 
          w-full sm:w-[35rem] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
          h-auto rounded-xl p-6 border"
        >
          {/* 🔹 Image Stretched Fully from Left to Right */}
          <CardItem translateZ="100" className="w-full">
            <Image
              src="src/assets/iu-trident-logo.jpg"
              height="1000"
              width="1000"
              className="w-full h-48 sm:h-64 object-cover rounded-xl"
              alt="Indiana University"
            />
          </CardItem>

          {/* 🔹 Text Content */}
          <div className="text-left mt-4 sm:mt-6">
            <CardItem translateZ={50} className="text-2xl sm:text-3xl font-bold text-white">
              Indiana University Bloomington
            </CardItem>

            <CardItem translateZ={30} className="text-md sm:text-lg font-semibold mt-2 text-white">
              Master of Science in Computer Science
            </CardItem>

            <CardItem translateZ={20} className="text-xs sm:text-sm text-gray-400">
              August 2023 - May 2025
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      

      {/* 🔹 SRM University Card */}
      <CardContainer className="inter-var">
        <CardBody
          className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] 
          w-full sm:w-[35rem] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
          h-auto rounded-xl p-6 border m-0"
        >
          {/* 🔹 Image Stretched Fully from Left to Right */}
          <CardItem translateZ="100" className="w-full">
            <Image
              src="src/assets/srm-logo.png"
              height="1000"
              width="1000"
              className="w-full h-48 sm:h-64 object-cover rounded-xl"
              alt="SRM University"
            />
          </CardItem>

          {/* 🔹 Text Content */}
          <div className="text-left mt-4 sm:mt-6">
            <CardItem translateZ={50} className="text-2xl sm:text-3xl font-bold text-white">
              SRM University
            </CardItem>

            <CardItem translateZ={30} className="text-md sm:text-lg font-semibold mt-2 text-white">
              Bachelor of Science in Computer Science
            </CardItem>

            <CardItem translateZ={20} className="text-xs sm:text-sm text-gray-400">
              August 2018 - May 2022
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
