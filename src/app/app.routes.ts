import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth-guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'tvseries',
    loadComponent: () => import('./views/series/series').then((m) => m.Series),
    canActivate: [authGuard],
  },
  {
    path: 'tvseries/:id',
    loadComponent: () =>
      import('./views/series-details/series-details').then((m) => m.SeriesDetails),
    canActivate: [authGuard],
  },

  {
    path: 'castandcrew',
    loadComponent: () => import('./views/cast-crew/cast-crew').then((m) => m.CastCrew),
    canActivate: [authGuard],
  },
  {
    path: 'castandcrew/:id',
    loadComponent: () =>
      import('./views/cast-crew-details/cast-crew-details').then((m) => m.CastCrewDetails),
    canActivate: [authGuard],
  },
  {
    path: 'movies',
    loadComponent: () => import('./views/movies/movies').then((m) => m.Movies),
    canActivate: [authGuard],
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./views/movie-details/movie-details').then((m) => m.MovieDetails),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./views/register/register').then((m) => m.Register),
  },

  {
    path: '505',
    loadComponent: () => import('./views/server-error/server-error').then((m) => m.ServerError),
  },
  {
    path: '404',
    loadComponent: () => import('./views/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./views/not-found/not-found').then((m) => m.NotFound),
  },
];
