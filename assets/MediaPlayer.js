
class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.paused = true;
        this.muted = true;
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };
        this.plugins.forEach((plugin) => {
            plugin.run(player);
        });
    }
    play() {
        this.media.play();
        this.paused = false;
    }
    pause() {
        this.media.pause();
        this.paused = true;
    }
    mute() {
        this.media.muted = true;
        this.muted = true;
    }
    unmute() {
        this.media.muted = false;
        this.muted = false;
    }
}



export default MediaPlayer;
