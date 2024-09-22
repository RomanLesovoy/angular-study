import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectName]',
  standalone: true
})
export class DirectNameDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }

}
