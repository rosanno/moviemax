import React, { useState } from "react";
import {
  Clapperboard,
  Home,
  LucideIcon,
  Search,
  Tv,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Movies",
    href: "/movies",
    icon: Clapperboard,
  },
  {
    label: "TV show",
    href: "/tv-show",
    icon: Tv,
  },
];

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isSearchActive, setIsSearchActive] =
    useState(false);

  return (
    <div className="fixed bottom-2 z-50 mx-4 w-[calc(100%-32px)] md:hidden flex items-center gap-1.5">
      {/* Navigation links */}
      <div
        className={`rounded-full backdrop-blur-lg bg-black/40 border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isSearchActive
            ? "w-0 opacity-0"
            : "flex-1 opacity-100"
        }`}
      >
        <div className="flex items-center justify-around">
          {mobileNavigation.map((item) => {
            const Icon: LucideIcon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.href}
                className="py-1.5"
              >
                <div
                  className={`flex flex-col items-center gap-y-1 justify-center ${
                    pathname === item.href
                      ? "text-green-400"
                      : "text-white"
                  } transition duration-300`}
                >
                  <Icon className="size-5" />
                  <span className="text-xs">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Search bar with transition */}
      <div
        className={`relative transition-all duration-300 ease-in-out ${
          isSearchActive ? "flex-1" : "w-11"
        }`}
      >
        <div
          className={`rounded-full backdrop-blur-lg bg-black/40 border-white/10 h-11 flex items-center transition-all duration-300 ease-in-out ${
            isSearchActive
              ? "opacity-100 scale-100 px-4"
              : "opacity-0 scale-95 px-0 overflow-hidden"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-white w-full"
            autoFocus={isSearchActive}
          />
          <button
            onClick={() => setIsSearchActive(false)}
            className="ml-2 transition-transform hover:scale-110"
          >
            <X className="size-5 text-white transition-opacity" />
          </button>
        </div>

        {/* Search Icon Button (only show when not active) */}
        {!isSearchActive && (
          <button
            onClick={() => setIsSearchActive(true)}
            className="absolute top-0 right-0 rounded-full backdrop-blur-lg bg-black/40 border-white/10 h-11 w-11 flex items-center justify-center transition-all duration-300 hover:bg-black/60"
          >
            <Search className="size-5 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
