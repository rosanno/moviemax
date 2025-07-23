"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, Search, UserCircle, X } from "lucide-react";
import MobileNavigation, {
  mobileNavigation,
} from "@/components/mobile-navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      <MobileNavigation />
      <div
        className={`fixed top-0 z-50 w-full h-16 md:h-24 flex items-center transition-all duration-500 ease-in-out ${
          scrolled &&
          "bg-black/40 backdrop-blur-lg opacity-100"
        }`}
      >
        <div className="custom-container">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-8 2xl:px-0">
              <Link
                href="/"
                className="relative text-lg md:text-xl font-bold tracking-wider group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 blur-sm rounded-lg transform group-hover:scale-110 transition-transform duration-300"></span>
                <span className="relative bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent backdrop-blur-sm p-2 rounded-lg border border-white/20">
                  MovieMax
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-x-3">
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
            <div className="hidden md:flex items-center gap-x-6">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search movies..."
                  className={`bg-white/10 border border-white/20 rounded-md px-4 py-2 pl-10 pr-4 text-sm placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 ${
                    isSearchOpen
                      ? "opacity-100 w-64 2xl:w-96 pointer-events-auto"
                      : "opacity-0 w-0 pointer-events-none"
                  }`}
                />
                {isSearchOpen ? (
                  <X
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50 cursor-pointer"
                    onClick={() => setIsSearchOpen(false)}
                  />
                ) : (
                  <Search
                    className="w-5 h-5 text-white/80 cursor-pointer"
                    onClick={() => setIsSearchOpen(true)}
                  />
                )}
              </div>

              <button>
                <Heart className="size-5" />
              </button>
              <button>
                <UserCircle className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
