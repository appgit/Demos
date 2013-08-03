;;;(function(){
	 	
	 $.fn.dragButton2 = function  () {

	 	var $html = $('<div><div></div><div></div><div></div><div></div><div></div></div>')

	 			// add-class-name

	 	$html.first().addClass('dragbar2-wrap')
	 	.children().first().addClass('dragbar2-left')
	 	.next().addClass('dragbar2-button1')
	 	.next().addClass('dragbar2-middle')
	 	.next().addClass('dragbar2-button2')
	 	.next().addClass('dragbar2-right')

	 	var btn_left_width , btn_middle_width , btn_right_width , button_self_width;

	 	$html.find('.dragbar2-button1').on('mousedown', function(e) {

	 		 button_self_width = $html.find('.dragbar2-button1').width();

	 		var btn1_x_origin = e.pageX;

	 		 btn_left_width = $html.find('.dragbar2-left').width();

	 		 btn_middle_width =$html.find('.dragbar2-middle').width();
	 		
	 		$(window).on('mousemove.dragbtn1_move', function(e) {
	 			
	 			var btn1_x_offset = e.pageX - btn1_x_origin;

	 		 if( btn1_x_offset + btn_left_width > $html.find('.dragbar2-button2').position().left - button_self_width){	 
	 		 		 			 		 		
	 		 	btn1_x_offset = $html.find('.dragbar2-button2').position().left -btn_left_width 
	 		 																	- button_self_width;

	 		 	}
	 		 if(btn1_x_offset < -btn_left_width ){

	 		  	btn1_x_offset = -btn_left_width;

	 		};

	 		 	$html.find('.dragbar2-left').width(btn_left_width + btn1_x_offset);

	 		 	$html.find('.dragbar2-middle').width(btn_middle_width - btn1_x_offset);

	 		 var btn1_x_reset = btn1_x_offset + btn_left_width;
	 		 	
	 		 	$html.find('.dragbar2-button1').css('left', btn1_x_reset);

	 		});	

	 		$('body').css({

	 			'-webkit-user-select': 'none',

	 			'-moz-user-select': 'none'

	 		});
	 	})

		$html.find('.dragbar2-button2').on('mousedown', function(e) {

			button_self_width = $html.find('.dragbar2-button2').width();

	 		var btn2_x_origin = e.pageX;

	 		var btn2_x_pos_left =  $html.find('.dragbar2-button2').position().left;

			 btn_right_width = $html.find('.dragbar2-right').width();

	 		 btn_middle_width =$html.find('.dragbar2-middle').width();
	 		
	 		$(window).on('mousemove.dragbtn2_move', function(e) {
	 			
	 			var btn2_x_offset = e.pageX - btn2_x_origin;
	 		

	 		 if( btn2_x_offset > btn_right_width){	 		 	
	 		 		
	 		 	btn2_x_offset = btn_right_width;

	 		 	}

	 		 if(btn2_x_offset < - btn_middle_width + button_self_width * 2 ){

	 		  	btn2_x_offset = - btn_middle_width + button_self_width * 2;

	 		};

	 		 	$html.find('.dragbar2-middle').width(btn_middle_width + btn2_x_offset);

	 		 	$html.find('.dragbar2-right').width(btn_right_width - btn2_x_offset);

	 		 	var btn2_x_reset = btn2_x_pos_left + btn2_x_offset ;
 		 	
	 		 	$html.find('.dragbar2-button2').css('left', btn2_x_reset);

	 		});	

	 		$('body').css({

	 			'-webkit-user-select': 'none',

	 			'-moz-user-select': 'none'
	 		});

	 	});

	$(window).on('mouseup', function() {
		
			$('body').css({

	 			'-webkit-user-select': 'text',

	 			'-moz-user-select': 'text'
	 		});

	 		$(window).off('.dragbtn1_move');

	 		$(window).off('.dragbtn2_move');

	});

	 	$(this).append($html)

	 	return this; 
	}

		 })()