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
import { AddUserDialog } from '../modal-dialogs/add-user-dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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

  displayedColumns: string[] = ['image', 'name', 'email', 'company_name', 'action'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dialogRef!: MatDialogRef<any>;

  constructor(
    private router: Router,
    private dialog: MatDialog,
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

  /**
   * Edit selected user for updating
   * @param {User} user 
   */
  editPatient(user: User) {
    console.log('Editing user...', user);
  }

  /**
   * Delete selected user
   * @param {number} userId
   */
  deleteUser(userId: number) {
    console.log('Deleting user...', userId);
  }

  /**
   * Function add user to the database
   */
  addUser() {
    this.dialogRef = this.dialog.open(AddUserDialog, {minWidth: '230px'});
    this.dialogRef.afterClosed().subscribe(results => {
      if (results) {
        console.log('results:', results)
      } else {
        console.log('NO results:')

      }
    })
  }
}
