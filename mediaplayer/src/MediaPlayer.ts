
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        // this.paused = true;
        // this.muted = true;
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');

        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.style.position = 'relative';
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        // const player = {
        //     play: () => this.play(),
        //     pause: () => this.pause(),
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };
        this.plugins.forEach((plugin) => {
            // plugin.run(player);
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
        // this.paused = false;
    }

    pause() {
        this.media.pause();
        // this.paused = true;
    }

    togglePlay() {
        if(this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
        // this.muted = true;
    }

    unmute() {
        this.media.muted = false;
        // this.muted = false;
    }
}



export default MediaPlayer;
