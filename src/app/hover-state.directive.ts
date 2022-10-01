import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHoverState]'
})
export class HoverStateDirective {

  @Output() itemHovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


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
