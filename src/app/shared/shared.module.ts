import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMorePipe } from './read-more.pipe';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReadMorePipe,
    BorderCardDirective,
  ],
  exports: [
    ReadMorePipe,
    BorderCardDirective,
  ]
})
export class SharedModule { }
