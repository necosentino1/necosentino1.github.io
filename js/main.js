$(function(){


// listen for a click event on buttons 
$('.button-1').click(timelineShow);
$('#radio2').click(timelineShowReverse);
$('#radio1').click(timelineShow1);

// define a function to toggle timeline show for button 1 
// define a function to toggle timeline and timeline reverse for button 2
function timelineShow () {
  $('.timeline').toggleClass('show');
  $('.intro-reverse').toggleClass('show');
  $('html, body').animate({scrollTop: header, duration: 1200}, 'easeOut');
}

var header = $('.header').height();

function timelineShow1 () {
  $('.timeline').removeClass('timeline-reverse');
}

function timelineShowReverse () {
  $('.timeline').toggleClass('timeline-reverse');
}


// listen for a click event on dates
$('.date.1').click(showInfo1);
$('.date.2').click(showInfo2);
$('.date.3').click(showInfo3);
$('.date.4').click(showInfo4);
$('.date.5').click(showInfo5);
$('.date.6').click(showInfo6);
$('.date.7').click(showInfo7);

// define functions to toggle info after click event on date 
function showInfo1 () {
  $('.info.1').toggleClass('show');
  $('.date.1').toggleClass('date-selected');
  
}

function showInfo2 () {
  $('.info.2').toggleClass('show');
  $('.date.2').toggleClass('date-selected');
}

function showInfo3 () {
  $('.info.3').toggleClass('show');
  $('.date.3').toggleClass('date-selected');
}

function showInfo4 () {
  $('.info.4').toggleClass('show');
  $('.date.4').toggleClass('date-selected');
}

function showInfo5 () {
  $('.info.5').toggleClass('show');
  $('.date.5').toggleClass('date-selected');
}

function showInfo6 () {
  $('.info.6').toggleClass('show');
  $('.date.6').toggleClass('date-selected');
}

function showInfo7 () {
  $('.info.7').toggleClass('show');
  $('.date.7').toggleClass('date-selected');
}

});