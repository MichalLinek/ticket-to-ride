import { CardEnum } from "./../models/const/card-enum";
let initialHand = {}
initialHand[CardEnum.LOCOMOTIVE] = 10;
initialHand[CardEnum.PINK] = 10;
initialHand[CardEnum.ORANGE] = 10;
initialHand[CardEnum.YELLOW] = 5;
initialHand[CardEnum.GREEN] = 5;
initialHand[CardEnum.BLACK] = 5;
initialHand[CardEnum.BLUE] = 10;
initialHand[CardEnum.RED] = 10;
initialHand[CardEnum.WHITE] = 10;

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