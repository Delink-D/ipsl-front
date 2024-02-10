import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers(); // get all the users
  }

  /**
   * Fetch all the users data 
   */
  getUsers() {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => this.users = response),
      (error: any) => { console.log(error); this.snackBar.open('Error getting list of users', 'Error', { duration: 6000 }) },
      () => console.log('Completed fetching all the users')
  }
}
