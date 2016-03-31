(function($) {
  "use strict";
	var $container = $('#our-class-main');
	$container.isotope({
		itemSelector : '.element-item'
	});
	$('#filters button').click(function(){
		var selector = $(this).attr('data-filter');
		$('#filters button').removeClass('is-checked');
		$(this).addClass('is-checked');
		$container.isotope({ filter: selector });
		return false;
	});
	$('#load-more-class').click(function(){
		$.ajax({
			type: "GET",
			url: 'ajax-class.html',
			cache: false,
			success: function (transport) {
				if(html != transport){
					html = transport;
					var $moreBlocks = $(transport).filter('.element-item');
					$container.append($moreBlocks).isotope('insert', $moreBlocks);
				}
			}
		});
	});
})(jQuery);