
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

  /* ========================================================================
     Animated Skill Bar
   ========================================================================== */
  $('.skill-bar li').each(function (i) {
    $(this).appear(function() {
      $(this).animate({opacity:1,left:"0px"},1200);
      var b = $(this).find(".wrapper span").attr("data-width");
      $(this).find("span").animate({
      width: b + "%"
      }, 1700, "swing");
    });
  });
$(window).load(function(){
    
    // Page loader
    $(".page-loader div").delay(0).fadeOut();
    $(".page-loader").delay(600).fadeOut("slow");
    
});
    
// Fixed Navigation 
$(window).scroll(function() {
  var bodyTop = Math.max($('body').scrollTop(), $('html').scrollTop());
  var window_height =  $('.intro').outerHeight();
    $('.navbar').each(function (index) {
      if ($(window).scrollTop() < window_height){
        $('.navbar').removeClass('fixed-nav');                    
      }
      if (bodyTop > ($(this).position().top - 0))
      {
        $('.navbar').removeClass('fixed-nav');
        $('.navbar:eq(' + index + ')').addClass('fixed-nav');
      }
    });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Counters
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

//Carousel
$(document).ready(function() {
  $(".owl-projects").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
  $(".blog-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
  $(".tweets").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      stopOnHover:true,
      autoPlay: 4000
  });
});

//Portfolio
$(function(){
  $('#extra-portfolio').mixItUp();
});


//Slider
$( document ).ready(function() {
    $('#slider').superslides({
      animation: 'fade',
      play: 4000
    })
});

//Parallax
$(document).ready(function(){

  $('#counters').parallax("50%", 0.15);
  $('#tweets').parallax("50%", 0.15);
  $('#prices').parallax("50%", 0.15);
  $('#contacts').parallax("50%", 0.15);
  $('#team').parallax("50%", 0.15);
})

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(53.385873, -1.471471),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'images/map-marker.png';
    var myLatLng = new google.maps.LatLng(53.385873, -1.471471);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}


//Text Rotator Library

jQuery(document).ready(function($){
  //set animation timing
  var animationDelay = 2500,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect 
    revealDuration = 600,
    revealAnimationDelay = 1500;
  
  initHeadline();
  

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters($words) {
    $words.each(function(){
      var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
      for (i in letters) {
        if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
      var headline = $(this);
      
      if(headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
      } else if (headline.hasClass('clip')){
        var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 10
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type') ) {
        //assign to .cd-words-wrapper the width of its longest word
        var words = headline.find('.cd-words-wrapper b'),
          width = 0;
        words.each(function(){
          var wordWidth = $(this).width();
            if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
      };

      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    
    if($word.parents('.cd-headline').hasClass('type')) {
      var parentSpan = $word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting'); 
      setTimeout(function(){ 
        parentSpan.removeClass('selected'); 
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
    
    } else if($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
        switchWord($word, nextWord);
        showWord(nextWord);
      });

    } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

    } else {
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if($word.parents('.cd-headline').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');

    }  else if($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
        setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
      });
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
    
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
    } else if($bool) { 
      setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }

    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    } 
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
    
    if(!$letter.is(':last-child')) { 
      setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
    } else { 
      if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
      if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }
});
  