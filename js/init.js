
// list of images to preload
var listOfImages = [
  'assets/header.jpg',
  'assets/team/team01.jpg',
  'assets/team/team01-bw.jpg',
  'assets/team/team02.jpg',
  'assets/team/team02-bw.jpg',
  'assets/team/team03.jpg',
  'assets/team/team03-bw.jpg',
  'assets/team/team04.jpg',
  'assets/team/team04-bw.jpg',
  'assets/team/team05.jpg',
  'assets/team/team05-bw.jpg',
  'assets/team/team06.jpg',
  'assets/team/team06-bw.jpg'
  ];

// preload images function
var preloadPictures = function(pictureUrls, callback) {
    var i,
        j,
        loaded = 0;

    for (i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {                               
                if (++loaded == pictureUrls.length && callback) {
                    callback();
                }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {};
            img.onabort = function () {};

            img.src = src;
        } (new Image(), pictureUrls[i]));
    }
};

// call preload function
preloadPictures(listOfImages, function(){$("#preload-wrapper").css("display","none");});


$( document ).ready(function() {
  // adjusts header height
    $('header').css("height", (window.innerHeight - 80)); 

    var newHeaderContentHeight = (window.innerHeight / 2) - ($('.header-content').height()/2);
    $('.header-content').css("top", newHeaderContentHeight); 

    $('nav ul a').each(function() {
      $(this).click(function() {
        $(this).addClass('active');
      })
    });
});

$('a[href="#team"]').addClass('active');


var isVisible = function(elem) {
  var elemTop = $(elem).offset().top;
  var elemHeight = $(elem).height();
  var sclTop = $(window).scrollTop();
  var newTop = elemTop - sclTop;
  if ((newTop < 1) && (newTop > (-1*elemHeight))) {
    return true;
  } else {
    return false;
  }
};

$(window).on('scroll', function ( e ) {
  if(isVisible('#team')) {
    $('a[href="#team"]').addClass('active');
  } else {
    $('a[href="#team"]').removeClass('active');
  }
  if(isVisible('#contact')) {
    $('a[href="#contact"]').addClass('active');
  } else {
    $('a[href="#contact"]').removeClass('active');
  }
});