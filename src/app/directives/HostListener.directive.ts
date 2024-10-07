import { HostListener, Directive, ElementRef, Input } from '@angular/core';
import { Observer } from 'rxjs';

@Directive({
  selector: '[listenerDirective]',
  standalone: true,
})
export class HostListenerDirective {
  constructor(private el: ElementRef) {}

  @Input() observer?: Observer<any> | null = null;

  @HostListener('click', ['$event']) handleHostClick(event: PointerEvent) {
    this.observer?.next(event);
  }

  @HostListener('input', ['$event']) handleHostChange(event: PointerEvent) {
    this.observer?.next(event);
  }
}
