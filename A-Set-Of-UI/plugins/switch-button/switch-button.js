
;;;(function  () {
	
	$.fn.switchBtn = function  (which_style) {

		var switch_on = 'switch-on',
			switch_off = 'switch-off',
			switchbtn_selected = 'switchbtn-selected';

		if(which_style == '2'){

			switch_on = 'switch-on-style2';
			switch_off = 'switch-off-style2';
			switchbtn_selected = 'switchbtn-selected-style2';
			
		}

		var $html = $('<div><div>On</div><div>Off</div></div>');

		$html.addClass('switchbtn');

		var $on = $html.children().first().addClass(switch_on).addClass(switchbtn_selected);

		var $off = $html.children().last().addClass(switch_off);


		$on.click(function() {

			$(this).addClass(switchbtn_selected);

			$(this).next().removeClass(switchbtn_selected);

		});
		
		$off.click(function() {

			$(this).addClass(switchbtn_selected);

			$(this).prev().removeClass(switchbtn_selected);
		});

		$(this).append($html);

		return this;
	}
})()