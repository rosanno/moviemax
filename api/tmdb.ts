import { axiosInstance } from "@/utils/axios-instance";

export const fetchNowPlaying = async () => {
  const res = await axiosInstance.get(
    "movie/now_playing?language=en-US&page=1"
  );
  if (res.status !== 200)
    throw new Error("Something went wrong.");
  return res.data;
};

export const fetchGenre = async () => {
  const res = await axiosInstance.get(
    "/genre/movie/list?language=en-US"
  );
  if (res.status !== 200)
    throw new Error("Something went wrong.");
  return res.data;
};

export const fetchPapular = async () => {
  const res = await axiosInstance.get(
    "movie/popular?language=en-US&page=2"
  );
  if (res.status !== 200)
    throw new Error("Something went wrong.");
  return res.data;
};

export const fetchLogo = async (id: number) => {
  const res = await axiosInstance.get(`movie/${id}/images`);
  if (res.status !== 200)
    throw new Error("Something went wrong.");
  return res.data.logos;
};