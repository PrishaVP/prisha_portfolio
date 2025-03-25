"use client";

import { Carousel } from "@/components/ui/carousel";
export function Projects() {
  const slideData = [
    {
      title: "Resume",
      button: "View",
      src: "/resume.svg",
      alt: "Resume"
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
