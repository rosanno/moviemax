import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import { MovieType } from "@/types/type";
import Movie from "@/components/movie";
import Link from "next/link";

type MoviesProps = {
  movies: MovieType[] | undefined;
  heading: string;
};

export default function Movies({
  heading,
  movies,
}: MoviesProps) {
  return (
    <div className="custom-container mt-16">
      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-lg md:text-2xl font-semibold">
          {heading}
        </h2>
        <Link href="/" className="text-sm">
          See All
        </Link>
      </div>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        grabCursor={true}
        spaceBetween={8}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mt-5"
      >
        {movies?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="w-[150px] md:w-[200px] lg:w-[250px]"
          >
            <Movie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
