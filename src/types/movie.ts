export interface Movie {
  id: number;
  title: string;
  keywords: string[];
  year: number;
  runtime: number;
  rating: string;
  url: string;
  small_cover_image: string;
  large_cover_image: string;
  date_uploaded_unix: string;
}

export interface GetMovieResponse {
  data: {
    movies: Movie[]
  }
}

export interface GetMoviesProps {
  search?: string;
  page?: number;
}

export interface GetMoviesParameterType {
  (params: GetMoviesProps): Promise<GetMovieResponse>
}
