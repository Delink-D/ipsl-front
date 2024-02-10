import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';
import { AppMaterialModule } from '../../../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  providers: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users!: User[];

  displayedColumns: string[] = ['image', 'name', 'email', 'company_name'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
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
      (response: User[]) => {
        this.users = response;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }),
      (error: any) => { console.log(error); this.snackBar.open('Error getting list of users', 'Error', { duration: 6000 }) },
      () => console.log('Completed fetching all the users')
  }

  /**
   * Filter the users table 
   * @param event filter event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * View more details of the selected user
   * @param {number} userId 
   */
  viewUser(userId: number) {
    this.router.navigate(['/users/' + userId]);
  }
}
