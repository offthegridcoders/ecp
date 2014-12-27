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

preloadPictures(listOfImages, function(){$("#preload-wrapper").css("display","none");});















$( document ).ready(function() {
    $('header').css("height", (window.innerHeight - 80)); 

    var newHeaderContentHeight = (window.innerHeight / 2) - ($('.header-content').height()/2);
    $('.header-content').css("top", newHeaderContentHeight); 
});