import { TestingHelpersService } from './../../shared/services/testing-helpers.service';
import { SharedModule } from './../../shared/shared.module';

import { HttpClientTestingModule,
HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';

import { SignUpComponent } from './sign-up.component';
import { By } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let debugElement: DebugElement;
  let httpTestingController: HttpTestingController;
  let testingService: TestingHelpersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, SharedModule, CardModule],
    })
    .compileComponents().then(() => {


      httpTestingController = TestBed.inject(HttpTestingController);
      testingService = TestBed.inject(TestingHelpersService)
      fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
    })


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe("SignUp form validation", () => {

    let fillValidFormData: <T>(fixture: ComponentFixture<T>) => void;
    let fillInvalidFormData: <T>(fixture: ComponentFixture<T>) => void;

    beforeAll(() => {

      fillValidFormData = <T>(fixture: ComponentFixture<T>) =>
      {
        const usernameFormValue = "asdf"
        const emailFormValue = "asldfj@gmail.com";
        const passwordFormValue = "alsdjf"


        testingService.setInputsValues(fixture,
          ["username", "email", "password"],
          [usernameFormValue, emailFormValue, passwordFormValue]
        )

      }

       fillInvalidFormData = <T>(fixture: ComponentFixture<T>) =>
      {
        const usernameFormValue = "";
        const emailFormValue = "";
        const passwordFormValue = "";

        testingService.setInputsValues(fixture,
          ["username", "email", "password"],
          [usernameFormValue, emailFormValue, passwordFormValue]
        )

      }

    })

    it('It should be invalid on startup', () => {

      expect(component.signUpForm.valid).toBe(false)

    });

    it('should be valid with correct data input', () => {

      fillValidFormData(fixture);

      expect(component.signUpForm.valid).toBe(true);


    })

    describe("submit button", () => {

      let submitButton: HTMLElement;


      it('should not be disabled with correct data input', () => {

        fillValidFormData(fixture);

        submitButton = testingService.getElementByTestId(fixture, "submit-button")

        expect(submitButton.getAttribute("disabled")).toBeNull();

      })

      it('should be disabled with incorrect data input', () =>{

        fillInvalidFormData(fixture);

        submitButton = testingService.getElementByTestId(fixture, "submit-button")

        expect(submitButton.getAttribute("disabled")).not.toBeNull();

      })


    })

    describe("username input", () => {



      it('it should pass required validation', () => {

        const inputvalue = "abcde"

        testingService.setInputValue(fixture, 'username', inputvalue)

        expect(component.signUpForm.get('username')?.errors?.['required']).toBeFalsy()

      })

      it('it should not pass required validation ', () => {

        const inputvalue = ""

        testingService.setInputValue(fixture, 'username', inputvalue)

        console.log("abcd")

        fixture.detectChanges();

        expect(component.signUpForm.get('username')?.errors?.['required']).toBeTruthy()

        const usernameErrorElement = testingService.getElementByTestId(fixture, 'username-required-error')

        expect(usernameErrorElement.innerHTML).toBeTruthy();

      })


    })


    describe("email input", () => {


      it('it should pass required validation', () => {

        const inputvalue = "abcde"

        testingService.setInputValueAndBlurIt(fixture, 'email', inputvalue)


        expect(component.signUpForm.get('email')?.errors?.['required']).toBeFalsy()


        const emailErrorElement = testingService.getElementByTestId(fixture, 'email-required-error')

        expect(emailErrorElement).toBeFalsy();

      })

      it('it should not pass required validation', () => {

        const inputvalue = ""

        testingService.setInputValue(fixture, 'email', inputvalue)

        console.log("abcd")

        fixture.detectChanges();

        expect(component.signUpForm.get('email')?.errors?.['required']).toBeTruthy()

        const emailErrorElement = testingService.getElementByTestId(fixture, 'email-required-error')

        expect(emailErrorElement.innerHTML).toBeTruthy();


      })

      it('it should pass email format validation', () => {


        const inputvalue = "alskdjf@gmail.com"

        testingService.setInputValueAndBlurIt(fixture, 'email', inputvalue)

        expect(component.signUpForm.get('email')?.errors?.['email']).toBeFalsy()


        const emailErrorElement = testingService.getElementByTestId(fixture, 'email-email-format-error')

        console.log("error email", emailErrorElement)

        expect(emailErrorElement).toBeFalsy()

      })

      it('it should not pass email required validation and show error', () => {

        const inputvalue = "laskdjfl.com"

        testingService.setInputValueAndBlurIt(fixture, 'email', inputvalue)

        expect(component.signUpForm.get('email')?.errors?.['email']).toBeTruthy()

        const emailErrorElement = testingService.getElementByTestId(fixture, 'email-email-format-error')

        expect(emailErrorElement.innerHTML).toBeTruthy()

      })

    })

    describe("password input", () => {
      it('it should not pass required validation', () => {

        const inputvalue = ""

        testingService.setInputValue(fixture, 'password', inputvalue)

        console.log("abcd")

        fixture.detectChanges();

        expect(component.signUpForm.get('password')?.errors?.['required']).toBeTruthy()

        const passwordErrorElement = testingService.getElementByTestId(fixture, 'password-required-error')

        expect(passwordErrorElement.innerHTML).toBeTruthy();

      })

      it('it should pass required validation', () => {


        const inputvalue = "abcde"

        testingService.setInputValueAndBlurIt(fixture, 'password', inputvalue)


        expect(component.signUpForm.get('password')?.errors?.['required']).toBeFalsy()


        const passwordErrorElement = testingService.getElementByTestId(fixture, 'password-required-error')

        expect(passwordErrorElement).toBeFalsy();

      })
    })

  } )





});
