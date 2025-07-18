import { useQuery } from "@tanstack/react-query";
import { fetchGenre } from "@/api/tmdb";
import {
  GenresResponseType,
  GenresType,
} from "@/types/type";

export const useGenre = () => {
  return useQuery<GenresResponseType>({
    queryKey: ["genre"],
    queryFn: async () => {
      const { genres } = await fetchGenre();

      const genreMap = Object.fromEntries(
        genres.map((g: GenresType) => [g.id, g.name])
      );

      return {
        genres, // full array: GenresType[]
        map: genreMap, // quick lookup: Record<number, string>
      };
    },
    refetchOnWindowFocus: false,
  });
};
