"use client";

import React from "react";

import { usePopular } from "@/hooks/use-popular";
import { useNowPlaying } from "@/hooks/use-now-playing";

import Hero from "@/components/hero";
import Movies from "@/components/ui/movies";

export default function Page() {
  const { data: { results } = {} } = usePopular();
  const { data: { results: nowPlaying } = {} } =
    useNowPlaying();

  const popular = results?.slice(0, 6);
  const latest = nowPlaying?.slice(0, 6);

  return (
    <>
      <Hero />
      <Movies heading="Trending" movies={popular} />
      <Movies heading="Latest" movies={latest} />
    </>
  );
}
