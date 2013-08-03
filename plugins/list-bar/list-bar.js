
;;;(function(){
		
	$.fn.listBar = function  (arr) {

		var $that =$(this);

		var $html = $('<div><div><li><span>请选择一项<span></li></div><div><a></a></div></div>')
		.addClass('list-bar');

		var $ul = $('<ul></ul>').addClass('list-bar-ul');

		var $li =$('<li></li>');

		var items = arr ? arr.length : 0;

		for( var i = 0; i < items; i++ ){

			(function  (cur) {

			$li.text(arr[cur]).on('click',function  () {
				
				$('.list-icon').css('background-position','5px -126px');

				$ul.prev().text(arr[cur]);

				$ul.slideUp();
			});

			$li.clone(true).appendTo($ul);

			})(i);
		}

		$html.first().children().find('li').first().addClass('item-chosed').append($ul);
		
			$html.children().first().addClass('list-bar-content')
			.children().find($ul).addClass('list-bar-ul').hide()
			.children().addClass('list-items');

			var $arrow_icon =$html.children().last().addClass('list-bar-icon')
			.children().css('background-position','5px -126px')
			.addClass('icon list-icon')
			.click(function() {	
				
			if($ul.is(':visible')){

				$(this).css('background-position','5px -126px');

				$ul.slideUp();
			}
			else{

			$(this).css('background-position','5px -145px');

			$ul.slideDown();

			}
		});

		$html.find('.item-chosed').click(function(event) {

				if($ul.is(':visible')){

				$arrow_icon.css('background-position','5px -126px');

				$ul.slideUp();
			}
			else{

			$arrow_icon.css('background-position','5px -145px');

			$ul.slideDown();

			}

			});

		$(this).append($html);
		
		return this;
					
		}

		})()