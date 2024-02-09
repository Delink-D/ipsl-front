import { Component } from '@angular/core';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users!: User[];

  constructor(
    private userService: UserService
  ) {  }
}
