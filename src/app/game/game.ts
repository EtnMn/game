export class Game {
   name: string;
   players: MinMax;
   image: string;
   open: boolean;
   description: string;
}

class MinMax {
  min: number;
  max: number;
}
