const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.getElementById('volume');
const playbackSpeed = document.getElementById('playbackSpeed');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

volume.addEventListener('input', function () {
    video.volume = this.value;
});

playbackSpeed.addEventListener('input', function () {
    video.playbackRate = this.value;
});

document
    .querySelector('[data-skip="-10"]')
    .addEventListener('click', function () {
        video.currentTime -= 10;
    });

document
    .querySelector('[data-skip="25"]')
    .addEventListener('click', function () {
        video.currentTime += 25;
    });