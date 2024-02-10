import { Routes } from "@angular/router";

export const UsersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/users-list/user-list.component').then(c => c.UserListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./components/user/user.component').then(c => c.UserComponent)
  }
]
