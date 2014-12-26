


$( document ).ready(function() {
    $('header').css("height", (window.innerHeight - 80)); 

    var newHeaderContentHeight = (window.innerHeight / 2) - ($('.header-content').height()/2);
    $('.header-content').css("top", newHeaderContentHeight); 
});