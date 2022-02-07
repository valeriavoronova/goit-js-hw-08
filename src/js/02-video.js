


import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

var throttle = require('lodash.throttle');
// iframe.addEventListener('timeupdate', currentTime)

    const player = new Player(iframe);

    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

    const onPlay = function(data) {
        
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
        //console.log(data.seconds);

    }

    var throttled = throttle(onPlay, 1000)
         
    player.on('timeupdate', throttled);




// player.setCurrentTime().then(function(seconds) {
//     console.log(seconds)
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// player.getCurrentTime().then(function(seconds) {
//     console.log(seconds)
// });