// replay.js
let replayData=[];
function recordAction(action){replayData.push({time:Date.now(),...action});}
function replayMatch(){
  let i=0;
  let interval=setInterval(()=>{
    if(i>=replayData.length)return clearInterval(interval);
    console.log("Replay:",replayData[i]);
    i++;
  },100);
}
