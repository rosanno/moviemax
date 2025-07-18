import { useGenre } from "./use-genre";
import { filterGenresByIds } from "@/utils/genre";

export const useFilteredGenres = (movieGenreIds?: number[]) => {
  const { data: genreMap, isLoading, error } = useGenre();

  const filtered = genreMap
    ? filterGenresByIds(genreMap, movieGenreIds)
    : {};

  return {
    filtered,        // filtered genre map (e.g., {28: "Action", 12: "Adventure"})
    allGenres: genreMap ?? {}, // full genre map
    isLoading,
    error,
  };
};
