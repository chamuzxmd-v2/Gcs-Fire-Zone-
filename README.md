# GCS FIRE ZONE

![GCS FIRE ZONE Logo](https://i.ibb.co/dJDvn6H9/19802.png)

**Developer:** J.P.Sasanka Chamuth Fernando  
**Game Type:** Free Fire style Battle Royale Web Game  
**Platform:** Web / Android (via WebView)  

---

## 🎮 Overview

GCS FIRE ZONE is a **Free Fire inspired battle royale game** built with **HTML, CSS, JavaScript, and Three.js**.  
Players can jump from a plane, land with parachutes, collect guns, fight other players, and explore custom maps.  

This project includes a **lobby system**, **ranked matches**, **battle pass**, **shop**, **skins**, **emotes**, **pets**, **voice chat**, and more.

---

## 🚀 Features

### Core Gameplay
- Parachute Landing System  
- Plane Jump System  
- Shooting & Gun System  
- Player Health, Coins & Gems  
- Custom Maps & Supply Drops  

### Multiplayer & Progression
- Ranked Matches (Bronze → Heroic)  
- Battle Pass System with XP & Rewards  
- Shop System for Skins, Guns & Emotes  
- Clan System & Friends  
- Esports Tournament Mode  

### Cosmetic & Extras
- Skins & Gun Skins  
- Emotes  
- Pets System  
- 3D Lobby Characters  
- Voice Chat (WebRTC)  
- Complete UI  

### Graphics & Platform
- 3D Graphics via Three.js  
- Android APK Export via WebView  

---

## 📂 Project Structure
GCS-FIRE-ZONE/ │ ├─ index.html  
      
  # Main page (Lobby + Canvas) ├─ style.css
           
# UI & Theme ├─ game.js 
            
# Game engine (Plane, Parachute, Shooting) ├─ lobby.js           

 # Lobby UI + 3D Characters ├─ battlepass.js
       
# Battle Pass System ├─ shop.js 
         
   # Shop System (Skins, Guns, Emotes) ├─ ranked.js
         
  # Ranked Matches ├─ mapLoader.js       

 # Custom Maps & Supply Drops ├─ skills.js          

 # Character Skills ├─ pets.js            

 # Pets System ├─ tournament.js      

 # Esports Tournament Mode ├─ voiceChat.js
 
 # WebRTC Voice Chat ├─ threeScene.js      

 # Three.js 3D Map + Player └─ assets/             

# Logo, Guns, Skins, Pets, Sounds

---

## 🎯 How to Play

1. Open `index.html` in a browser or Android WebView.  
2. Wait for the **intro screen** to finish.  
3. Enter the **lobby**, select options, and click **Start Match**.  
4. Jump from the plane, land safely, collect loot, and fight other players.  
5. Earn coins, gems, XP, and rank up in **Ranked Matches**.  
6. Purchase skins, guns, and emotes from the **Shop**.  
7. Complete missions in **Battle Pass** to unlock rewards.  

---

## ⚙️ How to Export to Android APK

1. Install **Android Studio**.  
2. Create a **WebView project**.  
3. Copy the entire project into `app/src/main/assets/`.  
4. Enable JS in WebView:

```java
webView.getSettings().setJavaScriptEnabled(true);
webView.loadUrl("file:///android_asset/index.html");
