setTimeout(()=>{
  document.getElementById("intro").style.display="none";
  document.getElementById("lobby").style.display="flex";
},3000);

function startMatch(){
  document.getElementById("lobby").style.display="none";
  startPlaneFlight();
  init3DScene();
}
