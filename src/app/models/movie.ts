export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  budget?: number;
  origin_contry?: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: any[];
  production_countries?: any[];
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}