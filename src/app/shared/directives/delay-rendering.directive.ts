import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayRendering]'
})
export class DelayRenderingDirective {

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
    console.log("ref", template);
  }

  @Input()
  set delayRendering(delayTime: number) {}

  // Rendering
  ngOnInit() {
    this.createView();
  }

  private createView() {
    this.container.clear();
    this.container.createEmbeddedView(this.template);
  }

}
