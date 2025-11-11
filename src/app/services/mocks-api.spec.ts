import type { TMDBresponse } from './api';
import type { Movie } from '../models/movie';
import type { Tvserie } from '../models/tvserie';
import type { CrewcastMember } from '../models/crewcast-member';

export const mockTMDBresponse: TMDBresponse = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
};
export const mockMovie: Movie = {
  id: 123,
  adult: false,
  backdrop_path: '/mock_backdrop.jpg',
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' }
  ],
  budget: 100000000,
  origin_contry: ['US'],
  original_language: 'en',
  original_title: 'Mock Original Title',
  overview: 'This is a mock overview of the movie used for testing purposes.',
  popularity: 99.5,
  poster_path: '/mock_poster.jpg',
  production_companies: [
    { id: 101, name: 'Mock Studio' }
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' }
  ],
  release_date: '2025-01-01',
  title: 'Mock Movie Title',
  video: false,
  vote_average: 8.7,
  vote_count: 1500
};

export const mockTvserie: Tvserie = {
  backdrop_path: '/mock_tv_backdrop.jpg',
  first_air_date: '2023-05-01',
  genre_ids: [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Thriller' }
  ],
  id: 101,
  name: 'Mock TV Series',
  origin_country: ['US'],
  original_language: 'en',
  original_name: 'Mock Original TV Series',
  overview: 'This is a mock overview of the TV series used for testing purposes.',
  popularity: 85.3,
  poster_path: '/mock_tv_poster.jpg',
  vote_average: 8.5,
  vote_count: 1200,
  created_by: [
    { id: 1, name: 'Mock Creator', profile_path: '/mock_creator.jpg'} as CrewcastMember
  ],
  episode_run_time: [45, 50],
  in_production: true,
  last_air_date: '2025-10-01',
  next_episode_to_air: null,
  networks: [
    { id: 1, name: 'Mock Network', logo_path: '/mock_network_logo.jpg', origin_country: 'US' }
  ],
  number_of_episodes: 24,
  number_of_seasons: 2,
  production_companies: [
    { id: 101, name: 'Mock Studio', logo_path: '/mock_studio_logo.jpg', origin_country: 'US' }
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' }
  ],
  seasons: [
    { season_number: 1, episode_count: 12, name: 'Season 1', air_date: '2023-05-01', poster_path: '/mock_season1.jpg' },
    { season_number: 2, episode_count: 12, name: 'Season 2', air_date: '2024-05-01', poster_path: '/mock_season2.jpg' }
  ],
  status: 'Running',
  type: 'Scripted',
  genres: [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Thriller' }
  ]
};


export const mockCrewcastMember: CrewcastMember = {
  adult: false,
  gender: 2, 
  id: 1001,
  known_for_department: 'Directing',
  name: 'John Doe',
  original_name: 'Johnathan Doe',
  popularity: 75.5,
  profile_path: '/mock_profile.jpg',
  known_for: [
    { id: 101, title: 'Mock Movie 1', media_type: 'movie' },
    { id: 102, title: 'Mock Movie 2', media_type: 'movie' }
  ],
  biography: 'This is a mock biography for testing purposes.',
  birthday: '1975-06-15',
  deathday: null,
  place_of_birth: 'Los Angeles, California, USA'
};