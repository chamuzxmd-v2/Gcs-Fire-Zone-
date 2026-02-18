// events.js
let events=[
  {name:"Daily Kill Challenge",type:"daily",target:10,reward:100},
  {name:"Weekly Survival Challenge",type:"weekly",target:3,reward:500}
];
function completeEvent(player,eventName){
  let event=events.find(e=>e.name===eventName);
  if(!event) return;
  player.coins+=event.reward;
  console.log(`Event Completed: ${eventName}. Reward: ${event.reward} coins!`);
}
