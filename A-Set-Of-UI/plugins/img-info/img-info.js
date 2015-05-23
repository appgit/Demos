
;;;(function () {
	
	$.fn.imgInfo = function  (opts) {

		opts = $.extend(
		{	
			url: '',
			heading: 'Image Heading',
			subheading: 'Image sub heading goes here',
			width: '285',
			heading_color: '#7f7f7f',
			subheading_color: '#b6b6b6'

		},opts);

		var $html = $('<div><div><img></div><div><p></p><p></p></div></div>');

		$html.addClass('img_info_outer').css('width', opts.width);

		var $img_wrap = $html.children().first().addClass('img_outer');

		var $img  = $img_wrap.children().attr('src', opts.url);

		var $content_wrap = $img_wrap.next().addClass('content_outer');

		var $p1 = $content_wrap.children().first().text(opts.heading)
				.css({
					'color': opts.heading_color,
					'font-weight': 'bold'
					});

		var $p2 = $p1.next().text(opts.subheading).css('color', opts.subheading_color);

		this.append($html)

		return this;

}
})()