$(window).load(function(){
// SMP
var agent = navigator.userAgent;//UA取得
if(agent.search(/iPad/) != -1 || agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
}
else{
	 $("#SubMenu").sticky({ topSpacing: 0, center:false, className:"hey" });
	  }

 
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // エレメントのid
        topDistance: '300', // scrollUpを表示するトップからの距離 (px)
        topSpeed: 300, // トップに戻るスピード (ms)
        animation: 'fade', // アニメーションの種類 (Fade, slide, none)
        animationInSpeed: 200, // アニメーションの最初のスピード (ms)
        animationOutSpeed: 200, // アニメーションの最後のスピード (ms)
        scrollText: 'Scroll to top', // エレメントに表示するテキスト
        activeOverlay: false, // scrollUp動作時のオーバーレイのカラー, e.g '#00FFFF'
    });
 
});

    $.scrollUp();
	
	
    });
	
$(function(){
	
$("html, body").animate({scrollTop:0}, 0, "swing");
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position+-65}, speed, "swing");
		return false;
	});
});


window.onload=function(){
var url=document.URL;
a=url.split("#")[1];
if(a!=undefined || a!="undefined"){
a="#"+a;
var position = $(a).offset().top-65;
$("html, body").animate({scrollTop:position}, 500, "swing");
}
}

/*------------------------------------------------------
<pv>
------------------------------------------------------*/	
	$(function(){
    var menuBox = $(".pv_list");
    var menuList = menuBox.children("a");
     
    menuList.hover(function(){
        $(this).stop().animate({'opacity' : '0'}, 300); 
    },function(){
        $(this).stop().animate({'opacity' : '1'}, 800);
    }
    );
$(".pv_list a").click(function() {
			$.fancybox({
								'padding'		: 0,
								'title'			: this.title,
								'width'			: 640,
								'height'		: 360,
								'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
								'type'			: 'swf',
								'swf'			: {
								'wmode'				: 'transparent',
								'cyclic'        : true,
								'allowfullscreen'	: 'true'
								}
							});
				return false;
			});
});
/*------------------------------------------------------
</pv>
------------------------------------------------------*/
/*------------------------------------------------------
<ss>
------------------------------------------------------*/

$(function(){
    var menuBox = $(".screenshot3, .photoBox,.screenshot,.screenshot_1,.screenshot_r");
    var menuList = menuBox.children("a");
    
menuList.click(function() {
	
									$.fancybox({
										'margin'		: 70,
										'padding'		: 10,
										'hideOnContentClick': true,
										'href'			: this.href,
										'title'			: this.title,
										'type'			: 'image',
										'cyclic':true,
										'speedIn':100,
										'speedOut':100,
										'showNavArrows' :true,
										'autoScale' :true
									});
				return false;
	
			});});
/*------------------------------------------------------
</ss>
------------------------------------------------------*/
$(window).load(function(){
	//mouse over
if($(".chara_list").size() > 0){
  $(".chara_list li a").hover(function(){
       $(this).fadeTo("fast", 0.7);
    },function(){
       $(this).fadeTo("normal", 1);
	  })	
}

if($(".system_top_list").size() > 0){
  $("#system.system0 .system_top_list li a").hover(function(){
       $(this).fadeTo("fast", 0.7);
    },function(){
       $(this).fadeTo("normal", 1);
	  })	
}

});