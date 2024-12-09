import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() set appHighlight(condition: boolean) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', condition ? 'yellow' : 'transparent');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
