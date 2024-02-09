import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./users/components/users-list/user-list.component').then(m => m.UserListComponent)
  }
];
