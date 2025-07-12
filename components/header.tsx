"use client";

import React from "react";
import Link from "next/link";

import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <>
      <MobileNavigation />
      <div className="fixed z-[999] inset-x-0 h-14 flex items-center">
        <div className="flex items-center justify-between px-3 w-full">
          <Link
            href="/"
            className="text-lg font-bold tracking-wider hover:text-primary transition-colors bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
          >
             MovieMax
          </Link>
        </div>
      </div>
    </>
  );
}
