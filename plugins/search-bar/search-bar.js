
	;;;(function(){
		
		$.fn.searchBar = function  () {

		var $html = $('<div><input><div><a></a></div></div>');

			$html.addClass('search-bar')
			.find('input').addClass('search-bar-content')
			.next().addClass('search-bar-icon').children('a').addClass('search-icon');

			$html.find('input').val(' Search').on('focus',function(){

				$(this).addClass('search-focus');

				if($(this).val() ===' Search'){
				
					$(this).val('');
				}

			}).on('blur',function  () {
				
				if( $(this).val() ==='' ){

				$(this).removeClass('search-focus');

				$(this).val(' Search');

				}
			})

			$(this).append($html);

			return this;
							
		}

		})()
