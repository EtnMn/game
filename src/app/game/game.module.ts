import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';

import { GamesComponent } from './games/games.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameService } from './game.service';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GameRoutingModule,
  ],
  declarations: [
    GamesComponent,
    GamePageComponent,
  ]
})
export class GameModule { }
