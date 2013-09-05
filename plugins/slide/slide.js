	;;(function  () {
		
		$.fn.img_slideBar = function  (len) {

			var cur_trigger =  0; 

			var _issettimeout;
			
		 	var $html = $('<div><ul></ul></div>'); 

		 	var $ul = $html.addClass('img-slide-button-outer')
		 	.children('ul').addClass('clearfix');

		 	var $li = $('<li></li>'); 

		 	for (var i = len - 1; i >= 0; i--) {
		 		
		 		$li.clone(true).addClass('left img_slide-buttons').appendTo($ul)
		 	};

		 	var $li_arr = $ul.find('li');


		 	var buttons_reset ={
		 		name:'',
		 		width: 11,
		 		height: 11,
		 		backgroundcolor: '#76838d'
		 	};

			$.each($li_arr, function(index, val) {
				
				$(this).circleBtn(buttons_reset);

				if(index == 0){

					// the first button trigger style 

					$(this).children().css('background-color', '#f76a38');

				}

				$(this).on('click',function(){

					$(this).children().css('background-color', '#f76a38');
				
					$(this).siblings().children().css('background-color', buttons_reset.backgroundcolor);

					//autotrigger remember clearTimeout 
				
					if( _issettimeout ){

						clearTimeout(_issettimeout);	
					}

					_issettimeout = setTimeout(autoTrigger,5000);
					
					cur_trigger = index ;

					$(this).parents('.img-slide-button-outer').siblings('img')
					.stop().animate({

						'opacity':'0.2'

						},250,function  () {
							
							$(this).attr('src','plugins/img/picture_'+(index+1)+'.png')
							.animate({

						'opacity':'1'

						},400)

						})	
					
				})

			});

		this.css(
			{
				'position': 'relative',
				'display': 'inline-block'
			}
			).append($html);

			//after append($html), then set autotrigger .
			function autoTrigger () {

				cur_trigger ++;

				if(cur_trigger > len-1){

					cur_trigger = 0;
				}

				$('.img-slide-button-outer ul li:eq(' + cur_trigger + ')').trigger('click');

			}

			setTimeout(autoTrigger,5000)

		return this; 

		}

	})()