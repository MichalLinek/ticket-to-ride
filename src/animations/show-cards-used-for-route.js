export function showCardsUsedForRoute(cardsUsed) {
     let randomDeck = document.querySelector(".random-deck");
     let boundary = randomDeck.getBoundingClientRect();
     let centerWindowX = window.innerWidth / 2;
     let centerWindowY = window.innerHeight / 2;
     let floatingCards = [];
     for (let i = 0 ; i < cardsUsed.length; i++) {
      let cardColor = document.querySelector(`div[card-type='${cardsUsed[i]}'] img`);
      let cardBoundary = cardColor.getBoundingClientRect();

      let floatingCard = cardColor.cloneNode(true);
      floatingCard.style.position = "absolute";
      floatingCard.style.left = `${cardBoundary.x}px`;
      floatingCard.style.top = `${cardBoundary.y}px`;

      document.body.appendChild(floatingCard);
      floatingCard.style.display = "none";
      floatingCards.push(floatingCard);
      setTimeout(() => {
        floatingCards[i].style.display = "block";
      }, 0);
      
      setTimeout(() => {
        floatingCards[i].style.left = `${centerWindowX}px`;
        floatingCards[i].style.top = `${centerWindowY}px`;
      }, (i * 1000) + 200);

      setTimeout(() => {
        floatingCards[i].style.left = `${boundary.x}px`;
        floatingCards[i].style.top = `${boundary.y}px`;
      }, (i * 1000) + 800);
      setTimeout(() => {
        document.body.removeChild(floatingCards[i]);
      }, (i * 1000) + 1200);
      
     }
}