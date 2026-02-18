function addBattlePassXP(amount) {
  player.xp = player.xp || 0; // ensure xp exists
  player.xp += amount;
  if (player.xp >= 100) {
    player.xp = 0;
    player.level = (player.level || 1) + 1;
    console.log("Battle Pass Level UP! Level:", player.level);
  }
}
