import { Game } from './game';

export const GAMES: Game[] = [
  {
    id: 1,
    name: 'Dominos',
    players: { min: 2, max: 4 },
    age: 4,
    image: '/assets/images/dominos.jpg',
    open: true,
    description: `Les dominos sont un jeu de société d'origine chinoise, utilisant 28 pièces (dans le cas d'un jeu « double-six »).
      On y joue généralement à deux, trois ou quatre personnes. Comme avec les cartes, il existe de nombreuses variantes de jeu.
      Les explications ci-dessous en sont quelques exemples.
      Mais l'origine réelle reste mystérieuse,
      car d'autres prétendent que le plus vieux jeu de domino aurait été trouvé dans la tombe de Toutânkhamon.`
  },
  {
    id: 2,
    name: 'Mikado',
    players: { min: 2, max: 6 },
    age: 5,
    image: '/assets/images/mikado.jpg',
    open: false,
    description: `Le Mikado est un jeu d'adresse, praticable de 2 à 6 joueurs.
      Il se compose d'un ensemble de baguettes, longues d'environ 20 cm et effilées aux extrémités,
      que l'on laisse tomber de façon qu'elles s'enchevêtrent, avant de les retirer, une à une, sans faire bouger les autres.`
  },
  {
    id: 3,
    name: 'Dames',
    players: { min: 2, max: 2 },
    age: 3,
    image: '/assets/images/dames.jpg',
    open: false,
    description: `Les dames ou le jeu de dames est un jeu de société combinatoire abstrait pour deux joueurs.
      Le terme désigne en fait plusieurs jeux comme le jeu de dames international ou bien le jeu de dames anglaises.`
  }
];
