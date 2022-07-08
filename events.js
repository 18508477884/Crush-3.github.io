export default class EventEmitter {
    constructor() {
        // 首先获取到媒体对象，指代 video 元素本身，下文所有video元素都以此代替。
        this.media = document.querySelector('.J_kpMedia');
    }
    // 方法: 监听一个事件
    on(event, listener) {
        this[event](event, listener);
    }

    // 方法: 移除一个事件
    removeListener(event, listener) {
        this[event](event, listener);
    }

    // 方法: 触发一个事件
    emit(event, data) {
        // console.log(event);
        this[event](data);
    }
    loadstart() {
        // 1、loadstart：视频查找。当浏览器开始寻找指定的音频/视频时触发，也就是当加载过程开始时
        this.media.addEventListener('loadstart', function (e) {
            console.log('提示视频的元数据已加载')
            console.log(e)
            console.log(this.media.duration)            // NaN
        })
    }
    durationchange() {
        // 2、durationchange：时长变化。当指定的音频/视频的时长数据发生变化时触发，加载后，时长由 NaN 变为音频/视频的实际时长
        this.media.addEventListener('durationchange', function (e) {
            console.log('提示视频的时长已改变')
            console.log(e)
            console.log(this.media.duration)           // 528.981333   视频的实际时长（单位：秒）
        })
    }
    loadedmetadata() {
        // 3、loadedmetadata ：元数据加载。当指定的音频/视频的元数据已加载时触发，元数据包括：时长、尺寸（仅视频）以及文本轨道
        this.media.addEventListener('loadedmetadata', function (e) {
            console.log('提示视频的元数据已加载')
            console.log(e)
        })
    }
    loadeddata() {
        // 4、loadeddata：视频下载监听。当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时触发
        this.media.addEventListener('loadeddata', function (e) {
            console.log('提示当前帧的数据是可用的')
            console.log(e)
        })
    }
    progress() {
        // 5、progress：浏览器下载监听。当浏览器正在下载指定的音频/视频时触发
        this.media.addEventListener('progress', function (e) {
            console.log('提示视频正在下载中')
            console.log(e)
        })
    }
    canplay() {
        // 6、canplay：可播放监听。当浏览器能够开始播放指定的音频/视频时触发
        this.media.addEventListener('canplay', function (e) {
            console.log('提示该视频已准备好开始播放')
            console.log(e)
        })
    }
    canplaythrough() {
        // 7、canplaythrough：可流畅播放。当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时触发
        this.media.addEventListener('canplaythrough', function (e) {
            console.log('提示视频能够不停顿地一直播放')
            console.log(e)
        })
    }
    play() {
        // 8、play：播放监听
        this.media.addEventListener('play', function (e) {
            console.log('提示该视频正在播放中')
            console.log(e)
        })
    }
    pause() {
        // 9、pause：暂停监听
        this.media.addEventListener('pause', function (e) {
            console.log('暂停播放')
            console.log(e)
        })
    }
    seeking() {
        // 10、seeking：查找开始。当用户开始移动/跳跃到音频/视频中新的位置时触发
        this.media.addEventListener('seeking', function (e) {
            console.log('开始移动进度条')
            console.log(e)
        })
    }
    seeked() {
        // 11、seeked：查找结束。当用户已经移动/跳跃到视频中新的位置时触发
        this.media.addEventListener('seeked', function (e) {
            console.log('进度条已经移动到了新的位置')
            console.log(e)
        })
    }
    waiting() {
        // 12、waiting：视频加载等待。当视频由于需要缓冲下一帧而停止，等待时触发
        this.media.addEventListener('waiting', function (e) {
            console.log('视频加载等待')
            console.log(e)
        })
    }
    playing() {
        // 13、playing：当视频在已因缓冲而暂停或停止后已就绪时触发
        this.media.addEventListener('playing', function (e) {
            console.log('playing')
            console.log(e)
        })
    }
    timeupdate() {
        // 14、timeupdate：目前的播放位置已更改时，播放时间更新
        this.media.addEventListener('timeupdate', function (e) {
            console.log('timeupdate')
            console.log(e)
        })
    }
    ended() {
        // 15、ended：播放结束
        this.media.addEventListener('ended', function (e) {
            console.log('视频播放完了')
            console.log(e)
        })
    }
    error() {
        // 16、error：播放错误
        this.media.addEventListener('error', function (e) {
            console.log('视频出错了')
            console.log(e)
        })
    }
    volumechange() {
        // 17、volumechange：当音量更改时
        this.media.addEventListener('volumechange', function (e) {
            console.log('volumechange')
            console.log(e)
        })
    }
    stalled() {
        // 18、stalled：当浏览器尝试获取媒体数据，但数据不可用时
        this.media.addEventListener('stalled', function (e) {
            console.log('stalled')
            console.log(e)
        })
    }
    ratechange() {
        // 19、ratechange：当视频的播放速度已更改时
        this.media.addEventListener('ratechange', function (e) {
            console.log('ratechange')
            console.log(e)
        })
    }
}
