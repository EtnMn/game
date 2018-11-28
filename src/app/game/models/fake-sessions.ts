import { Session } from './session';

const dayInMilliseconds = 1000 * 60 * 60 * 60 * 24;

export const SESSIONS: Session[] = [
    {
        id: 1,
        idGame: 1,
        start: new Date(),
        stop: new Date(Date.now() + dayInMilliseconds)
    },
    {
        id: 2,
        idGame: 2,
        start: new Date(Date.now() + (2 * dayInMilliseconds)),
        stop: new Date(Date.now() + (3 * dayInMilliseconds))
    },
    {
        id: 3,
        idGame: 3,
        start: new Date(Date.now() - (2 * dayInMilliseconds)),
        stop: new Date(Date.now() - (3 * dayInMilliseconds))
    }
];