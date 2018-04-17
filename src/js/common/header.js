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

})