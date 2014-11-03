if (navigator.userAgent.indexOf('Vita') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0){
var SMPflag=true;
var l46="0%";
var l54="0%";
var l50="0%";
}
else{
	
var l46="46%";
var l54="54%";
var l50="50%";}

/*------------------------------------------------------
<pv>
------------------------------------------------------*/	
	$(function(){
    var menuBox = $("#btn_pv");
    var menuList = menuBox.children("a");
     
    menuList.hover(function(){
        $(this).stop().animate({'opacity' : '0'}, 300); 
    },function(){
        $(this).stop().animate({'opacity' : '1'}, 800);
    }
    );
$("#btn_pv a,.news .pv_pop").click(function() {
	
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

		
		
	function kickswf(){
		swfset("topFlash").asFunc();
	}
	
	//HTML内のFLASHのid名を取得し、起動JSのターゲットを明確化するJS
	function swfset(id){
		if(navigator.appName.indexOf("Microsoft") != -1)
		return window[id];
		return document[id];
	}
	
	
/*------------------------------------------------------
</pv>
------------------------------------------------------*/

/*------------------------------------------------------
<top animation>
------------------------------------------------------*/
CharaName = new Array();
	CharaName[0] = "top_chara_vasilisa.png";
	CharaName[1] = "top_chara_anca.png";
	CharaName[2] = "top_chara_jeff.png";
	CharaName[3] = "top_chara_vasilisa.png";
	CharaName[4] = "top_chara_nebula.png";
	CharaName[5] = "top_chara_anca.png";
	CharaName[6] = "top_chara_zekelinde.png";
	CharaName[7] = "top_chara_mel.png";
	
	var cNum=1;
	//var cNum=CharaName.length;

$(window).load(function () {
$(".chara").delay(0).animate( { opacity: 0,left:l46},0);
$(".topImageArea").delay(0).animate( { opacity: 0},0);	
$(".topImageArea").css("background-image","url(images/top/top_main.jpg)");

	$(".topImageArea").delay(0).animate( { opacity: 1},1000,function(){		
$(".chara").css("background-image","url(images/top/"+CharaName[0]+")");
$(".chara").delay(1000).animate( { opacity: 1,left:l50},1000);
		
	charaFade();
	
	var flashVars = {}
 var parms = {  wmode :"transparent"  }
var agent = navigator.userAgent;//UA取得
if(agent.search(/iPad/) != -1 || agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
}
else{
	 swfobject.embedSWF("./images/top/top.swf", "topFlash", "100%", "539", "10.0.12", "",flashVars,parms);
	 swfobject.embedSWF("./images/top/bgm.swf", "FlashBgmArea", "60", "20", "10.0.12", "",flashVars,parms);
	 }
	
    
   
		})
	

    function charaFade(){
		$(".chara").delay(3000).animate( { opacity: 0,left:l54},1000,function(){
		$(".chara").css("background-image","url(images/top/"+CharaName[cNum]+")");
		$(".chara").delay(0).animate( { opacity: 0,left:l46});
		$(".chara").delay(10).animate( {opacity: 1,left:l50},1000,function(){
			if(cNum==CharaName.length-1){
			cNum=0;
			}
			else{
				cNum++;
				}
			charaFade();
			});
			});
		
    }
});
/*------------------------------------------------------
</top animation>
------------------------------------------------------*/
/*------------------------------------------------------
<news>
------------------------------------------------------*/


$(function(){
	$(window).load(function(){
		
var detail_text1="";
var detail_text2="";
$.getJSON("news.json",function(data){
	for(var i in data["news_list"]){
		detail_text1+='<li>';
		detail_text1+='<span>'+data["news_list"][i].date+'</span>';
		detail_text1+=data["news_list"][i].txt;
		detail_text1+='</li>';
	}
	$("#newsALL").append(detail_text1);
	newsRoll();
	
	for(var i in data["topics"]){
		detail_text2+=data["topics"][i].txt;
	}
	$("#btn_banner").append(detail_text2);
});

function newsRoll(){
		var $setElm = $('.news');
		var effectSpeed = 1000;
		var switchDelay = 6000;
		var easing = 'swing';

		$setElm.each(function(){
			var effectFilter = $(this).attr('rel');

			var $targetObj = $(this);
			var $targetUl = $targetObj.children('ul');
			var $targetLi = $targetObj.find('li');
			var $setList = $targetObj.find('li:first');

			var ulWidth = $targetUl.width();
			var listHeight = $targetLi.height();
			$targetObj.css({height:(listHeight)});
			$targetLi.css({top:'0',left:'0',position:'absolute'});

			if(effectFilter == 'fade') {
				$setList.css({display:'block',opacity:'0',zIndex:'98'}).stop().animate({opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({opacity:'0'},effectSpeed,easing,function(){
						$(this).next().css({display:'block',opacity:'0',zIndex:'99'}).animate({opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({display:'none',zIndex:'98'}).removeClass('showlist');
					});
				},switchDelay);
			} else if(effectFilter == 'roll') {
				$setList.css({top:'3em',display:'block',opacity:'0',zIndex:'98'}).stop().animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({top:'-3em',opacity:'0'},effectSpeed,easing).next().css({top:'3em',display:'block',opacity:'0',zIndex:'99'}).animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({zIndex:'98'}).removeClass('showlist');
				},switchDelay);
			} else if(effectFilter == 'slide') {
				$setList.css({left:(ulWidth),display:'block',opacity:'0',zIndex:'98'}).stop().animate({left:'0',opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({left:(-(ulWidth)),opacity:'0'},effectSpeed,easing).next().css({left:(ulWidth),display:'block',opacity:'0',zIndex:'99'}).animate({left:'0',opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({zIndex:'98'}).removeClass('showlist');
				},switchDelay);
			}
		});
		}
	});
});


/*------------------------------------------------------
<news>
------------------------------------------------------*/