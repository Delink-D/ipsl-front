import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  standalone: true,
  imports: [AddUserComponent],
  template: `
    <app-add-user (saveUser)="saveUser($event)"></app-add-user>
  `
})
export class AddUserDialog {
  constructor(public dialogRef: MatDialogRef<any>) { }

  /**
   * Close the dialog with data 
   * @param event saved object from form
   */
  saveUser(event: Event) {
    this.dialogRef.close(event);
  }
}
