// tournament.js
let tournament = {
  name: "GCS FIRE CUP",
  players: [],
  prize: "10000 Gems"
};

function joinTournament(playerName) {
  tournament.players.push(playerName);
  console.log(playerName + " joined " + tournament.name);
}

function endTournament(winner) {
  console.log(winner + " won the tournament! Prize: " + tournament.prize);
  // You can add prize to player's account
}
