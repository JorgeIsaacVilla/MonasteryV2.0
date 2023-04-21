const musicButton = document.getElementById('music_button1');
const playPauseImg = document.getElementById('play_pause_img');
const playMusic = document.getElementById('play_music');
const myAudio = document.getElementById('my_audio');

let isPlaying = false;

function togglePlayPauseImage() {
  if (isPlaying) {
    playPauseImg.src = '../img/Pause.png';
    playMusic.src = '../img/audio1.gif';
  } else {
    playPauseImg.src = '../img/Play.png';
    playMusic.src = '../img/Grupo 14417@3x2.png';
  }
}

function togglePlayPause() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
  isPlaying = !isPlaying;
  togglePlayPauseImage();
}

musicButton.addEventListener('click', togglePlayPause);
