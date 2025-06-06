"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { TestimonialsSection } from "./TestimonialsSection";
import { CurrentBulding } from "./current-building";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const AboutCard = () => {

  const [loading, setLoading] = useState(true);
  
    const delay = 1000;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [delay]);

    if(loading) {
      return (
<div className="">
<Card className="dark:bg-black ">
      <CardHeader className="mt-4 space-y-4">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2">
            <Skeleton className="w-80 h-10" />
            <CardDescription className="space-y-2" >
              <Skeleton className="w-150 h-6"/>
              <Skeleton className=" w-130 h-6"/>
              <Skeleton className=" w-110 h-6"/>
            </CardDescription>
          </div>
<Skeleton className="w-45 h-10"/>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Stats Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
  {/* Stats Section */}
  <div className="grid grid-cols-2 gap-y-6 gap-x-8 md:flex md:flex-row md:space-x-10 w-full">
    {[
      { count: "1+", label: "Year of Experience" },
      { count: "19+", label: "Project Completed" },
      { count: "50+", label: "Happy Client" },
    ].map(({ count, label }, i) => (
      <div
        key={i}
        className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left"
      >
        <Skeleton className="w-17 h-17"/>
        <Skeleton className="w-20 h-3"/>
      </div>
    ))}
  </div>

 
  
</div>


        {/* Tech Stack */}
        <div className="flex flex-col items-start  space-y-4">
          <Skeleton className="w-full h-9" />
          <div className="grid grid-cols-8 gap-3">
  {Array.from({ length: 16 }).map((_, index) => (
    <div key={index}>
      <Skeleton className="w-23 h-23" />
    </div>
  ))}
</div>
        </div>

        {/* Testimonials + Current Building */}
        <div className="space-y-8">
          <TestimonialsSection />
          <CurrentBulding />

        </div>
      </CardContent>
    </Card>
</div>
      )
    }


  return (
    <Card className="dark:bg-black ">
      <CardHeader className="mt-4 space-y-4">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2">
            <CardTitle className="text-[26px] sm:text-3xl md:text-[40px] font-bold tracking-tighter">
              Hi, This Is{" "}
              <span className="text-[#4770ff]">Achref Mehri</span> 👋
            </CardTitle>
            <CardDescription className="text-[18px] font-semibold sm:text-[24px] tracking-tighter max-w-xl">
              <span className="text-black   dark:text-white">
                Full Stack Developer 💻
              </span>{" "}
              crafting sleek web apps for{" "}
              <span className="text-black   dark:text-white">
                small businesses in Tunisia
              </span>{" "}
              with clean code and smart design.
            </CardDescription>
          </div>

          <div className="flex bg-accent dark:bg-[#0e1018] text-blue-600 px-4 py-2 rounded-md items-center space-x-2 self-start md:self-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="tracking-tighter text-sm md:text-[16px] font-medium">
              Available For Hire
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Stats Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
  {/* Stats Section */}
  <div className="grid grid-cols-2 gap-y-6 gap-x-8 md:flex md:flex-row md:space-x-10 w-full">
    {[
      { count: "1+", label: "Year of Experience" },
      { count: "19+", label: "Project Completed" },
      { count: "50+", label: "Happy Client" },
    ].map(({ count, label }, i) => (
      <div
        key={i}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <span className="text-[32px] sm:text-[40px] font-bold">{count}</span>
        <span className="text-sm text-gray-600 dark:text-[#3a415b]">
          {label}
        </span>
      </div>
    ))}
  </div>

  {/* Circle only visible on md+ */}
  <div className="hidden md:relative md:block w-[100px] h-[100px] mt-6 md:mt-0">
    <div className="text-cicle absolute inset-0 animate-spin-slow flex items-center justify-center">
      <Image
        src="/circle-text.svg"
        alt="CircleText"
        height={100}
        width={100}
        className="pointer-events-none"
      />
    </div>
    <div className="absolute top-1/2 left-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2 bg-[#4770ff] flex items-center justify-center rounded-full z-10">
      <Image src="/arrow.svg" alt="Arrow" height={30} width={30} />
    </div>
  </div>
</div>


        {/* Tech Stack */}
        <div className="flex flex-col items-start  space-y-4">
          <span className="text-[24px] sm:text-2xl md:text-[30px] tracking-tighter font-medium sm:font-semibold">
            Building with 20+ Powerful Tools 🛠️ Across the Stack
          </span>
          <img
            className="w-full max-w-full h-auto"
            src="https://skillicons.dev/icons?i=js,react,nextjs,css,express,figma,ps,postgres,tailwind,github,html,mongodb,prisma,nodejs,firebase,graphql&perline=8"
            alt="Tech stack icons"
          />
        </div>

        {/* Testimonials + Current Building */}
        <div className="space-y-8">
          <TestimonialsSection />
          <CurrentBulding />

<div className="overflow-hidden bg-gray-100 dark:bg-[#0e1018] py-4 rounded-lg whitespace-nowrap">
  <div className="marquee-text text-[36px]  tracking-tighter font-medium text-center dark:text-[#576076] text-[#212529]">
    <Link href="/contact">
    {"Let's 👋 Work Together — ".repeat(20)}
    </Link>
  </div>
</div>

        </div>
      </CardContent>
    </Card>
  );
};
