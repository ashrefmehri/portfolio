"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const RecentProjects = () => {

  const [loading, setLoading] = useState(true);
  
    const delay = 1000;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [delay]);


  const projects = [
    {
      title: "FlowSaas",
      description: "Your Ultimate Email Marketing & Automation Solution.",
      image: "/project-1.png", // You should update this path
      tag: "Product Design",
      link: "#",
    },
    {
      title: "AIMag",
      description: "Unlock 10X Faster & More Responsive AI-Powered Copywriting Tool.",
      image: "/project-2.png", // You should update this path
      tag: "Product Design",
      link: "#",
    },
  ];

  if(loading) {
    return(
      <Card className="dark:bg-black w-full">
      <CardHeader className="flex ">
        <Skeleton className="w-full h-9"/>
      </CardHeader>

      <CardContent className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl overflow-hidden ">
            <div className=" w-full h-[230px]">
              <>
        <Skeleton className="w-full h-full"/>
      </>
            </div>
           
          </div>
        ))}
      </CardContent>
    </Card>
    )
  }

  return (
    <Card className="dark:bg-black w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Recent Projects</CardTitle>
        <Link href="#" className="text-blue-600 font-medium text-sm hover:underline">
          All Projects →
        </Link>
      </CardHeader>

      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl overflow-hidden border shadow-sm">
            <div className="relative w-full h-[230px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white text-blue-600 text-xs font-medium px-3 py-1 rounded-full shadow">
                {project.tag}
              </div>
            </div>
           
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
