;;;(function  () {
	
		$.fn.checkBox = function  () {
			
			var $html = $('<div><span></span></div>');

			$html.addClass('checkbox-style').toggle(function() {	

			$(this).children().hide();

			}, function() {

			$(this).children().show();

				})

			.find('span').addClass('checkbox-chosed');
			
			this.append($html);

			return this;
		}

})()