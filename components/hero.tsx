/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import { useNowPlaying } from "@/hooks/use-now-playing";
import { MovieType } from "@/types/type";

import Loader from "@/components/ui/loader";
import SlideItem from "./slide-item";

export default function Hero() {
  const [currentSlide, setCurrentSlide] =
    useState<number>(0);
  const {
    data: { results } = {},
    isLoading: movieLoading,
  } = useNowPlaying();

  const nowPlaying = results?.slice(0, 5);

  if (movieLoading) return <Loader />;

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {nowPlaying?.map((movie: MovieType) => (
          <SlideItem
            key={movie.id}
            movie={movie}
            currentSlide={currentSlide}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-6 2xl:bottom-36 left-1/2 transform -translate-x-1/2 flex items-center md:hidden space-x-2">
        {nowPlaying?.map((_: any, index: number) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-colors duration-300 ${
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
