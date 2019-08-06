// $('._ph').mouseover(function () {
//     console.log('0')
//     $('.ph').fadeIn()
// })
// $('._wx').mouseover(function () {
//     $('.wx').fadeIn()
// })
// $('.ff .right').mouseout(function () {
//     $('.left').hide()
// })
var dhmFlag = false;
$('#dhm').mouseover(function () {
    dhmFlag = true;
    setTimeout(() => {
        if(dhmFlag) {
            $('#dhf').fadeIn();
        }
    }, 200)
}).mouseout(function () {
    dhmFlag = false;
    setTimeout(() => {
        if(!dhmFlag) {
            $('#dhf').fadeOut()
        }
    }, 200)
})



var gzhmFlag = false;
$('#gzhm').mouseover(function () {
    gzhmFlag = true;
    setTimeout(() => {
        if(gzhmFlag) {
            $('#gzhf').fadeIn();
        }
    }, 200)
}).mouseout(function () {
    gzhmFlag = false;
    setTimeout(() => {
        if(!gzhmFlag) {
            $('#gzhf').fadeOut()
        }
    }, 200)
})



