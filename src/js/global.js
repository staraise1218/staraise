$('._ph').mouseover(function () {
    console.log('0')
    $('.ph').fadeIn()
})
$('._wx').mouseover(function () {
    $('.wx').fadeIn()
})
$('.ff .right').mouseout(function () {
    $('.left').hide()
})