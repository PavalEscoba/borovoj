$(document).ready(function(){
	
	$('.bxslider').bxSlider({
		auto: true,
		pause: 7500,
		controls: false,
		pager: true
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
