;;;(function () {

	$.fn.iconTips =function  (icon_style,content) {

		var bg_position,bg_position_hover ;

		if (icon_style ==2){

			bg_position ='3px -50px';
			bg_position_hover ='-25px -51px';
		}
		else if (icon_style==3) {

			bg_position ='2px -79px';
			bg_position_hover ='-26px -79px';
		}
		else if(icon_style ==4){

			bg_position ='0px -105px';
			bg_position_hover ='-28px -105px';
		}
		else if(icon_style ==5){

			bg_position ='-27px 0px';
			bg_position_hover ='-54px 0px';
		} 
		else{
			bg_position ='-27px -25px';
			bg_position_hover ='0px -26px';
		}
		
		var $html = $('<div><p></p><span></span><a></a></div>');

		var $that =$(this);

		var $content= $html.first().addClass('icon-tips-outer').children('p')
		.text(content).addClass('icon-tips-content').hide();
		
		var $icon_down = $content.next('span').addClass('down-icon').hide();


		var $icon_link = $html.first().children('a').addClass('icontips-link')
		.css('background-position',bg_position);

		$html.hover(function() {

			$icon_link.css('background-position', bg_position_hover);
			$icon_link.siblings().show();

		}, function() {

			$icon_link.css('background-position', bg_position);
			$icon_link.siblings().hide();

		});	

		this.append($html);

		var icon_down_height = this.find('.down-icon').css('top');

		 // * (-1) -20 -22
		var content_height = $content.outerHeight() *(-1) 
							+ parseInt(icon_down_height) + 5;// 5 means cover gaps

		var content_width = $content.outerWidth() * (-1) / 2 
							+ $html.outerWidth() / 2;// padding and $this half width

		$content.css({

			top: content_height,
			left: content_width

		});

}

})()