const videoElement = document.createElement("video");
document.body.appendChild(videoElement);

const playBtn = document.querySelector("#play-btn");
const backwardBtn = document.querySelector("#backward-btn");
const forwardBtn = document.querySelector("#forward-btn");
const currentElement = document.querySelector("#current-Time");
const durationElement = document.querySelector("#duration-Time");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const videoDisplay = document.querySelector(".video-display");
const videoCover = document.querySelector("#video-cover");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const volumeSlider = document.querySelector("#volume");
const speedSelect = document.querySelector("#speed");
// const info = document.querySelector(".info");

const videos = [
  {
    title: "Video One",
    artist: "Pexel Video",
    // src: "https://www.pexels.com/download/video/34830680/",
    src: "https://media.istockphoto.com/id/499588212/video/mother-child-laugh-sound-included.mp4?s=mp4-640x640-is&k=20&c=u6dXvaVufvFhzqP5st_J9jv1p1SmbvbLiAbswc18a4E=",
  },

  {
    title: "Video Two",
    artist: "Pexel Video",
    src: "https://media.istockphoto.com/id/1037788862/video/airplane-impressive-take-off-landing-flying-overhead-at-dusk-4k.mp4?s=mp4-640x640-is&k=20&c=-lmocfuU8Y1_vVZW-_vSo7HQz4jiadD6SuU4w5IDpAA=",
  },

  {
    title: "Video Three",
    artist: "Pexel Video",
    src: "https://media.istockphoto.com/id/1432218075/video/curious-dolphins.mp4?s=mp4-640x640-is&k=20&c=Do52tv7MrrXth01YhcxUC7CM_l8QPB6BABwWadfwjiA=",
  },

  {
    title: "Video Four",
    artist: "Pexel Video",
    src: "https://media.istockphoto.com/id/1874742292/video/lion-roaring.mp4?s=mp4-640x640-is&k=20&c=nxx0_OKPxt6vajpfwCDwXRXtq5_7dihgN5C6EOtwSZo=",
  },
];

let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// load video

function loadVideo(video) {
  title.textContent = video.title;
  artist.textContent = video.artist;
  videoCover.src = video.src;
  //   videoElement.src = video.src;
}

loadVideo(videos[videoIndex]);

// play video

function playVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");

  videoCover.play();
  isPlaying = true;
}

// pause video

function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");

  videoCover.pause();
  isPlaying = false;
}

// naxt video

function naxtVideo() {
  videoCover.pause();

  setTimeout(() => {
    videoIndex++;
    if (videoIndex > videos.length - 1) {
      videoIndex = 0;
    }
  });

  loadVideo(videos[videoIndex]);
  playVideo();
}

// back video

function backVideo() {
  videoCover.pause();

  setTimeout(() => {
    videoIndex--;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    }
  }, 300);

  loadVideo(videos[videoIndex]);
  playVideo();
}

// update Progress and time

function updateProgress(e) {
  // console.log("e", e.srcElement);
  const { duration, currentTime } = e.srcElement;
  if (isNaN(duration)) return;
  // Update progress bar
  const progressPercent = (currentTime / duration) * 100;
  // console.log(progressPercent);
  progress.style.width = `${progressPercent}%`;

  // Update time display
  currentElement.textContent = formatTime(currentTime);
  durationElement.textContent = formatTime(duration);
  videoCover.playbackRate = speed;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// progress-container

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = videoCover.duration;

  console.log("width", width);
  console.log("duration", duration);

  if (isNaN(duration)) return;

  const newTime = (clickX / width) * duration;
  videoCover.currentTime = newTime;
}

// all events

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});

forwardBtn.addEventListener("click", naxtVideo);

backwardBtn.addEventListener("click", backVideo);

// updateProgress

videoCover.addEventListener("timeupdate", updateProgress);

// speedSelect
speedSelect.addEventListener("change", (e) => {
  speed = parseFloat(e.target.value);
  videoCover.playbackRate = speed;
});

volumeSlider.addEventListener("input", (e) => {
  videoCover.volume = parseFloat(e.target.value);
  // videoCover.volume = 1; // full volume
});
