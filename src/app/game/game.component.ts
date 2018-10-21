import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GAMES } from './fake-games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private games: Game[];

  ngOnInit() {
    this.games = GAMES.sort(this.alphaGameComparer);
  }

  onClick() {
    this.games.reverse();
  }

  private alphaGameComparer(x: Game, y: Game) {
    if (x.name === y.name) {
      return 0;
    } else {
      return x.name > y.name ? 1 : -1;
    }
  }
}
