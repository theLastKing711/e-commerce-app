import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormValidationService {



  constructor(form: FormGroup) { }


  // hasRequiredError(key: string) {

  //   return  this.isEmpty(key) && (! this.isPristine(key));

  // }


  // hasEmailFormatError<
  //     TControl extends {
  //       [K in keyof TControl]: AbstractControl<any>;
  //   } = any>
  //   (key: string, form: FormGroup<TControl>) {

  //   return (! this.isEmpty(key))  && ( this.isEmailFormatInvalid(key)) &&  this.isTouched(key)

  // }

  // isEmpty<
  // TControl extends {
  //   [K in keyof TControl]: AbstractControl<any>;
  // } = any>
  // (form: FormControl, key: string) {
  //   return this.form.get(key)?.value == "";
  // }

  // isTouched(key: string) {
  //   return this.signUpForm.get(key)?.touched
  // }

  // isPristine(key: string) {
  //   return this.signUpForm.get(key)?.pristine;
  // }

  // isEmailFormatInvalid(key: string) {

  //   return this.signUpForm.get(key)?.errors?.['email']

  // }

}
