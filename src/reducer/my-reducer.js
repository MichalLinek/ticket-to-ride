import * as actions from '../actions/my-action';
import { CardEnum } from "./../models/const/card-enum";
import { map } from '../setup/map1';
import { tickets} from "../setup/map1";
import { players} from "../setup/players";
import { pointsForRoutes } from "../setup/pointsForRoutes";
import { allCards } from "../setup/ticketCards";

const initialState = {
    trainDeck: allCards,
    messageInfo: "START GAME",
    map,
    tickets,
    players,
    activePlayerId: 0,
    animation: null,
    id: 0
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
            return {...state, trainDeck: cards, id: state.id + 1 }
        }
        case actions.TAKE_CARD: {
            let players = [...state.players];
            let trainDeck = [...state.trainDeck];
            let nextCard = trainDeck.splice(5, 1);
            let cardLength = action.data.length;
            if (cardLength == 2) {
                let lowerId = Math.min(action.data[0], action.data[1]);
                let biggerId = Math.max(action.data[0], action.data[1]);
                let firstCard = trainDeck.splice(biggerId, 1, nextCard[0]);
                nextCard = trainDeck.splice(5, 1);
                let secondCard = trainDeck.splice(lowerId, 1, nextCard[0]);
                players[state.activePlayerId].trainCards[firstCard] += 1;
                players[state.activePlayerId].trainCards[secondCard] += 1;
            } 
            else {
                let card = trainDeck.splice(action.data[0], 1, nextCard);
                players[state.activePlayerId].trainCards[card] += 1
            }

            let animation = {
                type: actions.TAKE_CARD,
                cards: action.data                                
            }
            let activePlayerId = (state.activePlayerId + 1) % players.length;

        
            return {...state, players, trainDeck, activePlayerId, animation, id: state.id + 1 }
        }
        case actions.TAKE_RANDOM_CARDS: {
            let players = [...state.players];
            let newTrainDeckState = [...state.trainDeck];
            let msg = "";
            let animation = {};
            if (newTrainDeckState[5] == CardEnum.LOCOMOTIVE) {
                players[state.activePlayerId].trainCards[CardEnum.LOCOMOTIVE] += 1
                let cards = newTrainDeckState.splice(5, 1);
                msg = "Player got Locomotive";
                animation = {
                    type: actions.TAKE_RANDOM_CARDS,
                    cards                                
                }
            }
            else {
                let cards = newTrainDeckState.splice(5, 2);
                players[state.activePlayerId].trainCards[cards[0]] += 1;
                players[state.activePlayerId].trainCards[cards[1]] += 1;
                msg = `Player got ${cards[0]} and second card`;
                animation = {
                    type: actions.TAKE_RANDOM_CARDS,
                    cards                           
                }
            }

            let activePlayerId = (state.activePlayerId + 1) % players.length;
            return {...state, trainDeck: newTrainDeckState, messageInfo: msg, players, activePlayerId, id: state.id + 1, animation };
        }
        case actions.CLAIM_ROUTE: {
            let map = {...state.map};
            let route = map.routes.find(x => x.routeId == action.data.routeId);
            if (!route.occupied) {
                route.occupied = state.activePlayerId;
            }

            let cityIds = [route.cityA, route.cityB];
            let cityA = map.cities[cityIds[0]];
            let cityB = map.cities[cityIds[1]]; 
            let messageInfo = `Player claimed route ${cityA.name} and ${cityB.name}`;

            let players = [...state.players];
            let cardsUsed = action.data.cardsUsed
            for (let i = 0 ; i < cardsUsed.length; i++ ) {
                players[state.activePlayerId].trainCards[cardsUsed[i]] -= 1;
            }

            let routeLength = route.trainSpots.length;
            players[state.activePlayerId].points += pointsForRoutes[routeLength];
            players[state.activePlayerId].trains -= routeLength;

            let activePlayerId = (state.activePlayerId + 1) % players.length;

            let animation = {
                type: actions.CLAIM_ROUTE,
                cardsUsed: action.data.cardsUsed,
                routeId: action.data.routeId                               
            }
            return {...state, map, messageInfo, players, activePlayerId, id: state.id + 1, animation };
        }
        case actions.TAKE_TICKETS: {
            let tickets = [...state.tickets];
            let ticketIds = action.data;

            let t = tickets.splice(0, 3);

            let players = [...state.players];

            for (let i = 0 ; i < t.length; i ++) {
                if (ticketIds[i]) {
                    players[state.activePlayerId].ticketCards.push(t[i]);
                }
                else {
                    if (t[i])
                        tickets.push(t[i]);
                }
            }

            let animation = {
                type: actions.TAKE_TICKETS,
                cards: action.data                                
            }

            let activePlayerId = (state.activePlayerId + 1) % players.length;
            return {...state, tickets, players, activePlayerId, id: state.id + 1, animation };
        }
            
      default:
        return state
    }
}
  