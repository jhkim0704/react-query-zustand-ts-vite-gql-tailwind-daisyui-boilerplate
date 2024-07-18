import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../api/movie.service';
import { GetMovieResponse, GetMoviesProps } from '@/types/movie';

export const useMoviesQuery = (params: GetMoviesProps) =>
  useQuery<GetMovieResponse>(['getArticles', { params }], async () => {
    const res = await getMovies(params);
    return res;
  });