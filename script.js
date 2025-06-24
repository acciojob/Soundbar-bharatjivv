const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6']; // Add sound filenames without extension
const buttonsContainer = document.getElementById('buttons');
const audioElements = [];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  
//   const audio = new Audio(`sounds/${sound}.mp3`);
//   audioElements.push(audio);

  btn.addEventListener('click', () => {
    stopSounds();
    // audio.play();
  });

  buttonsContainer.appendChild(btn);
});

function stopSounds() {
  audioElements.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
