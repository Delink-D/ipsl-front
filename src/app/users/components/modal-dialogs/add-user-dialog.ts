import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { User } from '../../../models/user';

import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  standalone: true,
  imports: [AddUserComponent],
  template: `
    <app-add-user (userSaved)="saveUser($event)" [user]="user"></app-add-user>
  `
})
export class AddUserDialog {
  user!: User;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data?.user;
  }

  /**
   * Close the dialog with data 
   * @param event saved object from form
   */
  saveUser(event: Event) {
    this.dialogRef.close(event);
  }
}
