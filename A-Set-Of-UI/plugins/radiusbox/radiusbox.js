;;;(function  () {

		$.fn.radiusBox = function  () {
			
		var $html = $('<div><span></span></div>');

			$html.addClass('radiusbox-style').toggle(function() {	

			$(this).children().hide();

			}, function() {

			$(this).children().show();

			})
			
			.find('span').addClass('radiusbox-chosed');
			
			this.append($html);

			return this;
		}	
})()