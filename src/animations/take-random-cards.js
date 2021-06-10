export function takeRandomCards(twoCards, cards) {
    let cardDiv = document.querySelector(".random-deck");
    let boundary = cardDiv.getBoundingClientRect();

    let playerDiv = document.querySelector(".player-active");
    let playerBoundary = playerDiv.getBoundingClientRect();
    let div = document.createElement('img');
    div.style.top = boundary.y + "px";
    div.style.left = boundary.x + "px";
    div.classList.add("card-image");
    div.style.zIndex = 2;
    div.style.position = "absolute";
    div.src = `./${cards[5]}.png`;

    document.body.appendChild(div);
    setTimeout(() => {
      div.style.transform = "scale(2)";
    }, 0);
    setTimeout(() => {
      div.style.left = `${playerBoundary.x}px`;
      div.style.top = `${playerBoundary.y}px`;
      div.style.transform = "scale(1)";
    }, 500)
    setTimeout(() => {  
      document.body.removeChild(div);
    }, 1000);

    if (twoCards) {
      let div2 = document.createElement('img');
      div2.style.top = boundary.y + "px";
      div2.style.left = boundary.x + "px";
      div2.classList.add("card-image");
      div2.style.position = "absolute";
      div2.src = `./card-reverse.png`;

      document.body.appendChild(div2);
      setTimeout(() => {
        div2.style.transform = "scale(2)";
      }, 1000);
      setTimeout(() => {
        div2.style.left = `${playerBoundary.x}px`;
        div2.style.top = `${playerBoundary.y}px`;
        div2.style.transform = "scale(1)";
      }, 1500)
      setTimeout(() => {  
        document.body.removeChild(div2);
      }, 2000);
    }
}