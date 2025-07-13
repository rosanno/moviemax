import React from "react";
import { ChevronRight, Play, Tv } from "lucide-react";
import Link from "next/link";

import { MovieType } from "@/types/type";
import Movie from "@/components/movie";

type MoviesProps = {
  movies: MovieType[] | undefined;
  heading: string;
};

export default function Movies({
  heading,
  movies,
}: MoviesProps) {
  return (
    <div className="px-3 md:px-10 w-full md:max-w-6xl 2xl:max-w-[1800px] mx-auto">
      <div>
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xl md:text-4xl font-semibold">
            {heading}
          </h2>
          <Link
            href="/trending"
            className="text-sm md:text-base flex items-center gap-1"
          >
            More{" "}
            <ChevronRight className="size-4 md:size-5" />
          </Link>
        </div>
        <div className="mt-1 md:mt-4 mb-4 space-x-3 flex items-center">
          <button className="text-xs md:text-base border border-white/30 backdrop-blur-md bg-white/30 hover:bg-white/20 transition-all duration-300 rounded-full px-3 py-1 md:px-5 md:py-2 flex items-center gap-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            <Play className="size-4 md:size-5" />
            Movies
          </button>
          <button className="text-xs md:text-base border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-full px-3 py-1 md:px-5 md:py-2 flex items-center gap-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            <Tv className="size-4 md:size-5" /> TV Shows
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-2.5 gap-y-5 md:gap-x-5">
          {movies?.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
