
// list of images to preload
var listOfImages = [
  'assets/header2.gif',
  'assets/team/steve.png',
  'assets/team/chris.png',
  'assets/team/ivan.png',
  'assets/team/niksa.png',
  'assets/team/petar.png'
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
