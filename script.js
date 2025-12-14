const footballTeam = {
  team: "Real Madrid",
  year: 2025,
  headCoach: "Xabi Alonso",
  players: [
    { name: "Arda Guler", position: "midfielder", isCaptain: false },
    { name: "Kylian Mbappe", position: "forward", isCaptain: false },
    { name: "Antonio Rudiger", position: "defender", isCaptain: true },
    { name: "Andry Lunin", position: "goalkeeper", isCaptain: false }
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");

headCoach.innerText = footballTeam.headCoach;
team.innerText = footballTeam.team;
year.innerText = footballTeam.year;

function displayPlayers(players) {
  playerCards.innerHTML = ""; 

  players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const h2Element = document.createElement("h2");
    if (player.isCaptain) {
      h2Element.innerText = "(Captain) " + player.name;
    } else {
      h2Element.innerText = player.name;
    }

    playerCard.appendChild(h2Element);

    const pElement = document.createElement("p");
    pElement.innerText = "Position: " + player.position;

    playerCard.appendChild(pElement);
    playerCards.appendChild(playerCard);
  });
}

displayPlayers(footballTeam.players);

const players = document.getElementById("players");

players.addEventListener("change", function() {
  const selectedPosition = players.value;

  let filteredPlayers = footballTeam.players;
  if (selectedPosition !== "all") {
    filteredPlayers = footballTeam.players.filter(player => player.position === selectedPosition);
  }

  displayPlayers(filteredPlayers);
});