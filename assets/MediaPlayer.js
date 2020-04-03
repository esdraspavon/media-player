
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.paused = true;
    this.muted = true;

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach((plugin) => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function(){
    this.media.play();
    this.paused = false;
}
MediaPlayer.prototype.pause = function(){
    this.media.pause();
    this.paused = true;
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
    this.muted = true;
    
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
    this.muted = false;
}

export default MediaPlayer;
