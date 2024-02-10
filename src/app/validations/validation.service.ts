import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      'required': 'This field is required',
      'invalidWebsite': 'Invalid website'
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

}
