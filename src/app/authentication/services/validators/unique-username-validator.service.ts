import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameValidatorService {

  constructor(private authService: AuthService) { }



    validate (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
    {
      const username = control.value;

      return this.authService.validateUsernameDuplication(username).pipe(
        map(x => x ? null : {usernameIsDuplicated: true})
      )
    }
}
