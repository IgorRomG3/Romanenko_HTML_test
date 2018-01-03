(function($){
    $(document).ready(function () {
		if($(document).width() <= 500) {
			$('.menu > .parent > a').click(function() {
				if($('.menu li > ul li ul').hasClass( "toggle-menu" )) {
					$('.menu li > ul li ul').removeClass( "toggle-menu" );
				}
				$('.menu > .parent > ul').toggleClass( "toggle-menu" );
			});

			$('.menu li > ul li').click(function() {
				$('.menu li > ul li ul').toggleClass( "toggle-menu" );
			});
		}
    })
})(jQuery);