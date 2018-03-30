function addLoadEvent(fn) {
    var oldEvent = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = fn;
    } else {
        window.onload = function() {
            oldEvent();
            fn();
        };
    }
}

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
})

addLoadEvent(function() {
	var offsetArr = [{
		key: '0',
		index: '0'
	}];
	var topTabHeight = $('#topTab').outerHeight();
	var headerContentHeight = $('#headerContent').outerHeight();
	$('.model_title').each(function(index, item) {
		offsetArr.push({
			key: $(item).offset().top - headerContentHeight - 100,
			index: $(item).attr('data-index')
		});
	});

	var modelListQ = $('.model');

	var length = offsetArr.length;
	var timer = 0;
	offsetArr[length - 1].key = Math.min($(document).height() - $(window).height(), offsetArr[length - 1].key);

	function handleScroll() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > topTabHeight) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
			var step = 0;
			while (step < length) {
				if (!offsetArr[step + 1] || scrollTop >= offsetArr[step].key && scrollTop < offsetArr[step + 1].key) {
					break;
				}
				step = step + 1;
			}

			var index = offsetArr[step].index;
			$('#tabList').find('.tab_item').removeClass('active').eq(index).addClass('active');
		}.bind(this), 16);
	}

	$(document).scroll(handleScroll);

	$('#tabList').on('click', '.tab_item', function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).attr('data-index');
		if(offsetArr[index].key) {
			$('body, html').animate({
				scrollTop: offsetArr[index].key + 2
			}, 320);
		}
	});

	$(document).trigger('scroll');
})