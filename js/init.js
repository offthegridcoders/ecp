$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

$([
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
  ]).preload();


$( document ).ready(function() {
    $('header').css("height", (window.innerHeight - 80)); 

    var newHeaderContentHeight = (window.innerHeight / 2) - ($('.header-content').height()/2);
    $('.header-content').css("top", newHeaderContentHeight); 
});