"use client";
import "@/styles/fonts.css";
import { Projects } from "../components/ui/projects"
import { useState, useRef, useId, useEffect } from "react";
import Image from 'next/image';
import Carousel from "@/components/ui/carousel";


export default function Home() {
  return (
   <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen w-screen bg-[#1E1E1E]">
    <div className="h-1/2 w-3/4 md:w-1/2 flex-col flex-shrink md:p-16 text-wrap pu-8 pr-4 pl-4">
      <div className="text-white reem-kufi-big text-4xl md:text-6xl mb-8 mt-8">
        Hi, I&apos;m <span className="text-[#C9FF5C]">Prisha</span>!
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="text-white reem-kufi-small text-xl md:text-2xl pb-4">
          I&apos;m a Computer Science student at NUS with a passion for creating dynamic, user-friendly digital experiences.
        </div>
        <div className="text-white reem-kufi-small text-xl md:text-2xl pb-12">
          I specialize in full-stack development, UI/UX design, and innovative software solutions that blend creativity with technical expertise.
        </div>
        <div className="w-3/4 flex items-center justify-between">
          <button onClick={()=> window.open('https://github.com/PrishaVP','_blank', 'noopener')}>
            <Image 
              src="/githubIcon.svg" 
              className="h-16 w-16 rounded-full hover:-translate-y-0.5" 
              width={50} 
              height={50} 
              alt="github button"
            />
          </button>
          <button onClick={()=> window.open('https://www.linkedin.com/in/prisha-v-prakash-4928a6343/','_blank', 'noopener')}>
            <Image 
              src="/linkedinIcon.svg" 
              className="h-16 w-16 rounded-xl hover:-translate-y-0.5" 
              width={50} 
              height={50} 
              alt="linkedin button"
            />
          </button>
          <button onClick={()=> window.open('mailto:prisha.vprakash@u.nus.edu','_blank', 'noopener')}>
            <Image 
              src="/mailIcon.svg" 
              className="h-16 w-16 rounded-xl hover:-translate-y-0.5" 
              width={50} 
              height={50} 
              alt="mail button"
            />
          </button>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 shrink">
      <Projects></Projects>
    </div>
   </div>
  );
}
