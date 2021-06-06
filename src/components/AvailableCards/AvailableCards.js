import "./AvailableCards.css";
import React from 'react';
import { CardEnum } from "../../models/const/card-enum";

class AvailableCards extends React.Component {
  constructor(props) {
    super(props);
    let cards = []
    for (let i = 0 ; i < 5; i ++) {
      cards.push(props.cardDeck.takeCard());
    }
    
    this.state = {
      cards: cards,
      cardDeck: props.cardDeck
    }
  }

  takeCard = (id) => {
    let takenCard = this.state.cards[id];
    console.log('player takes' + this.state.cards[id]);
    const card = this.props.cardDeck.takeCard();
    this.state.cards.splice(id, 1, card);
    this.setState({cards: this.state.cards, cardDeck: this.props.cardDeck });
    this.props.onTakeCard(takenCard);
  }

  render() {
    return (
      <div>
        <div>Available Cards</div>
        <div><button>Tu będzie rewers karty (2 z wierzchu)</button></div>
        <div className="available-cards">
          { this.state.cards.map((x, id) => {
            
            const path = "./" + x + ".png";
            return <div key={id} className="available-card-row"><img onClick={() => this.takeCard(id)} className="card-image" src={path}></img></div>
          })}
        </div>
      </div>
    );
  }
}

export default AvailableCards;
