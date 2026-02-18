// voiceChat.js
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const audio = document.createElement("audio");
    audio.srcObject = stream;
    audio.autoplay = true;
    document.body.appendChild(audio);
    console.log("Voice chat started (local preview)");
  })
  .catch(err => console.log("Voice chat error:", err));
