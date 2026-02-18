// shop.js
let shopItems = [
  { name: "Golden Skin", price: 5000, type: "skin" },
  { name: "Dragon Gun", price: 10000, type: "gun" },
  { name: "Dance Emote", price: 2000, type: "emote" }
];

function buyItem(item) {
  if (player.coins >= item.price) {
    player.coins -= item.price;
    if (item.type === "skin") player.skin = item.name;
    alert("Purchased: " + item.name);
  } else {
    alert("Not enough coins!");
  }
}
