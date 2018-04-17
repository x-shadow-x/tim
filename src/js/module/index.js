$(function() {

    (function() {
        var offsetArr = [{
            key: 0,
            index: 0
        }];
        var topTabHeight = $('#topTab').outerHeight();
        var headerContentHeight = $('#headerContent').outerHeight();
        $('.model_title').each(function(index, item) {
            // console.log(item, $(item).offset().top);
            offsetArr.push({
                key: $(item).offset().top - headerContentHeight - 100,
                index: $(item).attr('data-index')
            });
        });
        var length = offsetArr.length;
        // console.log(offsetArr);
        $(document).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > topTabHeight) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
            var step = 0;
            while (step < length - 1) {
                // console.log(offsetArr[step + 1]);
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
})