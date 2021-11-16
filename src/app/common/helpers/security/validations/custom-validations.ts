import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ONLY_LETTERS_REGEX, TWO_BLANKS_REGEX, SQL_INJECTION_REGEX } from '../regex/validation-regex';

export class CustomValidation {

    public static onlyLetters(control: AbstractControl): ValidationErrors | null {
      if (typeof control.value === 'string' && control.value.length === 0) {
        return null;
      }
      return (!ONLY_LETTERS_REGEX.test(control.value)) ? { onlyLetters: false } : null;
    }

    public static twoBlanks(control: AbstractControl): ValidationErrors | null {
      return (TWO_BLANKS_REGEX.test(control.value)) ? { twoBlanks: true } : null;
    }

    public static sqlInjection(control: AbstractControl): ValidationErrors | null {
      return (SQL_INJECTION_REGEX.test(control.value)) ? { sqlSintax: true } : null;
    }

}
