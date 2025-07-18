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
        className={`w-full h-16 md:h-24 transition-all duration-300 flex items-center ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-full md:max-w-6xl 2xl:max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-8 px-3 2xl:px-0">
              <Link
                href="/"
                className="relative text-lg md:text-xl font-bold tracking-wider group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 blur-sm rounded-lg transform group-hover:scale-110 transition-transform duration-300"></span>
                <span className="relative bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent backdrop-blur-sm p-2 rounded-lg border border-white/20">
                  MovieMax
                </span>
              </Link>
              <div className="relative hidden md:flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search movies..."
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/50 backdrop-blur-sm w-64 2xl:w-96 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>
              <div className="hidden md:flex items-center">
                {mobileNavigation
                  .filter(
                    (item) =>
                      item.label !== "Favorites" &&
                      item.label !== "Account"
                  )
                  .map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      className="text-base mr-6 hover:text-white/70 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-7">
              {mobileNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <>
                    {(item.label === "Favorites" ||
                      item.label === "Account") && (
                      <Icon
                        key={item.href}
                        className="size-5"
                      />
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
