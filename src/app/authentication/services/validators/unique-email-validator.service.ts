import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueEmailValidatorService {

  constructor(private authService: AuthService) { }



    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
    {

      const email = control.value;

      return this.authService.validateEmailDuplication(email).pipe(
        map(x => x ? null : {emailIsDuplicated: true})
      )
    }

}
