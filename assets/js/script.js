'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Khúc xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Rất nhiều ca sĩ",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/khucxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Phút giao thừa lặng lẽ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Tăng Nhật Tuệ",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/phutgiaothualangle.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Thì Thầm Mùa Xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Nhiều ca sĩ",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/thithammuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Khúc xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Rất nhiều ca sĩ",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/khucxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân gọi",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Diệu Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuangoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Anh cho em mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thu Phương - Huy MC",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/anhchoemmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Bài ca tết cho em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Đàm Vĩnh Hưng",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/baicatetchoem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Bình yên là khi trở về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/binhyenlakhitrove.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Cung đàn mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tốp ca",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/cungdanmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Chiều xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/chieuxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đêm giao mùa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Minh Phương",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/demgiaomua.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Điệp khúc mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tam ca áo trắng",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/diepkhucmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Dịu dàng sắc xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/diudangsacxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đoản xuân ca",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Quang Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/doanxuanca.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đón xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Như Quỳnh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/donxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hát về mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/hatvemuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hoa cỏ mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/hoacomuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hoa xuân ca",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phương Nga",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/hoaxuanca.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Khúc giao mùa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh - Anh Quân",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/khucgiaomua.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Lắng nghe mùa xuân về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Hồng Nhung - Bằng Kiều",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/langnghemuaxuanve.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Lời tỏ tình của mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phương Linh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/loitotinhcuamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Một mùa xuân nho nhỏ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "NSUT Kim Phúc",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/motmuaxuannhonho.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa chim én bay",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Điệp",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muachimenbay.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân bên cửa sổ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Ánh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuanbencuaso.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân đầu tiên",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Thúy",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuandautien.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân đến rồi đó",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thu Phương",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuandenroido.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân làng lúa làng hoa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuanlanglualanghoa.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân ơi",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mây trắng",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuanoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân ơi mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Tâm",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuanoimuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân trên quê hương",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/muaxuantrenquehuong.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Nắng có còn xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/nangcoconxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ngày tết quê em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mây trắng",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/ngaytetqueem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ngày xuân long phụng xum vầy",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Nhiều ca sĩ",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/ngayxuanlongphungxumvay.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Như hoa mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Bảo Thy - Ái Phương - Văn Mai Hương",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/nhuhoamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình ca mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phan Huấn - Thúy Lan",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/tinhcamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình khúc mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tiêu Châu Như Quỳnh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/tinhkhucmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình xuân quê",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/tinhxuanque.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ước mơ ngọt ngào",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Đan Trường - Cẩm Ly",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/uocmongotngao.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân bên em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "TSD band",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/xuanbenem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân cười",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Tiến Minh",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/xuancuoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân đã về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Lan",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/xuandave.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân và tuổi trẻ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Lan",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/xuanvatuoitre.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân họp mặt",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mai Hương",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/xuanhopmat.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
      
      <div class="music-info">
        <p class="music-title">${musicData[i].title}</p>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
    skipNext();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
  audioSource.play();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
  audioSource.play();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const playedSongs = new Set();

const shuffleMusic = () => {
  if (playedSongs.size === musicData.length) {
    playedSongs.clear();
  }

  let randomMusic;
  do {
    randomMusic = getRandomMusic();
  } while (playedSongs.has(randomMusic));

  playedSongs.add(randomMusic);
  currentMusic = randomMusic;
};

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");
  isShuffled = !isShuffled;
}

playerShuffleBtn.addEventListener("click", shuffle);

/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
