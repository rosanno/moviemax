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
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US"
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