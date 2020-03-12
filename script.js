const video = document.getElementById('video');
const play = document.getElementById('play');
const restart = document.getElementById('restart');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause

function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  }else {
    video.pause();
  }
}

// update play pause icon
function updatePlayIcon() {
   if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  }else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// update progress
function updateProgress() {
  progress.value = video.currentTime / video.duration * 100;
  
  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) {
    mins = '0'+String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) {
    secs = '0'+String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`
}

// stop video
function stopVideo() {
  video.currentTime = 0.5;
  video.pause();
}

// set video progress
function setVideoProgress() {
  video.currentTime = +progress.value * video.duration / 100;
  
}

// event listeners on video screen click

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
restart.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);