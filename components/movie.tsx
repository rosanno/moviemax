/* eslint-disable @next/next/no-img-element */
import { MovieType } from "@/types/type";
import React from "react";

type MovieProps = {
  movie: MovieType;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <div>
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_POSTER_URL}${movie.poster_path}`}
        alt={movie.title}
        className="rounded-md overflow-hidden"
      />
      <div className="mt-3">
        <h3 className="text-xs truncate">{movie.title}</h3>
      </div>
    </div>
  );
}
