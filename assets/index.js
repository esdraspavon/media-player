const video = document.querySelector("video");
        const button = document.querySelector("button");

        function MediaPlayer(config) {
            this.media = config.el;
            this.paused = true;
        }

        MediaPlayer.prototype.play = function(){
            this.media.play();
            this.paused = false;
        }
        MediaPlayer.prototype.pause = function(){
            this.media.pause();
            this.paused = true;
        }

        const player = new MediaPlayer({ el: video });

        button.onclick= () => player.paused ? player.play() : player.pause();