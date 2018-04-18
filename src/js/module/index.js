$(function() {

    (function() {
        var offsetArr = [];
        var topTabHeight = $('#topTab').outerHeight();
        var headerContentHeight = $('#headerContent').outerHeight();
        $('.module_item').each(function(index, item) {
            offsetArr.push({
                key: parseInt(Math.max($(item).offset().top - headerContentHeight - 100, 0)),
                index: $(item).attr('data-index')
            });
        });

        $('.header_box').on('click', '.tab_item', function() {
            var index = $(this).index();
            var url = $(this).attr('data-url');
            var length = offsetArr.length;
            var scroll = -1;

            if (window.location.pathname.indexOf(url) >= 0) {
                var step = 0;

                while (step < length) {
                    if (offsetArr[step].index == index) {
                        scroll = offsetArr[step].key;
                        break;
                    }
                    step = step + 1;
                }
                if (scroll < 0) {
                    return;
                }
                $("html,body").animate({
                    scrollTop: scroll
                }, 500);
            } else {
                window.location.href = window.location.host + url
            }
        });

        var length = offsetArr.length;
        $(document).scroll(function() {
            var scrollTop = Math.round($(this).scrollTop());
            if (scrollTop > topTabHeight) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
            console.log(scrollTop, offsetArr);
            var step = 0;
            while (step < length - 1) {
                if (scrollTop >= offsetArr[step].key && scrollTop < offsetArr[step + 1].key) {
                    break;
                }
                step = step + 1;
            }
            var index = offsetArr[step].index;
            $('#tabList').find('.tab_item').removeClass('active').eq(index).addClass('active');
        });

        $(document).trigger('scroll');
    })()

    var swiperBanner = new Swiper('#banner', {
        paginationClickable: true,
        pagination: '.swiper-pagination',
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
        for (var i = 0, len = animateList.length; i < len; i++) {
            var scrollTop = $(this).scrollTop();
            if (scrollTop >= animateList[i].top) {
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