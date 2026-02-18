// skills.js
let skills = {
  healAura: () => {
    player.hp += 5;
    if (player.hp > 100) player.hp = 100;
    console.log("Heal Aura activated! HP:", player.hp);
  },
  speedBoost: () => {
    player.speed += 5;
    setTimeout(() => { player.speed -= 5; }, 5000); // lasts 5 seconds
    console.log("Speed Boost activated! Speed:", player.speed);
  },
  shield: () => {
    player.shield = (player.shield || 0) + 10;
    console.log("Shield activated! Shield:", player.shield);
  }
};
let skills = {
  healAura: () => { 
    player.hp += 5; 
    if(player.hp > 100) player.hp = 100; 
    console.log("Heal Aura! HP:", player.hp);
  },
  speedBoost: () => {
    player.speed += 5;
    setTimeout(()=>{ player.speed -= 5; }, 5000);
    console.log("Speed Boost! Speed:", player.speed);
  },
  shield: () => {
    player.shield += 10;
    console.log("Shield! Shield Points:", player.shield);
  }
};
