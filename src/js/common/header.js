$(function() {

	var clientWidth = $(window).width();
	bodyHtmlEl = $('body, html'),
		toTopEl = $('#toTop');

	$(window).scroll(function() {
		var scrollDis = $(window).scrollTop();
		var lY = scrollDis * 0.1;
		var cY = scrollDis * 0.2;
		var rY = scrollDis * 0.3;
		$('#bgPicLeft').css('transform', 'translate3D(0, ' + lY + 'px, 0)');
		$('#bgCenter').css('transform', 'translate3D(0, ' + cY + 'px, 0)');
		$('#bgRight').css('transform', 'translate3D(0, ' + rY + 'px, 0)');


		var scrollTop = document.body.scrollTop || bodyHtmlEl.scrollTop();

		if (scrollTop == 0) {
			toTopEl.hide();
		} else {
			toTopEl.show();
		}
	});

	$('#toTop').click(function() {
		bodyHtmlEl.animate({
			scrollTop: 0
		}, 320);
		toTopEl.hide();
	});

	$('#shareToBtn').click(function(e) {
		e.stopPropagation();
		$('#languageList').slideUp();
		$('#fontSizeList').slideUp();
		var shareToListtEl = $('#shareToList');
		if (shareToListtEl.is(':visible')) {
			shareToListtEl.slideUp();
		} else {
			shareToListtEl.slideDown();
		}
	});

	$('#moreShareToList').on('click', 'a', function() {
		$('#moreShareToList').slideUp();
	});

	$('#fontSizeBtn').click(function(e) {
		e.stopPropagation();
		$('#shareToList').slideUp();
		$('#languageList').slideUp();
		var fontSizeListEl = $('#fontSizeList');
		if (fontSizeListEl.is(':visible')) {
			fontSizeListEl.slideUp();
		} else {
			fontSizeListEl.slideDown();
		}
	});

	$('#languageBtn').click(function(e) {
		e.stopPropagation();
		$('#shareToList').slideUp();
		$('#fontSizeList').slideUp();
		var languageListEl = $('#languageList');
		if (languageListEl.is(':visible')) {
			languageListEl.slideUp();
		} else {
			languageListEl.slideDown();
		}
	});

	$('#fontSizeList').on('click', 'li', function(e) {
		e.stopPropagation();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('#fontSizeList').slideUp();
		document.documentElement.style.fontSize = $(this).attr('data-size');
	});

	$('#languageList').on('click', 'li', function(e) {
		e.stopPropagation();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('#languageList').slideUp();
	});

	$(window).click(function() {
		$('#shareToList').slideUp();
		$('#fontSizeList').slideUp();
		$('#languageList').slideUp();
	});

	if (clientWidth > 768) {
		$('#moreShareToBtn').mouseenter(function() {
			$('#moreShareToList').slideDown(function() {
				$(this).css('z-index', 2);
			});
		});

		$('#moreShareToList').mouseleave(function() {
			$('#moreShareToList').css('z-index', -1);
			$('#moreShareToList').slideUp();
		});
	} else {
		$('#headerMenuBtn').click(function(e) {
			if (e.target.id != 'headerMenuBtn') {
				return;
			}
			var headerMenuMobileBox = $('#headerMenuMobileBox');
			if (headerMenuMobileBox.is(':visible')) {
				headerMenuMobileBox.hide();
				$(this).removeClass('closed');
			} else {
				headerMenuMobileBox.show();
				$(this).addClass('closed');
			}
		});
		$('#moreShareToBtn').click(function(e) {
			e.stopPropagation();
			var moreShareToListEl = $('#moreShareToList');
			if (moreShareToListEl.is(':visible')) {
				$('#moreShareToList').slideUp();
			} else {
				$('#moreShareToList').slideDown();
			}
		});

	}

})