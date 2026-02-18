// vehicles.js
let vehicles=[{name:"Motorcycle",speed:15,x:0,y:0},{name:"Car",speed:10,x:0,y:0}];

function enterVehicle(index){player.inVehicle=vehicles[index];console.log("Entered "+player.inVehicle.name);}
function moveVehicle(dx,dy){if(!player.inVehicle) return;player.inVehicle.x+=dx*player.inVehicle.speed;player.inVehicle.y+=dy*player.inVehicle.speed;console.log("Vehicle pos:",player.inVehicle.x,player.inVehicle.y);}
