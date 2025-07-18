/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Play } from "lucide-react";
import { useMediaQuery } from "react-responsive";

import { useFilteredGenres } from "@/hooks/use-filtered";
import { useLogo } from "@/hooks/use-logo";
import { MovieType } from "@/types/type";

type SliderProps = {
  movie: MovieType;
  currentSlide: number;
};

export default function SlideItem({
  movie,
  currentSlide,
}: SliderProps) {
  const { filtered, isLoading } = useFilteredGenres(
    movie.genre_ids
  );
  const { data: logo } = useLogo(movie.id);

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 1536px)",
  });

  const size = isBigScreen
    ? "original"
    : isMediumScreen
    ? "w500"
    : "w300";

  return (
    <div
      className="relative min-w-full min-h-[70vh] transition-transform duration-500"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_BACKDROP_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      {/* Add gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
      <div className="w-full md:max-w-6xl md:px-10 2xl:max-w-[1800px] mx-auto">
        <div className="absolute bottom-10 sm:bottom-10 2xl:bottom-48 pl-3 md:pl-0 pr-4 w-sm md:w-xl lg:w-lg 2xl:w-3xl">
          {/* <h1 className="text-4xl md:text-5xl 2xl:text-[80px] font-cinzel font-bold text-white mb-1">
            {movie.title}
          </h1> */}
          {logo && (
            <img
              src={`https://image.tmdb.org/t/p/${size}${logo.file_path}`}
              alt="Movie Logo"
              style={{
                aspectRatio: `${logo.aspect_ratio}`,
              }}
            />
          )}
          <p className="text-white text-sm md:text-base font-cinzel mb-2 md:mb-3 mt-4 italic">
            {isLoading
              ? "Loading genres..."
              : filtered && Object.keys(filtered).length > 0
              ? Object.values(filtered).join(", ")
              : "No genres available"}
          </p>
          <div className="h-16 sm:h-20 2xl:h-full overflow-y-scroll scrollbar">
            <p className="text-white text-sm md:text-base leading-6 md:leading-7 tracking-wide pr-2">
              {movie.overview}
            </p>
          </div>
          <div className="mt-5">
            <button className="relative inline-flex items-center gap-x-1 px-3 py-1.5 md:py-2 md:px-6 text-xs md:text-base rounded-full overflow-hidden group">
              <span className="absolute inset-0 bg-white/30 backdrop-blur-sm"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 border border-white/50 rounded-full"></span>
              <Play className="relative size-4 md:size-5 text-white" />
              <span className="relative text-white">
                Watch Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
