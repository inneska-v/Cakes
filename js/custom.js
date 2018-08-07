$(function() {
	$('.slider').slick({
		speed: 500,
		arrows: true,
		prevArrow: '<img class="prev-arrows" src="images/prev-arrows.png">',
		nextArrow: '<img class="next-arrows" src="images/next-arrows.png">'
	});
	$('.slider-two').slick({
		speed: 500,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: '<img class="prev-arrows" src="images/prev-arrows.png">',
		nextArrow: '<img class="next-arrows" src="images/next-arrows.png">',
		responsive: [
			{
			breakpoint: 320,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.reviews-slider').slick({
		speed: 500,
		arrows: true,
		prevArrow: '<img class="prev-arrows" src="images/prev-arrows.png">',
		nextArrow: '<img class="next-arrows" src="images/next-arrows.png">'
	});
});
