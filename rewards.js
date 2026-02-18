// rewards.js
function rewardPlayer(kills=0,survivalTime=0){
  let xp=kills*20+Math.floor(survivalTime/10);
  let coins=kills*10+Math.floor(survivalTime/5);
  player.xp=(player.xp||0)+xp;
  player.coins+=coins;
  console.log(`XP gained: ${xp}, Coins gained: ${coins}`);
}
