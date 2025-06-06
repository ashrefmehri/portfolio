"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Copy, Github, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Skeleton } from "./ui/skeleton";

export const PersonalCard = () => {
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const email = "ashrefmehri24@gmail.com";
  const delay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [delay]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);

        // Clear any previous timeout to avoid overlap
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Hide message after 5 seconds
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
        }, 500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  if (loading) {
    return (
      <Card className="dark:bg-black">
        <CardHeader className="flex space-y-4 flex-col ">
          <Skeleton className=" w-full h-64.5 flex items-center justify-center rounded-md"></Skeleton>
          <div className="flex flex-col space-y-2">
            <Skeleton className="w-40 h-8" />
            <CardDescription className="space-y-2 mt-2">
              <Skeleton className="w-85 h-4" />
              <Skeleton className="w-70 h-4" />
              <Skeleton className="w-55 h-4" />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center w-full gap-5">
          <Skeleton className="w-full h-15" />
          <Skeleton className="w-full h-15" />
        </CardContent>
        <CardFooter className="flex space-x-2 pb-1">
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-10 h-10" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="dark:bg-black">
      <CardHeader className="flex space-y-4 flex-col ">
        <div className="bg-black w-full flex items-center justify-center rounded-md">
          <Image
            src="/me.png"
            alt="Profile"
            height={100}
            width={176}
            objectFit=""
          />
        </div>
        <div className="flex flex-col space-y-2">
          <CardTitle className="text-2xl font-semibold">
            Achref Mehri 👋
          </CardTitle>
          <CardDescription className="text-[16px] font-semibold tracking-tight">
            <span className="text-black dark:text-white">
              Full Stack Developer 💻
            </span>{" "}
            crafting sleek web apps for
            <span className="text-black dark:text-white">
              {" "}
              small businesses in Tunisia
            </span>{" "}
            with clean code and smart design.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center w-full gap-5">
        <Link
          href=""
          className="flex items-center bg-[#4770ff] py-4 gap-2 rounded-md justify-center w-full"
        >
          <PhoneCall className="text-white" />
          <span className="text-white">Book A call</span>
        </Link>
        <div
          onClick={handleCopy}
          className="relative cursor-pointer flex items-center py-4 gap-2 rounded-md border  justify-center w-full"
        >
          {isCopied && (
            <div className="absolute flex items-center justify-center -top-7.5 bg-black dark:bg-[#4770ff]  px-3 py-1 rounded-md">
              <span className="text-white text-xs tracking-tight font-medium">
                Copied to clipboard
              </span>
            </div>
          )}
          <button className=" cursor-pointer flex items-center gap-2">
            <Copy />
            <span>Copy Email</span>
          </button>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-2 pb-1">
        <a
          href="https://github.com/ashrefmehri"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 border cursor-pointer  hover:text-[#4770ff] rounded-md"
        >
          <Github className="w-5 h-5 " />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/achrefmehri/"
          className="p-2 cursor-pointer  hover:text-[#4770ff] border rounded-md"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/achref.mehri.77"
          rel="noopener noreferrer"
          target="_blank"
          className="p-2 cursor-pointer  hover:text-[#4770ff] border rounded-md"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </CardFooter>
    </Card>
  );
};
