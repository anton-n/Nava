$(window).on('load', function() {
	$('.preloader__inner').fadeOut(1337); 
	$('.preloader').delay(500).fadeOut('slow');
});

$(function() {

	$('.counter').counterUp({
		delay: 20,
		time: 2000,
		beginAt: 100,
	});

});
