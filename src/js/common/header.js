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

	(function setTabList() {
		var tempLocation = window.location.href.split('?');
		var query = {};
		if(tempLocation[1]) {
			var queryArr = tempLocation[1].split('&');
			queryArr.forEach(function(item, index) {
				var tempArr = item.split('=');
				query[tempArr[0]] = tempArr[1];
			})
		}
		
		var index = query['index'] || 0;
		$('.tab_item').eq(index).addClass('active');
	})()
})