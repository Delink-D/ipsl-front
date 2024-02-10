import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'validation-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
  @if (errorMessage !== null) {
    <div>{{errorMessage}}</div>
  }
  `,
  styles: ['div { border-left: 3px solid red; padding-left: 5px; color: red; margin-bottom: 10px; }']
})
export class ValidationMessagesComponent {
  @Input() control!: AbstractControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.touched) && (this.control.errors.hasOwnProperty(propertyName) || this.control.pristine)) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors);
      }
    }

    return null;
  }
}
