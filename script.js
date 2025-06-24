const audios = [
  document.getElementById("audio0"),
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
];

function playSound(index) {
  stopSounds();
  const audio = audios[index];
  audio.play();
  audio.dataset.playing = "true";
}

function stopSounds() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
    audio.dataset.playing = "false";
  });
}
