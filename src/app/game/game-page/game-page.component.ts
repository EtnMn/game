import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../models/game';
import { GAMES } from '../models/fake-games';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  selectedGame: Game;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedGame = GAMES.find(c => c.id === id);
  }

  goBack(): void {
    this.router.navigate(['/games']);
  }
}
