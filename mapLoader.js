// mapLoader.js
let drops = [];

function spawnAirdrop() {
  let drop = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    loot: "Legendary Gun"
  };
  drops.push(drop);
  console.log("Airdrop landed at:", drop);
}

// Spawn airdrops every 30 seconds
setInterval(spawnAirdrop, 30000);

function loadMap(mapJSON) {
  fetch(mapJSON)
    .then(res => res.json())
    .then(map => {
      console.log("Map loaded:", map.name);
      // You can spawn player at map.spawn location
    });
}
