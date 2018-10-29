import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { GAMES } from '../models/fake-games';

@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private games: Game[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.games = GAMES.sort(this.alphaGameComparer);
  }

  onClick() {
    this.games.reverse();
  }

  onClickCard(game: Game) {
    this.router.navigate(['/game', game.id]);
  }

  private alphaGameComparer(x: Game, y: Game) {
    if (x.name === y.name) {
      return 0;
    } else {
      return x.name > y.name ? 1 : -1;
    }
  }
}
