function addLoadEvent(fn) {
	var oldEvent = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = fn;
	} else {
		window.onload = function() {
			oldEvent();
			fn();
		};
	}
}

(function() {
	var offsetArr = [];
	var topTabHeight = $('#topTab').outerHeight();
	var headerContentHeight = $('#headerContent').outerHeight();
	$('.module_item').each(function(index, item) {
		offsetArr.push({
			key: parseInt(Math.max($(item).offset().top - headerContentHeight - 100, 0)),
			index: $(item).attr('data-index')
		});
	});

	$('.header_box').on('click', '.tab_item', function() {
		var index = $(this).index();
		var url = $(this).attr('data-url');
		var length = offsetArr.length;
		var scroll = -1;

		if (window.location.pathname.indexOf(url) >= 0 || window.location.pathname.indexOf('html') < 0) {
			var step = 0;
			while (step < length) {
				if (offsetArr[step].index == index) {
					scroll = offsetArr[step].key;
					break;
				}
				step = step + 1;
			}
			if (scroll < 0) {
				return;
			}
			$("html,body").animate({
				scrollTop: scroll
			}, 500);
		} else {
			window.location.href = url
		}
	});
})()

$(function() {

	$('#toTop').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 320);
	});

	$('.complex_iten').mouseover(function() {
		$(this).find('.tool_detail').addClass('show');
	});

	$('.complex_iten').mouseout(function() {
		$(this).find('.tool_detail').removeClass('show');
	});

	$('#wxIcon').click(function() {
		$('#qrHover').fadeIn(240, function() {
			$('#mainOutBox').addClass('blur')
		});
	});

	$('#closeBtn').click(function() {
		$('#mainOutBox').removeClass('blur');
		$('#qrHover').fadeOut(240);
	});

	$(document).trigger('scroll');
})