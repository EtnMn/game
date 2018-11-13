import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  private games: Game[];

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getGames().sort(this.alphaGameComparer);
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
