"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const WorkExperience = () => {

   const [loading, setLoading] = useState(true);
  
    const delay = 1000;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [delay]);
  const experience = [
    {
      period: "Mar – Aug 2024",
      company: "Full-Stack Development Bootcamp",
      role: "Trainee Developer",
      description:
        "Worked on 5 real-world projects while learning full-stack development. Gained hands-on experience in building responsive, modern web applications.",
    },
    {
      period: "Sep – Dec 2024",
      company: "Freelance",
      role: "Full Stack Developer",
      description:
        "Built websites and web apps for small businesses. Focused on performance, clean code, and responsive design tailored to client needs.",
    },
    {
      period: "Jan – Apr 2025",
      company: "Internship",
      role: "Junior Developer Intern",
      description:
        "Contributed to frontend features, backend APIs, and deployment processes in a collaborative team environment.",
    },
  ];

  if(loading){
    return (
       <Card className="dark:bg-black">
      <CardHeader>
        <Skeleton className="w-full h-9"></Skeleton>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-5">
        {experience.map((elem, idx) => (
          <div key={idx} className="flex items-start gap-6">
            <Skeleton className="min-w-[100px] h-6 "></Skeleton>
            <div className="flex flex-col space-y-2.5">
              <Skeleton className="w-60 h-5.5"></Skeleton>
              <Skeleton className="w-2/3 h-4"></Skeleton>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
    )
  }



  return (
    <Card className="dark:bg-black">
      <CardHeader>
        <CardTitle className="text-2xl">Practical Experience</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-5">
        {experience.map((elem, idx) => (
          <div key={idx} className="flex items-start gap-6">
            <span className="min-w-[100px] text-sm tracking-tight text-muted-foreground">{elem.period}</span>
            <div className="flex flex-col">
              <span className="text-base font-medium tracking-tight">{elem.role}</span>
              <span className="text-sm tracking-tight text-muted-foreground">{elem.company}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
