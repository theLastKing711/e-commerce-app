import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements OnInit {

  @Input() imageRef! : ElementRef<HTMLElement>

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
   }

   ngOnInit(): void {

    // this.renderer.setAttribute(this.elementRef, "height", this.imageRef.nativeElement.offsetHeight.toString())

   }


}
