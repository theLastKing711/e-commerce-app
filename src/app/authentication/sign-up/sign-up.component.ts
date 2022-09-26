import { Store } from '@ngxs/store';
import { Title, Meta } from '@angular/platform-browser';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private titleService: Title, private metaService: Meta,
    private store: Store
    ) { }

  signUpForm  = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
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


      this.titleService.setTitle("Create Account - Ecommerce");
      this.metaService.addTag({name: 'description', content: 'By Creating an account you agree to E-commerce Conditions of Use and Privacy Notice'})

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

  hasEmailFormatError(key: string) {

    return (! this.isEmpty(key))  && ( this.isEmailFormatInvalid(key)) &&  this.isTouched(key)

  }

  isEmpty(key: string) {
    return this.signUpForm.get(key)?.value == "";
  }

  isTouched(key: string) {
    return this.signUpForm.get(key)?.touched
  }

  isPristine(key: string) {
    return this.signUpForm.get(key)?.pristine;
  }

  isEmailFormatInvalid(key: string) {

    return this.signUpForm.get(key)?.errors?.['email']

  }

  ngOnDestroy(): void {
    if(this.signUpSubscription)
      this.signUpSubscription.unsubscribe();
  }

}
