var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1be9b52e79a52be423089ebb6868a7f5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


$(function(){
    // 点击按钮时判断 百度商桥代码中的“我要咨询”按钮的元素是否存在，存在的话就执行一次点击事件
    $(".shangqiao").click(function(event) {
        if ($('#nb_invite_ok').length > 0) {
            $('#nb_invite_ok').click();
        }
    });
});
