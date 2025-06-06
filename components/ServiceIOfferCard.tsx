"use client"


import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ServiceIOfferCard = () => {

  const [loading, setLoading] = useState(true);
  
    const delay = 1000;
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, delay);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [delay]);

  const services = [
    {
      icon: <PanelsTopLeft className="w-20 h-20 text-[#4f46e5]" />,
      name: "Full Stack Dev",
    },
    {
      icon: <PanelsTopLeft className="w-20 h-20 text-[#4f46e5]" />,
      name: "Web App Design",
    },
    {
      icon: <PanelsTopLeft className="w-20 h-20 text-[#4f46e5]" />,
      name: "SaaS Development",
    },
    {
      icon: <PanelsTopLeft className="w-20 h-20 text-[#4f46e5]" />,
      name: "Frontend UI",
    },
  ];



  if(loading) {
    return(
      <Card className="dark:bg-black">
<CardHeader className="flex ">
        <Skeleton className="w-full h-9"/>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((elem, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
          >
            <div className=" flex flex-col items-center justify-center rounded-[20px] p-4">
              <Skeleton className="w-40 h-37" />
            </div>
          </div>
        ))}
      </CardContent>
      </Card>
    )
  }


  return (
    <Card className="dark:bg-black">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Services I Offered</CardTitle>
        <Link
          href="#"
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          See All Services →
        </Link>
      </CardHeader>

      {/* Grid layout for consistency on all screens */}
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((elem, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
          >
            <div className="bg-[#f4f5f7] dark:bg-[#212529] flex flex-col items-center justify-center rounded-[20px] p-4">
              <div className="bg-white dark:bg-black px-10 py-5 rounded-[12px]">
                {elem.icon}
              </div>
              <span className="mt-3 text-[15px] font-medium tracking-tight dark:text-muted-foreground">
                {elem.name}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
