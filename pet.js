// pets.js
let pet = {
  name: "Dog",
  ability: "Loot Finder"
};

function petAbility() {
  let lootFound = Math.floor(Math.random() * 100) + 50;
  player.coins += lootFound;
  console.log(`${pet.name} found ${lootFound} coins! Total coins: ${player.coins}`);
}
