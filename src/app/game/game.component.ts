import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GAMES } from './fake-games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private title: string;
  private games: Game[];

  constructor() {
    this.title = 'Jouez !';
   }

  ngOnInit() {
    this.games = GAMES.sort((x, y) => {
      if (x.name > y.name) {
        return 1;
      } else if (x.name < y.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  onClick() {
    this.games.reverse();
  }
}
