// killFeed.js
let killFeed=[];
function addKill(killer,victim){
  const msg=`${killer} eliminated ${victim}`;
  killFeed.push(msg);
  if(killFeed.length>5) killFeed.shift();
  console.clear(); killFeed.forEach(m=>console.log(m));
}
