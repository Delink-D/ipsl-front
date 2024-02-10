import { Routes } from '@angular/router';
import { UserService } from './services/user.service';

export const routes: Routes = [
  {
    path: 'users',
    providers: [UserService],
    loadChildren: () => import('./users/users.routes').then(routes => routes.UsersRoutes)
  }
];
