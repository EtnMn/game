import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { BorderCardDirective } from './border-card.directive';
import { ReadMorePipe } from './read-more.pipe';
import { GamePageComponent } from './game-page/game-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GamePageComponent },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    BorderCardDirective,
    ReadMorePipe,
    GamePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
