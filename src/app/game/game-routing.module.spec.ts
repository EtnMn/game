import { GameRoutingModule } from './game-routing.module';

describe('GameRoutingModule', () => {
  let gameRoutingModule: GameRoutingModule;

  beforeEach(() => {
    gameRoutingModule = new GameRoutingModule();
  });

  it('should create an instance', () => {
    expect(gameRoutingModule).toBeTruthy();
  });
});
