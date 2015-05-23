
;;;(function () {

	//var str ='Your Message for Tooltip will appear here,some textfonna placed here'

	$.fn.starTips =function  (content) {
	
	var $that = $(this);

	var $html = $('<div><p></p><span></span></div>');

		$html.children().hide();

		$html.addClass('star-tips').hover(function() {
		
		$(this).addClass('startips-hover');

		$(this).children().show();

	}, function() {
		
		$(this).removeClass('startips-hover');

		$(this).children().hide();

	});

	var $text_content = $html.find('p').text(content).addClass('star-tips-content')

	var $icon_down = $text_content.next().addClass('tips-content-down-icon');

	$(this).append($html);

	var content_height = $text_content.outerHeight() * (-1)
						 + parseInt($icon_down.css('top')) + 5; // 5 is gaps
		
	var content_width = $text_content.outerWidth() * (-1) /2
					  + $html.outerWidth() /2 ;

		$text_content.css({

			top: content_height,
			left: content_width

		});

}

})()