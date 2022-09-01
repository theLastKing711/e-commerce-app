import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsManipulationService {

  constructor() { }

  getElementHeight(element: ElementRef): number {

    const elementHeight = element?.nativeElement?.offsetHeight;

    return elementHeight;
  }

  getElementHeightInPx(element: ElementRef): string {

    const elementHeight = element?.nativeElement?.offsetHeight;

    return this.convertNumberToPx(elementHeight)
  }


  getElementWidth(element: ElementRef): number {
    const imageWidth = element.nativeElement?.offsetWidth;

    return imageWidth;
  }

  getElementWidthInPx(element: ElementRef): string {

    const imageWidth = this.getElementWidth(element);

    return this.convertNumberToPx(imageWidth);

  }


  getelementMarginBottom(ref: ElementRef, value: number): number {
    const marginOffset =  -(ref.nativeElement.offsetHeight * (value / 100))
    return marginOffset;
  }


  getelementMarginBottomInPx(ref: ElementRef, value: number): string {
    const imageBottomMargin = this.getelementMarginBottom(ref, value)

    return this.convertNumberToPx(imageBottomMargin)

  }

  convertNumberToPx(value: number): string {
    return value.toString() + "px"
  }

}
