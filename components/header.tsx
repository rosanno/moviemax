"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import MobileNavigation, {
  mobileNavigation,
} from "@/components/mobile-navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MobileNavigation />
      <div
        className={`fixed z-[999] inset-x-0 h-14 md:h-20 flex items-center md:px-7 w-full md:max-w-6xl 2xl:max-w-[1800px] mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-3 w-full gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="relative text-lg md:text-xl font-bold tracking-wider group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 blur-sm rounded-lg transform group-hover:scale-110 transition-transform duration-300"></span>
              <span className="relative bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent backdrop-blur-sm p-2 rounded-lg border border-white/20">
                MovieMax
              </span>
            </Link>
            <div className="hidden md:flex items-center">
              {mobileNavigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="text-lg mx-6 hover:text-white/70 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search movies..."
              className="bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/50 backdrop-blur-sm w-64 transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          </div>
        </div>
      </div>
    </>
  );
}
