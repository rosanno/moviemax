/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

import { useNowPlaying } from "@/hooks/use-now-playing";

import Loader from "@/components/ui/loader";
import SlideItem from "./slide-item";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    data: { results } = {},
    isLoading: movieLoading,
  } = useNowPlaying();

  const nowPlaying = results?.slice(0, 6);
  const totalSlides = nowPlaying?.length || 0;

  // Auto-slide effect
  useEffect(() => {
    if (!totalSlides) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % totalSlides
      );
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  if (movieLoading) return <Loader />;

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {nowPlaying?.map((movie, index) => (
          <SlideItem
            key={movie.id}
            movie={movie}
            currentSlide={currentSlide}
            index={index}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {nowPlaying?.map((_: any, index: number) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110 ${
              currentSlide === index
                ? "bg-white w-5"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
