// 百度商桥
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





// https://mp.weixin.qq.com/mp/profile_ext?action=home&username=*****&sn=****&scene=1#wechat_redirect




//designWidth:设计稿的实际宽度值，需要根据实际设置
//maxWidth:制作稿的最大宽度值，需要根据实际设置
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
;(function(designWidth, maxWidth) {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})(750, 750);





$('.nav-top .right img').click(function () {
    $('.nav_ul').toggle();
})





$('.f_btn .b').click(function () {
	//  0 不显示  1 显示
	console.log($(this).attr('data-status'))
	switch($(this).attr('data-status')) {
		case "0":
			$('.f_btn .box').fadeIn();
			$(this).attr('data-status', '1');
			$('.lb').hide();
			break;
		case "1":
			$('.f_btn .box').fadeOut();
			$(this).attr('data-status', '0');
			break;
	}
})


$('.choose_phone .close').click(function () {
	$('.choose_phone').slideUp();
	$('.choose_bg').hide();
})


$('.f_btn .cc').click(function () {
	$('.choose_bg').show();
	$('.choose_phone').slideDown();
})
$('.choose_bg').click(function () {
	$('.choose_phone').slideUp();
	$('.choose_bg').hide();
})



// nav
$('body').append(`<div class="nav_ul" style="display: none">
					<li><a href="http://www.staraise.com.cn/m/index.html">首页</a></li>
					<li><a href="http://www.staraise.com.cn/m/case_edu.html">教育培训</a></li>
					<li><a href="http://www.staraise.com.cn/m/case_qy.html">企业办公</a></li>
					<li><a href="http://www.staraise.com.cn/m/caselist_visualization.html">数据可视化</a></li>
					<li><a href="http://www.staraise.com.cn/m/caselist_wlwxt.html">物联网系统</a></li>
					<li><a href="http://www.staraise.com.cn/m/case_shop.html">电商系统</a></li>			
					<li><a href="http://www.staraise.com.cn/m/case_luntan.html">社区论坛</a></li>			
					<li><a href="http://www.staraise.com.cn/m/zn.html">智能软硬件</a></li>
					<li><a href="http://www.staraise.com.cn/m/about.html">关于我们</a></li>
				</div>`)





// $('body').append(`<div class="footer">
// 						<div class="t">
// 							<p>北京办公室：北京市海淀区中关村E世界5层</p>
// 							<p>北京办公室电话：18701400025</p>
// 							<p>沈阳办公室：辽宁省沈阳市铁西区云峰北街62号2611</p>
// 							<p>沈阳办公室电话：15640256825</p>
// 							<p>邮箱：office@staraise.com.cn</p>
// 						</div>
// 						<div class="b">
// 							<p class="text-center">
// 								COPYRIGHT © 辽ICP备18013896号-1 2016 
// 							</p>
// 						</div>
// 					</div>`)