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
		var queryArr = window.location.href.split('?')[1].split('&');
		var query = {};
		queryArr.forEach(function(item, index) {
			var tempArr = item.split('=');
			
			query[tempArr[0]] = tempArr[1];
		})
		var index = query['index'];
		$('.tab_item').eq(index).addClass('active');
	})()
})