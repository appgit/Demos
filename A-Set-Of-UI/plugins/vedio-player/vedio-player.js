
;;;(function  () {

	$.fn.vedioPlayer = function  (opts) {
		
		opts = $.extend({
		
			url: 'plugins/img/vedio-img.png',
			button_color: '#75828c',
			button_hover_color: '#f76c3a',
			vedio_name: 'The Beach side of Life',
			width: '285'
		
		},opts);

		var $html = $('<div><div><img><div><span></span><a></a></div></div><div><div></div><div></div></div></div>')
			.css('width', opts.width);

		var $source = $html.addClass('vedio_outer').children().first().addClass('img_outer');

		$source.children('img').attr('src', opts.url);

		var $span = $source.children('div').addClass('vedio_name_outer')
		.children('span').text(opts.vedio_name).addClass('vedio_name');

		var $pause_btn = $span.next().addClass('pause_button');

		var $dragbar = $source.next().children().first().dragButton();

		var  $play_buttons	= $dragbar.next().addClass('play_buttons');

		var $ul = $('<ul><li></li><li></li><li></li><li></li><li></li></ul>').addClass('clearfix');

		var $li = $ul.find('li').addClass('left');

		var bg_pos = ['-49px -137px','-84px -137px','-119px -137px','-154px -137px','-190px -137px'];

		var bg_pos_hover=['-49px -167px','-84px -167px','-119px -167px','-154px -167px','-190px -167px'];

		$li.each(function(index) {
			
			$(this).css('background-position',bg_pos[index])
			.hover(function() {

				$(this).css('background-position',bg_pos_hover[index])

			}, function() {

				$(this).css('background-position',bg_pos[index])
			});
			
		});


		$play_buttons.append($ul);

		this.append($html);

		return this;
		
	}
})()