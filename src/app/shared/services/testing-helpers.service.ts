import { By } from '@angular/platform-browser';
import { Injectable, DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TestingHelpersService {

  constructor() { }



  getElementByTestId<T>(fixture: ComponentFixture<T>, testId: string): HTMLElement {

    const debugElement =  fixture.debugElement;

    const element = debugElement.query(By.css(`[test-id='${testId}']`))?.nativeElement as HTMLElement;

    return element;

  }

  // getElementsByTestId<T>(fixture: ComponentFixture<T>, testId: string): HTMLElement[] {

  //   const debugElement = fixture.debugElement;

  //   const elements = debugElement.query(By.css(`[test-id='${testId}']`))?.nativeElement as HTMLElement[];

  //   return elements;

  // }

  setInputValue<T>(fixture: ComponentFixture<T>, testId: string, value: string): string {

    const element = this.getElementByTestId(fixture, testId) as HTMLInputElement;

    element.value  = value;

    element.dispatchEvent(new Event('input'))

    fixture.detectChanges();

    return value

  }

  setInputValueAndBlurIt<T>(fixture: ComponentFixture<T>, testId: string, value: string): string {

    const inputText = this.setInputValue(fixture, testId, value)

    this.blurInput(fixture, testId, value);

    return inputText;


  }


  blurInput<T>(fixture: ComponentFixture<T>, testId: string, value: string): string {

    const element = this.getElementByTestId(fixture, testId) as HTMLInputElement;

    element.value  = value;

    element.dispatchEvent(new Event('blur'))

    fixture.detectChanges();

    return value

  }

  setInputsValues<T>(fixture: ComponentFixture<T>, testIds: string[], values: string [])
  {

    values.forEach((value, index) => {
      console.log(testIds[index], value)
      this.setInputValue(fixture, testIds[index], value)
    })

  }

}
