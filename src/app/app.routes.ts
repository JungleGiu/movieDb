import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./pages/landing/landing').then(m => m.Landing)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./pages/movie-details/movie-details').then(m => m.MovieDetails)
  },
  {
    path: '505',
    loadComponent: () => import('./pages/server-error/server-error').then(m => m.ServerError)
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];
