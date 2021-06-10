import { CardEnum } from "./../models/const/card-enum";
let initialHand = {}
initialHand[CardEnum.LOCOMOTIVE] = 0;
initialHand[CardEnum.PINK] = 0;
initialHand[CardEnum.ORANGE] = 0;
initialHand[CardEnum.YELLOW] = 0;
initialHand[CardEnum.GREEN] = 0;
initialHand[CardEnum.BLACK] = 0;
initialHand[CardEnum.BLUE] = 0;
initialHand[CardEnum.RED] = 0;
initialHand[CardEnum.WHITE] = 0;

let allCards = [
    ...Array(14).fill(CardEnum.LOCOMOTIVE),
    ...Array(12).fill(CardEnum.ORANGE),
    ...Array(12).fill(CardEnum.PINK),
    ...Array(12).fill(CardEnum.RED),
    ...Array(12).fill(CardEnum.WHITE),
    ...Array(12).fill(CardEnum.YELLOW),
    ...Array(12).fill(CardEnum.BLACK),
    ...Array(12).fill(CardEnum.BLUE),
    ...Array(12).fill(CardEnum.GREEN)
]

export { initialHand, allCards }