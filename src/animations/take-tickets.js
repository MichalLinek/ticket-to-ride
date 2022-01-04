export function takeTickets(ticketIds) {
    let cardDiv = document.querySelector(".tickets-deck");
    let boundary = cardDiv.getBoundingClientRect();

    let playerDiv = document.querySelector(".player-active");
    let playerBoundary = playerDiv.getBoundingClientRect();
    let ticket1 = document.createElement('img');
    ticket1.style.top = boundary.y + "px";
    ticket1.style.left = boundary.x + "px";
    ticket1.classList.add("card-image");
    ticket1.style.zIndex = 2;
    ticket1.style.position = "absolute";
    ticket1.src = `./ticket.png`;
    document.body.appendChild(ticket1);
    let ticket2 = ticket1.cloneNode(true);
    let ticket3 = ticket1.cloneNode(true);
    document.body.appendChild(ticket2);
    document.body.appendChild(ticket3);
 
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;

    setTimeout(() => {
      ticket1.style.transform = "scale(2)";
      ticket1.style.left = `${x}px`;
      ticket1.style.top = `${y - 220}px`;
    }, 0);

    setTimeout(() => {
      ticket2.style.transform = "scale(2)";
      ticket2.style.left = `${x}px`;
      ticket2.style.top = `${y}px`;
    }, 200);


    setTimeout(() => {
      ticket3.style.transform = "scale(2)";
      ticket3.style.left = `${x}px`;
      ticket3.style.top = `${y + 220}px`;
    }, 400);


    setTimeout(() => {
      ticket1.style.transform = "scale(1)";
      if (ticketIds.indexOf(0) > -1) {
        ticket1.style.left = `${playerBoundary.x}px`;
        ticket1.style.top = `${playerBoundary.y}px`;
      }
      else {
        ticket1.style.left = `${boundary.x}px`;
        ticket1.style.top = `${boundary.y}px`;
      }

      ticket2.style.transform = "scale(1)";
      if (ticketIds.indexOf(1) > -1 ) {
        ticket2.style.left = `${playerBoundary.x}px`;
        ticket2.style.top = `${playerBoundary.y}px`;
        
      }
      else {
        ticket2.style.left = `${boundary.x}px`;
        ticket2.style.top = `${boundary.y}px`;
      }

      ticket3.style.transform = "scale(1)"; 
      if (ticketIds.indexOf(2) > -1) {
        ticket3.style.left = `${playerBoundary.x}px`;
        ticket3.style.top = `${playerBoundary.y}px`;
        
      }
      else {
        ticket3.style.left = `${boundary.x}px`;
        ticket3.style.top = `${boundary.y}px`;
      }
    }, 1200);
    
    setTimeout(() => {  
      document.body.removeChild(ticket1);
      document.body.removeChild(ticket2);
      document.body.removeChild(ticket3);
      
    }, 2000);

}