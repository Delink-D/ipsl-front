
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { PipesModule } from '../../../pipes/pipes.module';
import { AppMaterialModule } from '../../../material/material.module';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, PipesModule],
  providers: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user!: User;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    const pathUserId = this.route.snapshot.paramMap.get('id');
    this.userId = pathUserId ? +pathUserId : 0;
  }

  ngOnInit(): void {
    this.getUser(); // get a single user
  }

  /**
   * Fetch single user from the API
   */
  getUser() {
    if (!this.userId || isNaN(this.userId)) {
      this.snackBar.open(`Invalid user id (${this.userId}), try another user id`, 'Error', { duration: 6000 })
      this.router.navigate(['/users']); // redirect to users list
      return;
    }

    this.userService.getSingleUser(this.userId).subscribe(
      (response) => this.user = response,
      (error: any) => {
        console.log(error);
        this.snackBar.open(`Error getting the user: ${this.userId}`, 'Error', { duration: 6000 });
        // redirect back to users list
        this.router.navigate(['/users']); // redirect to users list
      },
      () => console.log('Completed fetching the user')
    )
  }
}
