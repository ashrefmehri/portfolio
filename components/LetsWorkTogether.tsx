"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { CornerDownRight, LaptopIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const LetsWorkTogether = () => {

  const [loading, setLoading] = useState(true);
  
    const delay = 1000;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [delay]);

if (loading){
  return(
    <Card className=" dark:bg-black">
      <CardHeader className=" ">
        <Skeleton className="w-full h-10" />
      </CardHeader>
      <CardContent className="w-full ">
        <CardTitle className="  flex flex-col space-y-2 ">
          <Skeleton className="w-30 h-14"/>
          <Skeleton className="w-50 h-15"/>
        </CardTitle>
      </CardContent>
      <CardFooter>
        <Skeleton className="w-30 h-6"/>
      </CardFooter>
    </Card>
  )
}

  return (
    <Card className="p-5 dark:bg-black">
      <CardHeader className="w-full bg-gray-100 overflow-hidden whitespace-nowrap rounded-md p-3.5 ">
        <CardTitle className="marquee-text  tracking-tight text-black">
          Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences 🎨
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full p-1">
        <CardTitle className="text-[40px] font-bold tracking-tight flex flex-col">
          <span>Let's👋</span>
          <span>Work Together</span>
        </CardTitle>
      </CardContent>
      <CardFooter>
        <Link
          href="/talk"
          className="flex rounded-md  items-center gap-1.5 transition-colors "
        >
          <span className="  text-blue-600 font-semibold tracking-tight">
            Let's Talk
          </span>
          <CornerDownRight className="w-4 h-4 -rotate-40  text-blue-600" />
        </Link>
      </CardFooter>
    </Card>
  );
};
