import { useQuery } from "@tanstack/react-query";
import { fetchGenre } from "@/api/tmdb";
import { GenresType } from "@/types/type";

export const useGenre = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: async () => {
      const { genres } = await fetchGenre();

      // Convert to map: { [id]: name }
      return Object.fromEntries(
        genres.map((g: GenresType) => [g.id, g.name])
      );
    },
    refetchOnWindowFocus: false,
  });
};
