$(function() {
	var swiperBanner = new Swiper('#banner', {
        paginationClickable: true,
        nextButton: '#bannerSwiperButtonNext',
        prevButton: '#bannerSwiperButtonPrev',
        autoplay: 2000,
        loop: true
    });

    var dynamicStateBanner = new Swiper('#dynamicState', {
        paginationClickable: true,
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    });

    
})