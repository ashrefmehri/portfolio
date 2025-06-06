"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  CornerDownRight,
  Home,
  Layers3,
  Menu,
  MessageSquare,
  Moon,
  PenLine,
  ScanLine,
  Sun,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const MobileMenu = () => {
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

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
      </SheetTrigger>
      <SheetContent  className="px-5 py-5" side="left">
        <SheetTitle></SheetTitle>
        <div  className="">
          <Image
            src="/logo.svg"
            alt="Logo"
            height={50}
            width={150}
            className="dark:brightness-200"
          />
        </div>
        <div className="mt-5">
          <nav className="flex flex-col  gap-1.5">
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
        </div>

        <SheetFooter className="w-full">
          <div className="flex  flex-col items-center gap-2">
            <div
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex items-center w-full  gap-2 p-2 transition-colors cursor-pointer"
            >
              {isDark ? (
                <div className="flex w-full justify-center py-3 items-center gap-2   rounded-md dark:bg-[#1a1f2c] ">
                    <Sun className="w-6 h-6 text-yellow-600" />
                    <span className="text-sm text-white/70">Change appearance</span>
                </div>
              ) : (
                <div className="flex items-center w-full justify-center gap-2   rounded-md dark:bg-[#1a1f2c] ">
                <Moon className="w-6 h-6 text-[#1a1f2c]" />
                    <span className="text-sm dark:text-white/70">Change appearance</span>
                </div>
              )}
            </div>

            <Link
              href="/talk"
              className="flex w-full rounded-md py-3 px-5 justify-center items-center gap-1.5 transition-colors bg-[#121316] hover:bg-[#4770ff]"
            >
              <span className="text-white text-[16px] font-semibold tracking-tight">
                Let's Talk
              </span>
              <CornerDownRight className="w-5 h-5 -rotate-40 text-white" />
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
