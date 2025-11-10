import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'tvseries',
    loadComponent: () => import('./pages/series/series').then((m) => m.Series),
  },
  {
    path: 'tvseries/:id',
    loadComponent: () =>
      import('./pages/series-details/series-details').then((m) => m.SeriesDetails),
  },

  {
    path: 'castandcrew',
    loadComponent: () => import('./pages/cast-crew/cast-crew').then((m) => m.CastCrew),
  },
  {
    path: 'castandcrew/:id',
    loadComponent: () =>
      import('./pages/cast-crew-details/cast-crew-details').then((m) => m.CastCrewDetails),
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies').then((m) => m.Movies),
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./pages/movie-details/movie-details').then((m) => m.MovieDetails),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then((m) => m.Register),
  },

  {
    path: '505',
    loadComponent: () => import('./pages/server-error/server-error').then((m) => m.ServerError),
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
