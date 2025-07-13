import { useQuery } from "@tanstack/react-query";
import { fetchGenre } from "@/api/tmdb";
import { GenresType } from "@/types/type";

export const useGenre = (movieGenreIds?: number[]) => {
  return useQuery({
    queryKey: ["genre", movieGenreIds], // include IDs in key to refetch if they change
    queryFn: async () => {
      const { genres } = await fetchGenre();

      const genreMap = Object.fromEntries(
        genres.map((g: GenresType) => [g.id, g.name])
      );

      // If no movieGenreIds passed, return all genres
      if (!movieGenreIds) return genreMap;

      // Return only genres that match the movieGenreIds
      const filtered = movieGenreIds.reduce((acc, id) => {
        if (genreMap[id]) {
          acc[id] = genreMap[id];
        }
        return acc;
      }, {} as Record<number, string>);

      return filtered;
    },
    enabled: !!movieGenreIds, // optionally disable if no ids
    refetchOnWindowFocus: false,
  });
};
