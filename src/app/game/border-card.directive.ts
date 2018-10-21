import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appGameBorderCard]' })
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    // this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 1px ' + color;
  }
}
