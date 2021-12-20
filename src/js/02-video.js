const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from "lodash/throttle";

const onPlay = function(data) {
    let time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time)
};

player.on('timeupdate', throttle(onPlay , 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
         case'RangeError':
 // the time was less than 0 or greater than the video’s duration
            break;

        default:
 // some other error occurred
            break;
    }
});