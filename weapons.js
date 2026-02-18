// weapons.js
function shootWeapon(weapon){
  if(weapon.ammo<=0){reloadWeapon(weapon);return;}
  weapon.ammo--;
  console.log(`${weapon.name} fired! Ammo left: ${weapon.ammo}`);
}
function reloadWeapon(weapon){weapon.ammo=weapon.maxAmmo;console.log(`${weapon.name} reloaded! Ammo: ${weapon.ammo}`);}
