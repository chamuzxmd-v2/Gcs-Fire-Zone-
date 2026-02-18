// achievements.js
let achievements={kills:0,wins:0,survivalTime:0};
function addAchievement(type,amount=1){achievements[type]=(achievements[type]||0)+amount;console.log(`${type} = ${achievements[type]}`);}
