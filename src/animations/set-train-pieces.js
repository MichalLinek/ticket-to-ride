export function setTrainPieces(routeId) {
    let trainChip = document.querySelector(".player-active .train-chip");
    let boundary = trainChip.getBoundingClientRect();

    let trainSpots = document.querySelectorAll(`button[routeid='${routeId}']`);

    for (let i = 0 ; i < trainSpots.length; i ++) {
      let trainBoundary = trainSpots[i].getBoundingClientRect();
      let train = trainChip.cloneNode(true);
      trainSpots[i].classList.add("hide-children");
      train.style.position = "absolute";
      train.style.left = `${trainChip.offsetLeft}px`;
      train.style.top = `${trainChip.offsetTop}px`;
      document.body.appendChild(train);
      setTimeout(() => {
        train.style.left = `${trainBoundary.x}px`;
        train.style.top = `${trainBoundary.y}px`;
        train.style.transform = trainSpots[i].style.transform;
      }, 500);
      setTimeout(() => {
        document.body.removeChild(train);
        trainSpots[i].classList.remove("hide-children");
      }, 1500);
    }
}