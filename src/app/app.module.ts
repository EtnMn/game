import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BorderCardDirective } from './border-card.directive';
import { ReadMorePipe } from './read-more.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BorderCardDirective,
    ReadMorePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
