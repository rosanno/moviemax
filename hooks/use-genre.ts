import { useQuery } from "@tanstack/react-query";

import { fetchGenre } from "@/api/tmdb";
import { GenresType } from "@/types/type";

export const useGenre = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: async () => {
      const { genres } = await fetchGenre();

      const genreMap = Object.fromEntries(
        genres.map((g: GenresType) => [g.id, g.name])
      );

      return genreMap;
    },
    refetchOnWindowFocus: false,
  });
};
