import * as actions from '../actions/my-action';
import { CardEnum } from "./../models/const/card-enum";
import { map } from '../setup/map1';
import { tickets} from "../setup/map1";

let hand = {}
hand[CardEnum.LOCOMOTIVE] = 0;
hand[CardEnum.PINK] = 0;
hand[CardEnum.ORANGE] = 0;
hand[CardEnum.YELLOW] = 0;
hand[CardEnum.GREEN] = 0;
hand[CardEnum.BLACK] = 0;
hand[CardEnum.BLUE] = 0;
hand[CardEnum.RED] = 0;
hand[CardEnum.WHITE] = 0;

export const initialState = {
    trainDeck: [
        ...Array(14).fill(CardEnum.LOCOMOTIVE),
        ...Array(12).fill(CardEnum.ORANGE),
        ...Array(12).fill(CardEnum.PINK),
        ...Array(12).fill(CardEnum.RED),
        ...Array(12).fill(CardEnum.WHITE),
        ...Array(12).fill(CardEnum.YELLOW),
        ...Array(12).fill(CardEnum.BLACK),
        ...Array(12).fill(CardEnum.BLUE),
        ...Array(12).fill(CardEnum.GREEN)
    ],
    hand: hand,
    ticketHand: [],
    messageInfo: "START GAME",
    map,
    tickets
}


let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
  
export default function myReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHUFFLE_CARDS: {
            let cards = shuffle([...state.trainDeck]);
            return {...state, trainDeck: cards }
        }
        case actions.TAKE_CARD: {
            let hand = {...state.hand}
            let trainDeck = [...state.trainDeck];
            let nextCard = trainDeck.splice(5, 1);
            let card = trainDeck.splice(action.data, 1, nextCard);
            hand[card] += 1
            return {...state, hand, trainDeck, messageInfo: `Player takes ${card}` }
        }
        case actions.TAKE_RANDOM_CARDS: {
            let hand = {...state.hand}
            let newTrainDeckState = [...state.trainDeck];
            let msg = "";
            if (newTrainDeckState[5] == CardEnum.LOCOMOTIVE) {
                hand[CardEnum.LOCOMOTIVE] += 1
                newTrainDeckState.splice(5, 1);
                msg = "Player got Locomotive";
            }
            else {
                let cards = newTrainDeckState.splice(5, 2);
                hand[cards[0]] += 1;
                hand[cards[1]] += 1;
                msg = `Player got ${cards[0]} and second card`;

            }

            return {...state, trainDeck: newTrainDeckState, messageInfo: msg, hand };
        }
        case actions.CLAIM_ROUTE: {
            console.log("CLAIMING ROUTE" + action.data);
            let map = {...state.map};
            let route = map.routes.find(x => x.routeId == action.data.routeId);
            if (!route.occupiedByPlayerId) {
                route.occupiedByPlayerId = action.data.playerId;
            }

            let cityIds = [route.cityA, route.cityB];
            let cityA = map.cities[cityIds[0]];
            let cityB = map.cities[cityIds[1]]; 
            let messageInfo = `Player claimed route ${cityA.name} and ${cityB.name}`;

            let hand = {...state.hand};
            for (let i = 0 ; i < route.trainSpots.length; i++ ) {
                hand[route.trainSpots[i].color] -= 1;
            }
            return {...state, map, messageInfo, hand };
        }
        case actions.TAKE_TICKETS: {
            let tickets = [...state.tickets];
            let takenTickets = action.data.takenTickets;

            let t = tickets.splice(0, 3);

            let ticketHand = [...state.ticketHand];

            for (let i = 0 ; i < 3; i ++) {
                if (takenTickets[i]) {
                    ticketHand.push(t[i]);
                }
                else {
                    if (t[i])
                        tickets.push(t[i]);
                }
            }
            return {...state, tickets, ticketHand, messageInfo: 'Player claimed tickets' };
        }
            
      default:
        return state
    }
}
  