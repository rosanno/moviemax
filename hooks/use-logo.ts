import { useQuery } from "@tanstack/react-query";

import { LogosResponseType } from "@/types/type";

import { fetchLogo } from "@/api/tmdb";

export const useLogo = (id: number) => {
  return useQuery<LogosResponseType>({
    queryKey: ["logo", id],
    queryFn: async () => {
      const res = await fetchLogo(id);

      const englishLogo = res.find((logo: LogosResponseType) => logo.iso_639_1 === "en");

      return englishLogo ?? null; // return null if not found
    },
    enabled: !!id, // only run if id is valid
    refetchOnWindowFocus: false,
  });
};
