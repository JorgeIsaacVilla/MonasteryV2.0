const musicButton = document.getElementById('music_button1');
const playPauseImg = document.getElementById('play_pause_img');
const playMusic = document.getElementById('play_music');
const myAudio = document.getElementById('my_audio');

let isPlaying = false;

function togglePlayPauseImage() {
  if (isPlaying) {
    playPauseImg.src = 'https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Play.png';
    playMusic.src = 'https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/audio1.gif';
  } else {
    playPauseImg.src = 'https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Pause.png';
    playMusic.src = 'https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Grupo+14417%403x2.png';
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
