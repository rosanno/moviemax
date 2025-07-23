/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Play, PlusCircle } from "lucide-react";

import { useLogo } from "@/hooks/use-logo";
import { MovieType } from "@/types/type";

import Button from "@/components/ui/button";

type SliderProps = {
  movie: MovieType;
  currentSlide: number;
};

export default function SlideItem({
  movie,
  currentSlide,
}: SliderProps) {
  const { data: logo } = useLogo(movie.id);

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const size = isBigScreen
    ? "original"
    : isMediumScreen || isSmallScreen
    ? "w500"
    : "w300";

  const overviewText = isBigScreen
    ? movie.overview.slice(0, 300) + "..."
    : isMediumScreen
    ? movie.overview.slice(0, 200) + "..."
    : movie.overview.slice(0, 120) + "...";

  return (
    <div
      className="relative min-w-full h-[45vh] sm:h-[60vh] md:h-[70vh] 2xl:h-screen transition-transform duration-500"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_BACKDROP_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="custom-container">
        <div className="absolute bottom-6 sm:bottom-1/2 sm:translate-y-1/2 px-2.5 sm:w-lg md:w-xl 2xl:w-2xl 2xl:px-0">
          {/* <h1 className="text-4xl md:text-5xl 2xl:text-[80px] font-cinzel font-bold text-white mb-1">
            {movie.title}
          </h1> */}
          {logo && (
            <img
              src={`https://image.tmdb.org/t/p/${size}${logo.file_path}`}
              alt="Movie Logo"
              className="w-44 sm:w-auto"
              style={{
                aspectRatio: `${logo.aspect_ratio}`,
              }}
            />
          )}
          <div className="pt-2 2xl:pt-4">
            <p className="text-white leading-5 text-xs sm:text-base sm:leading-7 tracking-wide pr-8 md:pr-0">
              {overviewText}
            </p>
          </div>
          <div className="mt-3 2xl:mt-6 flex items-center gap-4">
            <Button
              variant="outline"
              className="text-xs sm:text-sm md:text-base py-1.5 sm:py-2"
            >
              <PlusCircle className="size-4" />
              Add To Watch List
            </Button>
            <Button
              variant="primary"
              className="text-xs sm:text-sm md:text-base py-1.5 sm:py-2"
            >
              <Play className="size-4" />
              Watch Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
