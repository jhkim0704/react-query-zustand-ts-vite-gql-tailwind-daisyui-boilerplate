
import { api } from '@/lib/api';
import { GetMovieResponse, GetMoviesParameterType } from '@/types/movie';
import { _queries, _fragments } from "@/services/api/graphql/queries/country.gql";

const MOVIE_API_URL = import.meta.env.VITE_API_MOVIE_ENDPOINT

export const getMovies: GetMoviesParameterType = async (params) => {
  const { search, page } = params;
  const { data } = await api.get<GetMovieResponse>(
    `${MOVIE_API_URL}?minimum_rating=9&sort_by=year&query_term=${search ?? ''}`
  );
  
  return data
};
