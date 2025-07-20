/* eslint-disable @next/next/no-img-element */
import { MovieType } from "@/types/type";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type MovieProps = {
  movie: MovieType;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <Link href={`movie-details/${movie.id}`}>
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_POSTER_URL}${movie.poster_path}`}
        alt={movie.title}
        className="rounded-md overflow-hidden"
      />
      <div className="mt-3 md:mt-6">
        <h3 className="text-sm truncate mt-3">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs sm:text-sm">
            {movie.release_date.slice(0, 4)}
          </span>
          <div className="flex items-center gap-x-2">
            <StarIcon className="size-4 fill-yellow-500 stroke-yellow-500" />{" "}
            <span className="text-xs sm:text-sm">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
