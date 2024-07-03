

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
      //sound.play();
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
           // sound.play();
        }
    });


    // Smooth fade out of audio and fade in of video sound when scrolling to video

    var video = $('.video-1');

    // if (video) {
    //     var videoOffset = $(video).offset().top; // Ensure jQuery object for offset
    //     var windowHeight = $(window).height();

    //         var videoOffset = video.offset().top - 150;
    //         //console.log(videoOffset);
    //         var windowHeight = $(window).height();

    //         $(window).on('scroll', function() {
    //             var scrollTop = $(window).scrollTop();
    //             //console.log(scrollTop);
    //             var fadeStart = videoOffset - windowHeight;
    //             var fadeEnd = videoOffset;
    //             var fadeRange = fadeEnd - fadeStart;

    //             if (scrollTop > fadeStart && scrollTop < fadeEnd) {
    //                 video.muted = false;
    //                 var fadeFraction = (scrollTop - fadeStart) / fadeRange;
    //                 console.log(fadeFraction);
    //                 var audioVolume = 1 - fadeFraction;
    //                 var videoVolume = fadeFraction;

    //                 sound.volume(audioVolume);
    //                 video.prop('volume', videoVolume);
    //             } else if (scrollTop >= fadeEnd) {
    //                 video.muted = false;
    //                 sound.volume(0);
    //                 video.prop('volume', 1);
    //                 if (sound.playing()) {
    //                     //sound.pause();
    //                 }
    //             } else {
    //                 sound.volume(1);
    //                 video.prop('volume', 0);
    //             }
    //         });

    // } else {
    //     console.error("Video element not found.");
    // }



});




