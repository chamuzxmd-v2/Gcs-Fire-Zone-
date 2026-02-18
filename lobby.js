setTimeout(()=>{
  document.getElementById("intro").style.display="none";
  document.getElementById("lobby").style.display="flex";
},3000);

function startMatch(){
  document.getElementById("lobby").style.display="none";
  startPlaneFlight();
  init3DScene();
}
function buyItem(item) {
  if (player.coins >= item.price) {
    player.coins -= item.price;
    if(item.type === "skin") player.skin = item.name;
    console.log("Bought:", item.name, "Coins left:", player.coins);
  } else {
    console.log("Not enough coins!");
  }
}
