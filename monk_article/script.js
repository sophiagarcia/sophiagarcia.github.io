$(function(){

	$('.parallax-container').parallax({
		imageSrc: 'monkopening.jpg'
	})

	$('.parallax-container2').parallax({
		imageSrc: 'smokingmonk.jpg'
	})

	$('.parallax-container3').parallax({
		imageSrc: 'endingmonk.jpg'
	})

	$(document).ready(function(){
    $('.carousel').carousel();
    });

	window.sr = ScrollReveal();
		sr.reveal('.container-fluid');

});