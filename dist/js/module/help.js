$(function() {
	$('#helpList').on('click', '.list_link', function() {
		$('.list_link').removeClass('active');
		$(this).addClass('active');
		$('#helpContentBox').find('.content_item').addClass('hide').eq($(this).attr('data-index')).removeClass('hide');
	})
})