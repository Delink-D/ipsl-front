import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppMaterialModule } from '../../../material/material.module';

import { User } from '../../../models/user';

import { ValidationService } from '../../../validations/validation.service';
import { ValidationMessagesComponent } from '../../../validations/validation-message.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveFormsModule, ValidationMessagesComponent,
    NgxMatIntlTelInputComponent],
  providers: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Input() set user(user: User) {
    this._user = user ? user : new User();
  } get user(): User { return this._user }
  @Output() userSaved: EventEmitter<any> = new EventEmitter<any>();

  _user: User = new User();
  addUserForm: FormGroup;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [ValidationService.websiteValidator, Validators.minLength(5), Validators.maxLength(255)]),
      image: new FormControl('', [ValidationService.websiteValidator, Validators.minLength(5), Validators.maxLength(1055)]),

      addressStreet: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressSuite: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressCity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      addressZipCode: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
      addressGeoLat: new FormControl('', [ValidationService.latValidator, Validators.minLength(3), Validators.maxLength(255)]),
      addressGeoLng: new FormControl('', [ValidationService.lngValidator, Validators.minLength(3), Validators.maxLength(255)]),

      companyName: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
      companyCatchPhrase: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
      companyBs: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)])
    });
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  /**
   * User form submitted, emit data to parent component
   */
  saveUser() {
    this.userSaved.emit(this.user);
  }
}
