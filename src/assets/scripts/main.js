/*
    MAIN.JS - Last updated: 06.10.16
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// WINDOW LOAD
//-----------------------------------------------------------------

$(window).on('load', function() {
    $('html').addClass('has-loaded');

    // remove animations
    var cacheDelay = setTimeout(function(){
        $('html').addClass('has-animated');
        launchParallax();
    }, 3000);
});

//-----------------------------------------------------------------
// EYE PARALLAX
//-----------------------------------------------------------------

function launchParallax() {

    // DAN EYES PARALLAX
    var target = $('.sprite-dan-torso')[0];
    var parallax = new Parallax(target, {
        invertX: false,
        invertY: false,
        limitX: 15,
        limitY: 15,
    });

    // // MITCH EYES PARALLAX
    var target = $('.sprite-mitch-torso')[0];
    var parallax = new Parallax(target, {
        invertX: false,
        invertY: true,
        limitX: 10,
        limitY: 20,
    });
}

// CHANNELS
// var target = $('.btn-parallax')[0];
// var parallax = new Parallax(target, {
//     limitX: 10,
//     limitY: 10,
//     relativeInput: true,
//     hoverOnly: true,
//     // clipRelativeInput: true
// });



// BOOKS
// var target = $('.has-parallax')[0];
// var parallax = new Parallax(target, {
//     limitX: 10,
//     limitY: 10,
//     relativeInput: true,
//     hoverOnly: true
// });

// BOOK HTML
// <span class="book has-parallax">
//     <img class="bg layer" data-depth="0.8" width="100%"  alt="Mal Winter and the Cloud Runners">
//     <img class="fg layer" data-depth="1.0" width="100%" alt="Mal Winter and the Cloud Runners">
//     <a href="/store/" class="btn-price-sticker layer" data-depth="1.4"><span class="dollar-sign">$</span>3</a>
//     <span class="book-shadow layer" data-depth="0.5"></span>
// </span>

//-----------------------------------------------------------------
// LAUNCH MANAGE ON KEYPRESS
//-----------------------------------------------------------------

key('⌘+shift+m, ctrl+shift+m', function(){
  window.location = '/manage/';
});

key('⌘+shift+p, ctrl+shift+p', function(){
  window.location = '/the-mitching-hour/';
});

//-----------------------------------------------------------------
// Magnific Popup
//-----------------------------------------------------------------

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

//-----------------------------------------------------------------
// CUT DAN'S HAIR
//-----------------------------------------------------------------

$('.sprite-dan-torso.has-long-hair').click(function(){
    $(this).toggleClass('has-long-hair');
});

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

$(".global-header").headroom({
    // vertical offset in px before element is first unpinned
    offset : 60,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 5,
        down : 0
    },
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top",
        // when at bottom of scoll area
        bottom : "headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "headroom--not-bottom"
    },
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}
});

//==================================================
//
//==================================================