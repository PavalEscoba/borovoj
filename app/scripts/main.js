$(document).ready(function(){
	
	var slider = $('.bxslider').bxSlider({
		mode: 'horizontal', 
		controls: false,
		pager: true,
		pause: 7500,          
		speed: 500,
		auto: true,
		infiniteLoop: true,
		useCSS: false
	});

	$('.bx-pager-item a').click(function(e){
		var i = $(this).index();
		slider.goToSlide(i);
		slider.stopAuto();
		restart=setTimeout(function(){
			slider.startAuto();
		},500);

		return false;
	});
	(function(){
		$('.main-nav__toggle').on('click', function(e){
			var navWrapper = $('.main-nav__wrapper'),
			navToggle = $('.main-nav__toggle');

			if(navToggle.hasClass('main-nav__toggle--closed')){
				navWrapper
				.removeClass('main-nav__wrapper--closed')
				.addClass('main-nav__wrapper--opened');
				navToggle
				.removeClass('main-nav__toggle--closed')
				.addClass('main-nav__toggle--opened');
			}
			else{
				navWrapper
				.removeClass('main-nav__wrapper--opened')
				.addClass('main-nav__wrapper--closed');
				navToggle
				.removeClass('main-nav__toggle--opened')
				.addClass('main-nav__toggle--closed');
			}
		})
	}())

});
