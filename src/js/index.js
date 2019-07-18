/**
 * 顶部轮播图
 */
var mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        notificationClass: 'swiper-notification',
    },
    speed: 500,
    grabCursor : true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
    effect : 'fade',
})

$('.poster-item').mouseenter(function () {
    console.log('in')
    mySwiper.autoplay.stop();
}).mouseleave(function () {
    console.log('out')
    mySwiper.autoplay.start();
})

/**
 * 了解我们的服务切换
 */
$('.service .s_list ul li').hover(function () {
    $('.service .s_list ul li').removeClass('on');
    $(this).addClass('on')
})

// $('.service .s_list ul li').mouseover(function () {
//     console.log('alkjsnl')
// })
$('.zs1 .z1').mouseover(function () {
    $(this).find('.k1').css('display', 'flex')
})
$('.zs1 .z1').mouseout(function () {
    $(this).find('.k1').hide()
})



// $(function(){
//     $(".htmleaf-container").jParticle({
//         background: "#141414",
//         color: "#E6E6E6"
//     });
// });

var num = 0;

setInterval(function () {
    if(num == 9) {
        num = 0;
    }
    if(num == 4) {
        num = 5;
    }
    $('.process li').removeClass('active');
    $('.process li').eq(num).addClass('active');
    num++; 
    console.log(num)
}, 5000)