audioPlayer.addEventListener('timeupdate', () => {
    let position = audioPlayer.currentTime / audioPlayer.duration;

    audioFillBar.style.width = position * 100 + '%';
});

audioNext.addEventListener('click', () => {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    audioPlaySong();
    audioShowPausePlay.src = "image/Pause.png";
});

audioPrevious.addEventListener('click', () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    audioPlaySong();
    audioShowPausePlay.src = "image/Pause.png";
});

audioPlay.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        audioShowPausePlay.src = "image/Pause.png";
    } else {
        audioPlayer.pause();
        audioShowPausePlay.src = "image/Play.png";
    }
});



const audioPlaySong = () => {
    audioPlayer.src = songs[currentSong].src;
    audioPlayer.play();

    audioUpdateInfo();
}

const audioUpdateInfo = () => {
    audioSongTitle.textContent = songs[currentSong].name;
    audioSinger.textContent = songs[currentSong].singer;
}