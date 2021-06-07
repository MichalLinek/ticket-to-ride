import { CardEnum } from "../const/card-enum";
import * as actions from "./../../actions/my-action";
import store from "./../../store.js";

export class CardDeck {

   constructor() {
       this.deck = [];
       this.discardPile = [];
   }

   //initialize() {
        // this.deck.push(...Array(14).fill(CardEnum.LOCOMOTIVE));
        // this.deck.push(...Array(12).fill(CardEnum.ORANGE));
        // this.deck.push(...Array(12).fill(CardEnum.PINK));
        // this.deck.push(...Array(12).fill(CardEnum.RED));
        // this.deck.push(...Array(12).fill(CardEnum.WHITE));
        // this.deck.push(...Array(12).fill(CardEnum.YELLOW));
        // this.deck.push(...Array(12).fill(CardEnum.BLACK));
        // this.deck.push(...Array(12).fill(CardEnum.BLUE));
        // this.deck.push(...Array(12).fill(CardEnum.GREEN));
        //this.shuffle(this.deck);
   //}


   shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
   }

   takeCard() {
       return this.deck.pop();
   }

   addToDiscardPile(card) {
        this.discardPile.push(card);
   }

   getCards() {
       return this.deck;
   }
}