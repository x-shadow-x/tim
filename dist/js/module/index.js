$(function() {
	var swiperBanner = new Swiper('#banner', {
        paginationClickable: true,
        autoplay: 2000,
        loop: true
    });

    var swiperNew = new Swiper('#news', {
        paginationClickable: true,
        direction: 'vertical',
        autoplay: 2000,
        loop: true
    });
})