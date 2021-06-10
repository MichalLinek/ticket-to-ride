import { PlayerType } from "../models/const/player-type";
import { initialHand } from "../setup/ticketCards";

export const players = [
    {
        id: 0,
        type: PlayerType.HUMAN,
        color: 'red',
        trains: 15,
        points: 0,
        trainCards: {...initialHand},
        ticketCards: []
    },
    {
        id: 1,
        type: PlayerType.NPC,
        color: 'blue',
        trains: 15,
        points: 0,
        trainCards: {...initialHand},
        ticketCards: []
    },
    {
        id: 2,
        type: PlayerType.NPC,
        color: 'yellow',
        trains: 15,
        points: 0,
        trainCards: {...initialHand},
        ticketCards: []
    },
    {
        id: 3,
        type: PlayerType.NPC,
        color: 'green',
        trains: 15,
        points: 0,
        trainCards: {...initialHand},
        ticketCards: []
    }
]