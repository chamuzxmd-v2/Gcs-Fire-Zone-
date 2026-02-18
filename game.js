let player = {x:0,y:0,hp:100,coins:0,gems:0,speed:5,skin:null};
let planeX=0;

function startPlaneFlight(){
  let interval = setInterval(()=>{
    planeX +=5;
    if(planeX>window.innerWidth-200){clearInterval(interval); parachuteLanding();}
  },30);
}

function parachuteLanding(){
  let y=0;
  let interval=setInterval(()=>{
    y+=2;
    if(y>=window.innerHeight-120){clearInterval(interval); gameLoop();}
  },30);
}

function gameLoop(){
  setInterval(()=>{
    // Placeholder shooting / movement logic
  },30);
}
