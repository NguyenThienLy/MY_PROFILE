audioPlayer.addEventListener('timeupdate', () => {
    let position = audioPlayer.currentTime / audioPlayer.duration;

    audioFillBar.style.width = position * 100 + '%';
});

audioPlayer.addEventListener('load', () => {
    audioPlayer.play();
});

audioNext.addEventListener('click', () => {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    audioPlaySongNow();
    audioUpdateCollapseExtend('image/Pause.png');
});

audioPrevious.addEventListener('click', () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    audioPlaySongNow();
    audioUpdateCollapseExtend('image/Pause.png');
});

audioPlayExtend.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        audioUpdateCollapseExtend('image/Pause.png');
    } else {
        audioPlayer.pause();
        audioUpdateCollapseExtend('image/Play.png');
    }
});

audioPlayCollapse.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        audioUpdateCollapseExtend('image/Pause.png');
    } else {
        audioPlayer.pause();
        audioUpdateCollapseExtend('image/Play.png');
    }
});


const audioPlaySong = () => {
    audioUpdateInfo();

    audioPlayer.src = songs[currentSong].src;
}

const audioPlaySongNow = () => {
    audioUpdateInfo();

    audioPlayer.src = songs[currentSong].src;
    audioPlayer.play();
}

const audioUpdateInfo = () => {
    audioSongTitle.textContent = songs[currentSong].name;
    audioSinger.textContent = songs[currentSong].singer;
}

const audioUpdateCollapseExtend = (src) => {
    audioShowPausePlayExtend.src = src;
    audioShowPausePlayCollapse.src = src;
}