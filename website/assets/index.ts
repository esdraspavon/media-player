import MediaPlayer from '@esdraspavon/mediaplayer';
import AutoPlay from '@esdraspavon/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@esdraspavon/mediaplayer/lib/plugins/AutoPause';
import Ads from '@esdraspavon/mediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("#play");
const mute: HTMLElement = document.querySelector("#mute");


const player = new MediaPlayer({
    el: video,
    plugins: [ new AutoPlay(), new AutoPause(), new Ads()],
});

button.onclick= () => player.togglePlay();

mute.onclick= () => player.media.muted ? player.unmute() : player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}