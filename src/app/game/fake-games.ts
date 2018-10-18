import { Game } from './game';

export const GAMES: Game[] = [
  {
    name: 'Dominos',
    players: { min: 2, max: 4 },
    image: '/assets/images/dominos.jpg',
    open: true,
    description: 'Les dominos sont un jeu de société d\'origine chinoise, utilisant 28 pièces.'
  },
  {
    name: 'Mikado',
    players: { min: 2, max: 6 },
    image: '/assets/images/mikado.jpg',
    open: false,
    description: 'Le Mikado est un jeu d\'adresse, qui se compose d\'un ensemble de baguettes effilées aux extrémités.'
  },
  {
    name: 'Dames',
    players: { min: 2, max: 2 },
    image: '/assets/images/dames.jpg',
    open: false,
    description: 'Les dames ou le jeu de dames est un jeu de société combinatoire abstrait pour deux joueurs.'
  }
];
