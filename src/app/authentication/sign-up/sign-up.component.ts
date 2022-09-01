import { IRegister } from './../types/auth.model';
import { AuthService } from './../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy {

  signUpSubscription!: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  signUpForm  = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  ngOnInit(): void {
  }


  signUp() {

    const username = this.username?.value!;
    const email = this.email?.value!;
    const password = this.password?.value!;


    const signUpFormData = new FormData();

    signUpFormData.append("username", username);

    signUpFormData.append('email', email);

    signUpFormData.append('password', password);



    this.signUpSubscription =  this.authService.register(signUpFormData)
                                                  .subscribe(result => {
                                                    this.router.navigate(['/login'])
                                                  });
  }

  get formIsValid() {
    return this.signUpForm.valid;
  }

  hasRequiredError(key: string) {

    return  this.isEmpty(key) && (! this.isPristine(key));

  }

  isEmpty(key: string) {
    return this.signUpForm.get(key)?.value == "";
  }

  isPristine(key: string) {
    return this.signUpForm.get(key)?.pristine;
  }

  ngOnDestroy(): void {
      this.signUpSubscription.unsubscribe();
  }

}
