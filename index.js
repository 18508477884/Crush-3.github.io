import KuPlayer from "./video.js"
const video = new KuPlayer()
console.log(video.media)


function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
}

on('.play', 'click', () => {
    video.play();
});
on('.pause', 'click', () => {
    video.pause();
});
on('.full-screen', 'click', () => {
    video.requestFullscreen(document.querySelector('.controls'))
});






