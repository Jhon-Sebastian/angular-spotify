import { Routes } from '@angular/router';
import { playListResolve } from './components/main-contain/resolvers/playlist.resolve';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './components/main-contain/components/main-container/main-content.component'
      ).then((m) => m.MainContentComponent),
  },
  {
    path: 'playlist/:id',
    loadComponent: () =>
      import(
        './components/main-contain/components/playlist/playlist.component'
      ).then((m) => m.PlaylistComponent),
    resolve: {
      playlist: playListResolve,
    },
  },
];
