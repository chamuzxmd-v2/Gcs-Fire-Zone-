// battlepass.js
let battlePass = {
  level: 1,
  xp: 0,
  rewards: {
    1: "100 Coins",
    5: "Free Skin",
    10: "Gun Skin",
    20: "100 Gems"
  }
};

function addBattlePassXP(amount) {
  battlePass.xp += amount;
  if (battlePass.xp >= 100) {
    battlePass.level++;
    battlePass.xp = 0;
    alert("Battle Pass Level UP! Reward: " + (battlePass.rewards[battlePass.level] || "No Reward"));
  }
}
function addBattlePassXP(amount) {
  player.xp = player.xp || 0; // ensure xp exists
  player.xp += amount;
  if (player.xp >= 100) {
    player.xp = 0;
    player.level = (player.level || 1) + 1;
    console.log("Battle Pass Level UP! Level:", player.level);
  }
}
