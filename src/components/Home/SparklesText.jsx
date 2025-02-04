"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles.jsx";
import { ShootingStars } from '../ui/ShootingStars';
import { StarsBackground } from '../ui/StarsBackground';

export function SparklesPreview() {
  return (
    (<div
    
      className=" w-full z-10 bg-black flex flex-col items-start justify-center overflow-hidden ">
      {/* <h1
        className="md:text-7xl text-2xl lg:text-3xl font-bold text-center text-white relative z-20">
        Nikhil Sai Jaddu
      </h1> */}
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        {/* <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
            
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.2}
          maxSize={1}
          particleDensity={2200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      
    </div>)
  );
}
