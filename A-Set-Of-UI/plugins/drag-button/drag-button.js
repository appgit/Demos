;;;(function () {

	$.fn.dragButton = function  () {

		var $html =$('<div class="dragbar-wrap dragbar-common"><div class="dragbar-left dragbar-common"></div><div class="dragbar-button dragbar-common"></div><div class="dragbar-right dragbar-common"></div></div>');

		$html.find('.dragbar-button').on('mousedown',function  (e) {

			var $that = $(this);

			var _x_to_left = e.pageX;

			var _width_left = $that.prev().width();

			var _width_right = $that.next().width();

			$(window).on('mousemove.drag_move',function  (e) {

				$('body').css({

					'-moz-user-select': 'none',
					'-webkit-user-select': 'none'

				});
				
				var _x_reseted = e.pageX - _x_to_left + _width_left;

				if( _x_reseted > $html.first().width() - $that.width() ){

					_x_reseted = $html.first().width() - $that.width();
				}
				if( _x_reseted < 0 ){

					_x_reseted = 0;
				}

				$that.css('left',_x_reseted);

				var reset_left_width = _x_reseted;

				var reset_right_width = $html.first().width() - reset_left_width;

				$that.prev().css('width',reset_left_width);

				$that.next().css('width',reset_right_width);

			})
		})

		$(window).on('mouseup.drag_up',function (e) {

				$(window).off('.drag_move');

				$('body').css({

					'-moz-user-select': 'text',
					'-webkit-user-select': 'text'

				});

		})
				$(this).append($html);

				return this;
	}

})()