"use client";

import { Carousel } from "@/components/ui/carousel";
export function Projects() {
  const slideData = [
    {
      title: "Resume",
      button: "View",
      href: "/Prisha Updated Resume Feb 2025.docx.pdf",
      src: "/resume.svg",
      alt: "Resume"
    },
    {
      title: "Surf Or Pay",
      button: "Visit",
      href: "https://surf-or-pay-deployment.vercel.app/",
      src: "/SurfOrPay.svg",
      alt: "Surf Or Pay"
    },
    {
      title: "Pocket Explorer",
      button: "Visit",
      href: "https://wildevs.itch.io/pocket-explorer",
      src: "/PocketExplorer.svg",
      alt: "Pocket Explorer"
    },
    {
      title: "ResearchRoster",
      button: "View",
      href: "/ResearchRoster User Guide.pdf",
      src: "/ResearchRoster.svg",
      alt: "ResearchRoster"
    },
    {
      title: "Vet App",
      button: "View",
      href: "https://www.figma.com/proto/LDiHEmnFchuj9gHU9nEGkk/Untitled?node-id=59-93&p=f&t=AbTIrubgC1fop4BA-1&scaling=scale-down&content-scaling=fixed&page-id=59%3A92&starting-point-node-id=59%3A93",
      src: "/VetApp.svg",
      alt: "Vet App"
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
