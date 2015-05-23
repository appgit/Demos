;;;(function(){

		$.fn.dragBar = function  () {
			
		var $html = $('<div><a></a><div><div></div></div><a></a></div>'); 

		$html.addClass('drag-bar-outer clearfix');

		var $drag_btn_l = $html.find('a').first().addClass('drag-bar-btn-left');

		var $drag_scroll_outer = $drag_btn_l.next().first().addClass('drag-bar-scroll-outer'); 

		var $drag_scroll = $drag_scroll_outer.children().addClass('drag-bar-scroll')

		var $drag_btn_r  = $drag_scroll_outer.next().first().addClass('drag-bar-btn-right'); 

		var mov_length= 10; 

		$drag_btn_l.hover(function() {
			
			$(this).addClass('drag-bar-btn-left-hover');

		}, function() {

			$(this).removeClass('drag-bar-btn-left-hover');
			
		}).on('click', function(event) {

			event.preventDefault();	

			if( parseInt($drag_scroll.css('left')) >= mov_length){
				
				$drag_scroll.css('left', '-=' + mov_length);
			}
			else{

				$drag_scroll.css('left', '0');
			}

		});

		$drag_btn_r.hover(function() {
			
			$(this).addClass('drag-bar-btn-right-hover');

		}, function() {

			$(this).removeClass('drag-bar-btn-right-hover');
			
		}).on('click', function(event) {

			event.preventDefault();	

			if( parseInt($drag_scroll.css('left')) <= $drag_scroll_outer.outerWidth() - $drag_scroll.outerWidth() -mov_length){
				
				$drag_scroll.css('left', '+=' + mov_length);
			}
			else{

				$drag_scroll.css('left', $drag_scroll_outer.outerWidth() - $drag_scroll.outerWidth());
			}

		});

		$drag_scroll.on('mousedown', function(e) {

			var left_pagex = e.pageX;

			var left_reseted = parseInt($drag_scroll.css('left'));

			$(window).on('mousemove.wnd_moving', function(e_win) {

				var offset_len = e_win.pageX - left_pagex ; 

				if( offset_len + left_reseted < 0 ){

					offset_len = - left_reseted ; 
				}
				else if (offset_len + left_reseted > $drag_scroll_outer.outerWidth() - $drag_scroll.outerWidth()) {

					offset_len = $drag_scroll_outer.outerWidth() - $drag_scroll.outerWidth() - left_reseted; 

				};

				$drag_scroll.css('left',left_reseted + offset_len );

				$('body').css({

					'-moz-user-select': 'none',
					'-webkit-user-select': 'none'

				});

			});
			
		});

			$(window).on('mouseup', function(event) {

				$(window).off('.wnd_moving');	

					$('body').css({

					'-moz-user-select': 'text',
					'-webkit-user-select': 'text'

				});
					
		});

		this.append($html);

		return this; 

		}
	})()