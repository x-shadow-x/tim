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

    var map = new BMap.Map("map"); // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标 


    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野    
    myGeo.getPoint("广东省广州市天河区华夏路富力盈通大厦", function(point) {
        if (point) {
            var marker = new BMap.Marker(point); // 创建标注  
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true);
            map.addControl(new BMap.NavigationControl());
            map.addOverlay(marker);
        }
    }, "广东省");

    var updateHeight = $(window).height() / 2;
    var animateList = $('.animate_model').map(function(index, item) {
        return {
            top: $(item).offset().top - updateHeight,
            el: item
        }
    });

    $(document).scroll(function() {
        for(var i = 0, len = animateList.length; i < len; i++) {
            var scrollTop = $(this).scrollTop();
            if(scrollTop >= animateList[i].top) {
                $(animateList[i].el).addClass('load');
            }
        }
    });
});

(function preLoad() {
    addLoadEvent(function() {
        $('#loadingHover').fadeOut();
        $('html,body').removeClass('ovf_iden');
    });
})()