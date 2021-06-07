import * as actions from '../actions/my-action';
import { CardEnum } from "./../models/const/card-enum";

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
    hand: hand 
}

  
  export default function myReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHUFFLE_CARDS: {
            return {...state, trainDeck: [...action.data] }
        }
        case actions.TAKE_CARD: {
            let hand = {...state.hand}
            let trainDeck = [...state.trainDeck];
            let nextCard = trainDeck.splice(5, 1);
            let card = trainDeck.splice(action.data, 1, nextCard);
            hand[card] += 1
            return {...state, hand, trainDeck }
        }
            
      default:
        return state
    }
  }