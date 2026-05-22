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
    musicPath: "./assets/music/khucxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Phút giao thừa lặng lẽ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Tăng Nhật Tuệ",
    musicPath: "./assets/music/phutgiaothualangle.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Thì Thầm Mùa Xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Nhiều ca sĩ",
    musicPath: "./assets/music/thithammuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Khúc xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Rất nhiều ca sĩ",
    musicPath: "./assets/music/khucxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân gọi",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Diệu Linh",
    musicPath: "./assets/music/muaxuangoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Anh cho em mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thu Phương - Huy MC",
    musicPath: "./assets/music/anhchoemmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Bài ca tết cho em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Đàm Vĩnh Hưng",
    musicPath: "./assets/music/baicatetchoem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Bình yên là khi trở về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "./assets/music/binhyenlakhitrove.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Cung đàn mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tốp ca",
    musicPath: "./assets/music/cungdanmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Chiều xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh",
    musicPath: "./assets/music/chieuxuan.mp3",
  
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đêm giao mùa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Minh Phương",
    musicPath: "https://archive.org/download/nhuhoamuaxuan/demgiaomua.mp3"
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Điệp khúc mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tam ca áo trắng",
    musicPath: "./assets/music/diepkhucmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Dịu dàng sắc xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Linh",
    musicPath: "./assets/music/diudangsacxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đoản xuân ca",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Quang Linh",
    musicPath: "./assets/music/doanxuanca.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Đón xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Như Quỳnh",
    musicPath: "./assets/music/donxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hát về mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "./assets/music/hatvemuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hoa cỏ mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh",
    musicPath: "./assets/music/hoacomuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Hoa xuân ca",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phương Nga",
    musicPath: "./assets/music/hoaxuanca.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Khúc giao mùa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Linh - Anh Quân",
    musicPath: "./assets/music/khucgiaomua.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Lắng nghe mùa xuân về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Hồng Nhung - Bằng Kiều",
    musicPath: "./assets/music/langnghemuaxuanve.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Lời tỏ tình của mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phương Linh",
    musicPath: "./assets/music/loitotinhcuamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Một mùa xuân nho nhỏ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "NSUT Kim Phúc",
    musicPath: "./assets/music/motmuaxuannhonho.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa chim én bay",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Điệp",
    musicPath: "./assets/music/muachimenbay.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân bên cửa sổ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Ngọc Ánh",
    musicPath: "./assets/music/muaxuanbencuaso.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân đầu tiên",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Thúy",
    musicPath: "./assets/music/muaxuandautien.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân đến rồi đó",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thu Phương",
    musicPath: "./assets/music/muaxuandenroido.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân làng lúa làng hoa",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "./assets/music/muaxuanlanglualanghoa.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân ơi",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mây trắng",
    musicPath: "./assets/music/muaxuanoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân ơi mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mỹ Tâm",
    musicPath: "./assets/music/muaxuanoimuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Mùa xuân trên quê hương",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Hoa",
    musicPath: "./assets/music/muaxuantrenquehuong.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Nắng có còn xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "./assets/music/nangcoconxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ngày tết quê em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mây trắng",
    musicPath: "./assets/music/ngaytetqueem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ngày xuân long phụng xum vầy",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Nhiều ca sĩ",
    musicPath: "./assets/music/ngayxuanlongphungxumvay.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Như hoa mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Bảo Thy - Ái Phương - Văn Mai Hương",
    musicPath: "./assets/music/nhuhoamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình ca mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Phan Huấn - Thúy Lan",
    musicPath: "./assets/music/tinhcamuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình khúc mùa xuân",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Tiêu Châu Như Quỳnh",
    musicPath: "./assets/music/tinhkhucmuaxuan.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Tình xuân quê",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi",
    musicPath: "./assets/music/tinhxuanque.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Ước mơ ngọt ngào",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Đan Trường - Cẩm Ly",
    musicPath: "./assets/music/uocmongotngao.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân bên em",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "TSD band",
    musicPath: "./assets/music/xuanbenem.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân cười",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thùy Chi - Tiến Minh",
    musicPath: "./assets/music/xuancuoi.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân đã về",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Lan",
    musicPath: "./assets/music/xuandave.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân và tuổi trẻ",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Thanh Lan",
    musicPath: "./assets/music/xuanvatuoitre.mp3",
  },
  {
    backgroundImage: "./assets/images/a.jpg",
    posterUrl: "./assets/images/a.jpg",
    title: "Xuân họp mặt",
    album: "Nhạc Sĩ...",
    year: 2025,
    artist: "Mai Hương",
    musicPath: "./assets/music/xuanhopmat.mp3",
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
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
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
 * 
 * remove active state from last time played music
 * and add active state in clicked music
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
 * 
 * change all visual information on player, based on current music
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

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
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
 * 
 * play and pause music when click on play button
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


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
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
 * 
 * seek music while changing player seek range
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
    skipNext(); // Chuyển sang bài hát tiếp theo khi bài hát hiện tại kết thúc
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
  audioSource.play(); // Phát bài hát mới
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
  audioSource.play(); // Phát bài hát mới
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const playedSongs = new Set();

const shuffleMusic = () => {
  if (playedSongs.size === musicData.length) {
    playedSongs.clear(); // reset when all songs have been played
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
 * 
 * increase or decrease music volume when change the volume range
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
