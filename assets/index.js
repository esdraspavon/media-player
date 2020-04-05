import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const button = document.querySelector("#play");
const mute = document.querySelector("#mute");


const player = new MediaPlayer({
    el: video,
    plugins: [ new AutoPlay(), new AutoPause()],
});

button.onclick= () => player.paused ? player.play() : player.pause();

mute.onclick= () => player.muted ? player.unmute() : player.mute();