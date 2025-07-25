export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesResponseType = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type GenresType = {
  id: number;
  name: string;
};

export type GenresResponseType = {
  genres: GenresType[];
};

export type LogosResponseType = {
  aspect_ratio: number;
  file_path: string;
  heightL: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};