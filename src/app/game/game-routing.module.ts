import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games/games.component';
import { GamePageComponent } from './game-page/game-page.component';
import { RegistrationFormComponent } from './registration/registration-form.component';

const gameRoutes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GamePageComponent },
  { path: 'session/:id/registration', component: RegistrationFormComponent}
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
