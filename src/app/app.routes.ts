import { Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { ValidationService } from './validations/validation.service';

export const routes: Routes = [
  {
    path: 'users',
    providers: [UserService, ValidationService],
    loadChildren: () => import('./users/users.routes').then(routes => routes.UsersRoutes)
  }
];
