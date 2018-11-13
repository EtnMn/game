export class Game {
  id: number;
  name: string;
  players: MinMax;
  age: number;
  image: string;
  open: boolean;
  description: string;
}

class MinMax {
  min: number;
  max: number;
}
