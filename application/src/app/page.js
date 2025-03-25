"use client";
import "@/styles/fonts.css";
import { Projects } from "../components/ui/projects"
import { useState, useRef, useId, useEffect } from "react";
import Image from 'next/image';
import Carousel from "@/components/ui/carousel";


export default function Home() {
  return (
   <div className="relative flex flex-col md:flex-row justify-center items-center h-screen w-screen bg-[#1E1E1E]">
    <div className="h-95 w-1/2 flex-col flex-shrink p-8 md:p-16 text-wrap">
      <div className="text-white reem-kufi-big text-4xl md:text-6xl pb-8">
        Hi, I'm Prisha!
      </div>
      <div className="text-white reem-kufi-small text-2xl md:text-4xl">
        some words some words some words some words some words some words
      </div>
    </div>
    <div className="h-full w-1/2">
      <Projects></Projects>
    </div>
   </div>
  );
}
