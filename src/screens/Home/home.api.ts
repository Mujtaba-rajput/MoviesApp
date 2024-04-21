import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.jikan.moe/v4',
  prepareHeaders: async headers => {
    return headers;
  },
});

export const homeApi = createApi({
  reducerPath: 'home/api',
  baseQuery,
  endpoints: build => ({
    getRandomMovies: build.query({
      query: () => {
        return {
          url: 'anime?page=1&limit=25&status=airing',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetRandomMoviesQuery} = homeApi;
