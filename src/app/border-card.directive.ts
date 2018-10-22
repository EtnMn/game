import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appBorderCard]' })
export class BorderCardDirective {

  private defaultColor = '#009688';
  private defaultSize = 2;

  constructor(private el: ElementRef) {
  }

  @Input() borderColor: string;
  @Input() borderSize: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor, this.borderSize);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
  }

  private setBorder(color: string, size: number) {
    this.el.nativeElement.style.border = 'solid ' + (size  || this.defaultSize) + 'px ' + (color || this.defaultColor);
  }
}
