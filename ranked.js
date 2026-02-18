// ranked.js
let ranked = { rank: "Bronze", points: 0 };

function addRankPoints(kills, survivalTime) {
  ranked.points += kills * 20 + survivalTime;
  if (ranked.points > 5000) ranked.rank = "Diamond";
  else if (ranked.points > 2000) ranked.rank = "Gold";
  else if (ranked.points > 500) ranked.rank = "Silver";
  else ranked.rank = "Bronze";
}
function addRankPoints(kills, survivalTime) {
  player.rankPoints = player.rankPoints || 0;
  player.rankPoints += kills*20 + survivalTime;

  if(player.rankPoints > 5000) player.rank = "Diamond";
  else if(player.rankPoints > 2000) player.rank = "Gold";
  else if(player.rankPoints > 500) player.rank = "Silver";
  else player.rank = "Bronze";

  console.log("Player Rank:", player.rank);
}
