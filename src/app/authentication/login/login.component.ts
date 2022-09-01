import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { ILogin } from './../types/auth.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginSubscription!: Subscription;
  errorSubscription!: Subscription;

  errorMessage!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private errorHandlerServise: ErrorHandlerService) { }

  loginForm  = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  get username() {
    return this.loginForm.get('username');
  }


  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.errorSubscription = this.errorHandlerServise.ErrorMessage.subscribe(errorMessage => {
      this.errorMessage = errorMessage
    })
  }


  login() {

    const username = this.username?.value!;
    const password = this.password?.value!;


    const userLoginData: ILogin = {
      username,
      password
    }

    this.loginSubscription =  this.authService.login(userLoginData)
    .subscribe({
      next: () => {},
      error:
        this.errorHandlerServise.handleError.bind(this.errorHandlerServise)
    })
  }

  get formIsValid() {
    return this.loginForm.valid;
  }

  hasRequiredError(key: string) {

    return  this.isEmpty(key) && (! this.isPristine(key));

  }

  isEmpty(key: string) {
    return this.loginForm.get(key)?.value == "";
  }

  isPristine(key: string) {
    return this.loginForm.get(key)?.pristine;
  }

  ngOnDestroy(): void {
    if(this.loginSubscription)
      this.loginSubscription.unsubscribe();

    if(this.errorSubscription)
    {
      this.errorSubscription.unsubscribe();
    }
  }

}
