import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppMaterialModule } from '../../../material/material.module';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';
import { ValidationService } from '../../../validations/validation.service';
import { ValidationMessagesComponent } from '../../../validations/validation-message.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveFormsModule,ValidationMessagesComponent],
  providers: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor() {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [ValidationService.websiteValidator, Validators.minLength(5), Validators.maxLength(255)]),
      addressStreet: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressSuite: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressCity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressZipCode: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
      addressGeoLat: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
      addressGeoLng: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
    });
  }
}
