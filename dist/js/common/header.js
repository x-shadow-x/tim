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

	(function() {
		var offsetArr = [{
			key: 0,
			index: 0
		}];
		var topTabHeight = $('#topTab').outerHeight();
		var headerContentHeight = $('#headerContent').outerHeight();
		$('.model_title').each(function(index, item) {
			console.log(item, $(item).offset().top);
			offsetArr.push({
				key: $(item).offset().top - headerContentHeight - 100,
				index: $(item).attr('data-index')
			});
		});
		var length = offsetArr.length;
		console.log(offsetArr);
		$(document).scroll(function() {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > topTabHeight) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
			var step = 0;
			while (step < length) {
				// console.log(offsetArr[step].key);
				if (scrollTop >= offsetArr[step].key && scrollTop < offsetArr[step + 1].key) {
					break;
				}
				step = step + 1;
			}
			var index = offsetArr[step].index;
			// console.log(index, '===========', scrollTop);
			$('#tabList').find('.tab_item').removeClass('active').eq(index).addClass('active');
		});

		$(document).trigger('scroll');
	})()



})