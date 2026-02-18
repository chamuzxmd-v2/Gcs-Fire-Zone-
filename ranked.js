// ranked.js
let ranked = { rank: "Bronze", points: 0 };

function addRankPoints(kills, survivalTime) {
  ranked.points += kills * 20 + survivalTime;
  if (ranked.points > 5000) ranked.rank = "Diamond";
  else if (ranked.points > 2000) ranked.rank = "Gold";
  else if (ranked.points > 500) ranked.rank = "Silver";
  else ranked.rank = "Bronze";
}
