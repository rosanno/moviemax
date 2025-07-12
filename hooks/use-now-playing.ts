import { useQuery } from "@tanstack/react-query";

import { fetchNowPlaying } from "@/api/tmdb";
import { MoviesResponseType } from "@/types/type";

export const useNowPlaying = () => {
  return useQuery<MoviesResponseType>({
    queryKey: ["now-playing"],
    queryFn: fetchNowPlaying,
  });
};
