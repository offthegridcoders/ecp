new WOW().init();

$('nav ul').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
});
$('nav h1').find('a').click(function(){
    $('body').animate({ scrollTop: 0 });
    return false;
});
$('header').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
});


$( document ).ready(function() {
  // adjusts header height
    $('header').css("height", window.innerHeight); 

    var newHeaderContentHeight = (window.innerHeight / 2) - ($('.header-content').height() + 20); // 50%
    //var newHeaderContentHeight = window.innerHeight - ($('.header-content').height() + 100);
    $('.header-content').css("top", newHeaderContentHeight); 

    $('nav ul a').each(function() {
      $(this).click(function() {
        $(this).addClass('active');
      })
    });
});

//$('a[href="#team"]').addClass('active');


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
  if ($(window).scrollTop() > window.innerHeight - 150) {
    $('nav').removeClass('clear-nav');
  } else {
    $('nav').addClass('clear-nav');
  };

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