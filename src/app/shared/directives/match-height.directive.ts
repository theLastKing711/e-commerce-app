import { Directive, Input, Renderer2, ElementRef, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements OnInit, AfterViewInit  {

  @Input() imageRef! : HTMLElement

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
   }

   ngOnInit(): void {

    // this.renderer.setAttribute(this.elementRef, "height", this.imageRef.nativeElement.offsetHeight.toString())
    console.log("child Init", this.imageRef)
   }

  //  AfterContentInit(): void {
  //   console.log("child content init")
  //  }

   ngAfterViewInit(): void {
       console.log("child view init")
   }




}
