import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/EducationCardContainer";

// ✅ Keeping Image Circular
const Image = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} loading="lazy" />
);

export function ThreeDBioCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-20 mt-[-15rem]">
      {/* 🔹 Circular Card */}
      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-800/[0.1] 
          dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
          w-80 h-80 flex flex-col items-center justify-center text-center rounded-full p-6 border"
        >
          {/* 🔹 Circular Image Centered */}
          <div className="flex justify-center">
            <Image
              src="src/assets/iu-trident-logo.jpg"
              height="400"
              width="400"
              className="w-32 h-32 object-cover rounded-full border border-gray-300"
              alt="Indiana University"
            />
          </div>

          {/* 🔹 Text Content Centered */}
          <div className="mt-4">
            <CardItem translateZ={50} className="text-2xl font-bold text-white">
              NIKHIL SAI JADDU
            </CardItem>

            <CardItem translateZ={30} className="text-lg font-semibold mt-1 text-white">
              Software Engineer
            </CardItem>

            <CardItem translateZ={20} className="text-sm text-gray-400 mt-1">
              Open to work
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
