"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CurrentBulding = () => {
  const [loading, setLoading] = useState(true);

  const delay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [delay]);

  if (loading)
    return (
      <section className="mt-8">
        <div className=" space-y-3 ">
          <Skeleton className="w-60 h-9" />
          <Skeleton className="w-100 h-5" />
        </div>

        <div className="bg-gray-100 mt-3 dark:bg-zinc-900 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
          <div className="w-full md:w-1/2">
            <Skeleton className="w-80 h-80" />
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <Skeleton className="w-60 h-7" />
            <div className="space-y-2">
              <Skeleton className=" h-4 w-full" />
              <Skeleton className=" h-4 w-3/4" />
              <Skeleton className=" h-4 w-2/4" />
              <Skeleton className=" h-4 w-1/4" />
            </div>
            <ul className=" pl-3 text-sm  md:text-base space-y-2.5">
              <Skeleton className=" h-4 w-full" />
              <Skeleton className=" h-4 w-full" />
              <Skeleton className=" h-4 w-full" />
              <Skeleton className=" h-4 w-full" />
            </ul>
            <Skeleton className=" h-7 w-30" />
       
          </div>
        </div>
      </section>
    );

  return (
    <section className="mt-8">
      <div className=" ">
        <h2 className="text-[30px] font-medium tracking-tighter">
          Currently Building 🔧
        </h2>
        <p className="text-muted-foreground tracking-tighter  text-sm md:text-base">
          A sneak peek into my latest side project, blending education,
          gamification, and tech.
        </p>
      </div>

      <div className="bg-gray-100 mt-3 dark:bg-zinc-900 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
        <div className="w-full md:w-1/2">
          <img
            src="/images/quiz-app-preview.png"
            alt="App Preview"
            className="rounded-lg border shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold tracking-tighter mb-2">
            EduQuest – The Learning Game
          </h3>
          <p className="text-muted-foreground tracking-tighter text-sm md:text-base mb-4">
            EduQuest is a web app that helps students revise science and math
            through interactive quizzes, XP points, and friend leaderboards.
            Built with Next.js, Tailwind, Node.js, and MongoDB.
          </p>
          <ul className=" pl-4 text-sm md:text-base space-y-1">
            <li>🔸 Gamified quizzes for better engagement</li>
            <li>🔸 XP & level system to reward progress</li>
            <li>🔸 Real-time leaderboard with friends</li>
            <li>🔸 Mobile-first UI for quick access</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-5 text-sm font-medium bg-white px-3 py-1 rounded-md tracking-tighter text-blue-600 hover:underline"
          >
            Live Preview ↗
          </a>
        </div>
      </div>
    </section>
  );
};
