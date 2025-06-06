"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";



export const ExpertArea = () => {


  const [loading, setLoading] = useState(true);

  const delay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [delay]);


  const skills = [
    { name: "React", icon: "/react.svg" },
    { name: "Next Js", icon: "/next.svg" },
    { name: "Tailwind Css", icon: "/tailwindcss.svg" },
    { name: "Node Js", icon: "/node.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "GraphQl", icon: "/graphql.svg" },
  ];

  if(loading){
    return (
      <Card className="dark:bg-black">
      <CardHeader>
        <Skeleton className="w-full h-9"/>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Skeleton className="p-3 w-13 h-13 rounded-full bg-muted dark:bg-zinc-800">
              </Skeleton>
              <Skeleton className="w-20 h-3"></Skeleton>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    )
  }

  return (
    <Card className="dark:bg-black">
      <CardHeader>
        <CardTitle className="text-2xl">My Expert Area</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="p-3 rounded-full bg-muted dark:bg-zinc-800">
                <Image src={skill.icon} alt="Icons" height={27} width={27}/>
              </div>
              <span className="text-[15px] font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
