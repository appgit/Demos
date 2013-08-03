
	;;;(function(){
	//circlebtn will be add into as child element
		$.fn.circleBtn = function(opts){

			opts =$.extend({
				name: 'button',
				width: 40,
				height: 110,
				backgroundcolor: '#ffffff',
				fontcolor:'#9297a0'
			},opts);
			

				var $button =$('<div>'+opts.name+'</div>');

				$button.addClass('my-button-radious').css({

					'height': opts.height +'px',
					'width': opts.width + 'px',
					'line-height': opts.height+'px',
					'font-height': opts.height/3+'px',
					'background-color': opts.backgroundcolor,
					'color': opts.fontcolor				
					
				}).on('mousedown',function  () {
					
					$(this).addClass('my-button-radious-active')
					.css({
						'-moz-user-select': 'none',
						'-webkit-user-select': 'none'
					});

				}).on('mouseup',function(){

					$(this).removeClass('my-button-radious-active')
					.css({
						'-moz-user-select': 'text',
						'-webkit-user-select': 'text'
					});

				});
				
				//when mouseup and the mouse move out from the button
				$('body').on('mouseup',function(){

					$('body').find($('.my-button-radious')).removeClass('my-button-radious-active');

				})


				$button.hover(function  () {

					$(this).addClass('my-button-radious-hover')

				},function  () {

					$(this).removeClass('my-button-radious-hover')
				})

				this.append($button);

				return this ;
		}

		})()
