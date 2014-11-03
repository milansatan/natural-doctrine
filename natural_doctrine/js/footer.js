function footer(fol) {
	if(fol==0){
		cate="./";
		}
		else{
		cate="../";
			}
	
	/* SNS ボタン */
var snscode = 
    '<div id="SNSbox">'
   
    + '</div>'
    ; //ここまで

var footer_txt = 
    '<div class="footer_wp">'
    + '<!-- [spec] -->'
    + '<ul class="platform">'
	+ '<li><a href="http://www.esrb.org/index-js.jsp"><img src="'+cate+'images/esrb.jpg"  width="128" height="60" alt="" class="esrb"/></a></li>'
    + '<li><a href="http://us.playstation.com/"><img src="'+cate+'images/logo_ps.jpg" width="200" height="36"  alt="" class="ps"/></a></li>'
	+ '<li><a href="http://nisamerica.com/"><img src="'+cate+'images/nisa.png" width="100" height="40"  alt="" class="nisa"/></a></li>'
	+ '<li><img src="'+cate+'images/kadokawa.jpg" width="337" height="24"  alt="" class="kadokawa"/></li>'
    + '<!-- [SNS] -->'
    + '<li class="kg_support"><strong>&copy;2013-2014 KADOKAWA GAMES, Ltd. NAtURAL DOCtRINE is a registered trademark of KADOKAWA GAMES. All rights reserved. Licensed to and published by NIS America, Inc. “PlayStation” and the “PS” Family logo are registered trademarks of Sony Computer Entertainment Inc. The rating icon is a trademark of the Entertainment Software Association. All other trademarks are properties of their respective owners.</li>'
   
    + '</div>'
    ; //ここまで
	
	
	
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
// 5秒後に上記のコードを snsbox に出現させる
  setTimeout(function(){
    $('#footer').append(footer_txt);
  }, 100);
   }
   else{
  setTimeout(function(){
    $('#footer').append(footer_txt);
  }, 100);
	   }
}