

jQuery(document).ready(function($) {
    var audioUrl = $('.audio-url').data('url');

    var sound = new Howl({
        src: [audioUrl],
        volume: 1,
        loop: true,
        onplay: function() {
            $('.play-button img').attr('src', customAudioPlayer.pluginUrl + 'img/player-on.svg');
        },
        onpause: function() {
            $('.play-button img').attr('src', customAudioPlayer.pluginUrl + 'img/player-off.svg');
        },
        onend: function() {
            $('.play-button img').attr('src', customAudioPlayer.pluginUrl + 'img/player-off.svg');
        }
    });

    // Clear listener after first call.
    sound.once('load', function(){
      sound.play();
    });    

    var playButton = $('.play-button');

    // Play audio on play button click
    playButton.on('click', function() {
        if (!sound.playing()) {
            sound.play();
        } else {
            sound.pause();
        }
    });

    // Handle autoplay on user interaction

    $(document).one('click touchstart', function() {
        if (!sound.playing()) {
            sound.play();
        }
    });


    // Smooth fade out of audio and fade in of video sound when scrolling to video

    var video = $('.video-1');

    if (video) {
        var videoOffset = $(video).offset().top; // Ensure jQuery object for offset
        var windowHeight = $(window).height();

            var videoOffset = video.offset().top - 150;
            //console.log(videoOffset);
            var windowHeight = $(window).height();

            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();
                //console.log(scrollTop);
                var fadeStart = videoOffset - windowHeight;
                var fadeEnd = videoOffset;
                var fadeRange = fadeEnd - fadeStart;

                if (scrollTop > fadeStart && scrollTop < fadeEnd) {
                    video.muted = false;
                    var fadeFraction = (scrollTop - fadeStart) / fadeRange;
                    console.log(fadeFraction);
                    var audioVolume = 1 - fadeFraction;
                    var videoVolume = fadeFraction;

                    sound.volume(audioVolume);
                    video.prop('volume', videoVolume);
                } else if (scrollTop >= fadeEnd) {
                    video.muted = false;
                    sound.volume(0);
                    video.prop('volume', 1);
                    if (sound.playing()) {
                        //sound.pause();
                    }
                } else {
                    sound.volume(1);
                    video.prop('volume', 0);
                }
            });

        //video.muted = false;
        //video.play();
    } else {
        console.error("Video element not found.");
    }


    // // Attempt to autoplay on mouseover
    // $(document).one('mouseover', function() {
    //     if (!sound.playing()) {
    //         //sound.play();
    //     }
    // });

    // // Stop audio when scrolling
    // $(window).on('scroll', function() {
    //     if (sound.playing()) {
    //         //sound.pause();
    //     }
    // });

    // // Smooth fade out of audio when video begins
    // $('video').on('play', function() {
    //     sound.fade(sound.volume(), 0, 1000); // Adjust the fading speed here
    //     setTimeout(function() {
    //         sound.pause();
    //         sound.volume(1); // Reset volume for next play
    //     }, 1000);
    // });
});




jQuery(document).ready(function($) {



    // var audioPlayer = document.getElementById('audio-player');
    // var videoElement = $('video'); // Adjust the selector based on your video element


    // // Try to autoplay the audio, unmuting after a short delay
    // function attemptAutoplay() {
    //     audioPlayer.play().then(function() {
    //         setTimeout(function() {
    //             audioPlayer.muted = false;
    //         }, 1000); // Unmute after 1 second
    //     }).catch(function(error) {
    //         console.log('Audio playback was prevented by the browser:', error);
    //         playedOnLoad = true;
    //     });
    // }

    // // Stop audio when scrolling
    // $(window).on('scroll', function() {
    //     if (audioPlayer && !audioPlayer.paused) {
    //         //audioPlayer.pause();
    //     }
    // });

    // // Smooth fade out of audio when video begins
    // if (videoElement.length) {
    //     videoElement.on('play', function() {
    //         var fadeOutInterval = setInterval(function() {
    //             if (audioPlayer.volume > 0.1) {
    //                 audioPlayer.volume -= 0.1;
    //             } else {
    //                 clearInterval(fadeOutInterval);
    //                 audioPlayer.pause();
    //                 audioPlayer.volume = 1; // Reset volume for next play
    //             }
    //         }, 100); // Adjust the fading speed here
    //     });
    // }

    // // Try to start audio automatically on page load
    // //attemptAutoplay();


    

    // // Play audio on user interaction if autoplay fails
    // $(document).one('click touchstart mouseover', function() {
    //     if (audioPlayer.paused) {
    //         attemptAutoplay();
    //     }
    // });


});
