import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apikey = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getUpcomingMovies: builder.query({
      query: ({ page = 1 }) =>
        `/movie/upcoming?api_key=${apikey}&language=en-US&page=${page}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/movie?api_key=${apikey}&query=${query}&language=en-US&page=${page}`,
    }),
    getMoviesByGenre: builder.query({
      query: ({ genreId, page = 1 }) =>
        `/discover/movie?api_key=${apikey}&with_genres=${genreId}&sort_by=popularity.desc&page=${page}`,
    }),
    getPopularSeries: builder.query({
      query: ({ page = 1 }) =>
        `/tv/popular?api_key=${apikey}&language=en-US&page=${page}`,
    }),
    searchSeries: builder.query({
      query: ({ query, page = 1 }) =>
        `/search/tv?api_key=${apikey}&query=${query}&language=en-US&page=${page}`,
    }),
  }),
});

export const {
  useGetUpcomingMoviesQuery,
  useSearchMoviesQuery,
  useGetMoviesByGenreQuery,
  useGetPopularSeriesQuery,
  useSearchSeriesQuery,
} = movieApi;