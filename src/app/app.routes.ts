import { Routes } from '@angular/router';
import { UserService } from './services/user.service';

export const routes: Routes = [
  {
    path: 'users',
    providers: [UserService],
    loadComponent: () => import('./users/components/users-list/user-list.component').then(m => m.UserListComponent)
  }
];
