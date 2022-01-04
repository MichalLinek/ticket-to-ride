export function takeCardAnimation(cardId, cardName) {
  console.log(cardId);
    let cardDiv = document.querySelectorAll(".available-card-row .card-image")[cardId];
    let boundary = cardDiv.getBoundingClientRect();

    let playerDiv = document.querySelector(".player-active");
    let playerBoundary = playerDiv.getBoundingClientRect();
    let div = document.createElement('img');
    div.style.top = boundary.y + "px";
    div.style.left = boundary.x + "px";
    div.classList.add("card-image");
    div.style.position = "absolute";
    div.src = `./${cardName}.png`;

    document.body.appendChild(div);
    setTimeout(() => {
      div.style.transform = "scale(2)";
    }, 0);
    setTimeout(() => {
      div.style.left = `${playerBoundary.x}px`;
      div.style.top = `${playerBoundary.y}px`;
      div.style.transform = "scale(1)";
    }, 800)
    setTimeout(() => {  
      document.body.removeChild(div);
    }, 1500);
}