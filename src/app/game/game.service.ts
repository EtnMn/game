import { Injectable } from '@angular/core';
import { Game } from './models/game';
import { GAMES } from './models/fake-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor() { }

  public getGames(): Game[] {
    return GAMES;
  }

  public getGame(id: number): Game {
    return GAMES.find(c => c.id === id);
  }
}
