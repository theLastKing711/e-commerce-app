import { Directive, EventEmitter, HostListener, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHoverState]'
})
export class HoverStateDirective {

  @Output() itemHovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _viewContainer: ViewContainerRef) {
    console.log("view container", _viewContainer);
   }


  @HostListener("mouseenter")
  onMouseEnter() {
    this.itemHovered.emit(true);
  }

  @HostListener("mouseleave")
  onMouseLeave()
  {
    this.itemHovered.emit(false);
  }

}
