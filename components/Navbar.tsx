"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UserRound,
  Layers3,
  ScanLine,
  PenLine,
  MessageSquare,
  CornerDownRight,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [loading, setLoading] = useState(true);

  const delay = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up on unmount
  }, [delay]);

  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: UserRound, href: "/about" },
    { name: "Services", icon: Layers3, href: "/services" },
    { name: "Works", icon: ScanLine, href: "/works" },
    { name: "Blog", icon: PenLine, href: "/blog" },
    { name: "Contact", icon: MessageSquare, href: "/contact" },
  ];

  if (loading) {
    return (
      <div className="w-full  sticky top-0 z-50 bg-white dark:bg-[#000000] flex items-center h-16 md:h-18 justify-between rounded-xl shadow-sm px-3 py-3 transition-colors">
        <div>
          <Skeleton className="w-35 h-12" />
        </div>


        <nav className="hidden  md:flex items-center justify-center gap-1.5">
        {menuItems.map((item) => (
          <Skeleton
            key={item.name}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors w-20 h-10"
            )}
          >
          </Skeleton>
        ))}
      </nav>

{/* Desktop: Theme Toggle & CTA */}
      <div className="hidden md:flex items-center gap-5">
        <Skeleton className="w-10 h-10" />

        <Skeleton
          className="flex rounded-md w-35 h-12 py-3 px-5 items-center gap-1.5 transition-colors"
        >
          
        </Skeleton>
      </div>

      </div>
    );
  }

  return (
    <div className="w-full  sticky top-0 z-50 bg-white dark:bg-[#000000] flex items-center h-16 md:h-18 justify-between rounded-xl shadow-sm px-3 py-3 transition-colors">
      {/* Logo */}
      <div>
        <Image
          src="/logo.svg"
          alt="Logo"
          height={50}
          width={130}
          className="dark:brightness-200"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden  md:flex items-center justify-center gap-1.5">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors",
              pathname === item.href
                ? "bg-gray-100 dark:bg-zinc-800 text-black dark:text-white"
                : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[16px] font-semibold tracking-tight">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* Desktop: Theme Toggle & CTA */}
      <div className="hidden md:flex items-center gap-5">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex items-center gap-2 p-2 transition-colors cursor-pointer"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-600" />
          ) : (
            <Moon className="w-6 h-6 text-[#1a1f2c]" />
          )}
        </button>

        <Link
          href="/talk"
          className="flex rounded-md py-3 px-5 items-center gap-1.5 transition-colors bg-[#1a1f2c] hover:bg-[#4770ff]"
        >
          <span className="text-white text-[16px] font-semibold tracking-tight">
            Let's Talk
          </span>
          <CornerDownRight className="w-5 h-5 -rotate-40 text-white" />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center justify-center">
        <MobileMenu />
      </div>
    </div>
  );
};
