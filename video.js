import EventEmitter from "./events.js"
export default class KuPlayer {
    constructor() {
        // 生成一个EventEmitter 的实例。
        this.emiter = new EventEmitter();
        this.media = this.emiter.media
        const { currentTime, duration } = this.media;
        const { buffered } = this.media;
        console.log(buffered,);
    }
    // 方法: 监听一个事件
    on(event, listener) {
        this.emiter.on(event, listener);
    }

    // 方法: 移除一个事件
    off(event, listener) {
        this.emiter.removeListener(event, listener);
    }

    // 方法: 触发一个事件
    emit(event, data) {
        this.emiter.emit(event, data);
    }
    // 然后是 play 和 pause 方法。 
    play() {
        // 执行原生play()方法
        this.media.play();
        // 这里显示播放器播放状态UI
        document.querySelector('.play').style.display = 'none';
        document.querySelector('.pause').style.display = 'block';

        // 触发emiter 的 play 事件
        this.emit('play');
    }
    pause() {
        // 执行原生pause()方法
        this.media.pause();
        // 这里显示播放器暂停状态UI 
        document.querySelector('.play').style.display = 'block';
        document.querySelector('.pause').style.display = 'none';
        // 触发emiter 的 play 事件
        this.emit('pause');
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    }
    get volume() {
        return this.media.volume;
    }

    set volume(value) {
        //设置音量
        this.media.volume = value;
        // 触发emiter 的 volumechange 事件
        this.emit('volumechange');
    }

    get muted() {
        return this.media.muted;
    }

    set muted(muted) {
        this.media.muted = muted;
    }

    get currentTime() {
        return this.media.currentTime;
    }

}

