import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      'required': 'This field is required',
      'invalidWebsite': 'Invalid website',
      'invalidLat': 'The latitude is invalid',
      'invalidLng': 'The longitude is invalid'
    };

    return config[validatorName];
  }

  static websiteValidator(control: any) {
    if (control.value) {
      if (control.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
        return null;
      } else {
        return { 'invalidWebsite': true };
      }
    } else {
      return null
    }
  }

  static latValidator(control: any) {
    if (control.value) {
      if (control.value.match(/^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})$/)) {
        return null;
      } else {
        return { 'invalidLat': true }
      }
    } else {
      return null;
    }
  }

  static lngValidator(control: any) {
    if (control.value) {
      if (control.value.match(/^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})?$/)) {
        return null;
      } else {
        return { 'invalidLng': true }
      }
    } else {
      return null;
    }
  }
}
