$('.top-map').click(function() {
	$(this).toggleClass('top-map');
	$('#video-view').toggleClass('top-vid');
});

$('.top-vid').click(function() {
	$(this).preventDefault();
	$(this).toggleClass('top-vid');
	$('#map-view').toggleClass('top-map');
});