import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games/games.component';
import { GamePageComponent } from './game-page/game-page.component';

const gameRoutes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GamePageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class GameRoutingModule { }