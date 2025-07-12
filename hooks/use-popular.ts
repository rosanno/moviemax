import { useQuery } from "@tanstack/react-query";


import { MoviesResponseType } from "@/types/type";
import { fetchPapular } from "@/api/tmdb";

export const usePopular = () => {
  return useQuery<MoviesResponseType>({
    queryKey: ["popular"],
    queryFn: fetchPapular,
  });
};
