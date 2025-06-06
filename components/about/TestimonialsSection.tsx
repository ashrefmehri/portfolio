"use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const testimonials = [
  {
    name: "Sami Jebali",
    role: "Founder - LocalMart Tunisia",
    source: "localmart.tn",
    review:
      "Achref transformed our outdated online shop into a modern, responsive platform. We saw a 30% increase in sales within a month!",
  },
  {
    name: "Mouna Charfi",
    role: "Startup Coach",
    source: "mentorhub.io",
    review:
      "His clean code and intuitive UI helped our MVP launch ahead of schedule. Achref is a rising star in full-stack dev!",
  },
  {
    name: "Rami Mseddi",
    role: "CEO - EduChallenge",
    source: "educhallenge.tn",
    review:
      "Achref crafted an engaging student quiz experience with gamification. Our users love it and keep coming back.",
  },
  {
    name: "Inès Kefi",
    role: "Designer - Freelance",
    source: "ineskefi.design",
    review:
      "It’s rare to find devs who understand design. Achref brings a designer’s eye to the code, which made collaboration super smooth.",
  },
  {
    name: "Yassine Trabelsi",
    role: "Product Manager - SaaSloop",
    source: "saasloop.com",
    review:
      "From schema design to frontend polish, Achref handled our SaaS dashboard like a pro. He’s reliable and fast.",
  },
  {
    name: "Lina Mhiri",
    role: "Digital Marketer",
    source: "linamhiri.com",
    review:
      "Achref helped build our agency’s portfolio site—SEO-friendly, fast, and beautiful. He even optimized our Core Web Vitals!",
  },
];

export const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const delay = 1000;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [delay]);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 2));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 2 < testimonials.length ? prev + 2 : prev));
  };

  if (loading)
    return (
      <section className="w-full mt-10">
        <div className="md:flex md:space-y-0 space-y-2  items-center md:justify-between gap-2 mb-4">
          <Skeleton className="w-60 h-9" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl "
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex space-x-1 ">
                  <Skeleton className="w-35 h-7" />
                </div>
                <Skeleton className="w-30 h-7" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-2/3 h-5" />
                <Skeleton className="w-1/3 h-5" />
              </div>
              <Skeleton className="w-50 h-5 mt-4" />
            </div>
          ))}
        </div>
      </section>
    );

  return (
    <section className="w-full mt-10">
      <div className="md:flex md:space-y-0 space-y-2  items-center md:justify-between gap-2 mb-4">
        <h2 className="text-[24px] font-medium tracking-tighter">
          Trusted By 6+ Clients
        </h2>
        <div className="flex  items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2.5 border cursor-pointer rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 border cursor-pointer rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {visibleTestimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-xl "
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <a
                href={`https://${item.source}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 bg-white py-1 px-2 rounded-md text-xs font-medium hover:underline"
              >
                {item.source} ↗
              </a>
            </div>
            <p className="text-gray-800 mt-5 tracking-tighter dark:text-gray-300  md:text-[18px] mb-4">
              "{item.review}"
            </p>
            <p className="text-gray-900 tracking-tighter  dark:text-white font-semibold text-[14px]">
              {item.name}{" "}
              <span className="text-gray-500 dark:text-gray-400 font-normal">
                - {item.role}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
