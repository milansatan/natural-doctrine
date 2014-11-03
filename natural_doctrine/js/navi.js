function Navi(current) {
	
	f = new Array(2);
	f[0] = "./";
	f[1] = "../";
	var fl=0;
	
	if(current==0){
		fl=f[0];
	$(".head_logo").remove();
	}
	else{
		fl=f[1];
document.write('<div class="wp"><div class="head_logo"><a href="../home.html"><img src="'+fl+'images/logo_head.png" width="275" height="27"/></a></div>');
		}
document.write('<ul>');
document.write('<li class="nav1 NAVnew"><a href="'+fl+'information/index.html">Information</a></li>');
document.write('<li class="nav2"><a href="'+fl+'world/index.html">World</a></li>');
document.write('<li class="nav3"><a href="'+fl+'system/index.html">System</a></li>');
document.write('<li class="nav4"><a href="'+fl+'trailers/index.html">Trailers</a></li>');
document.write('<li class="nav5"><a href="http://www.gamestop.com/browse?nav=16k-3-natural+doctrine,28zu0" target="_blank">Preorder Now</a></li>');
document.write('<li class="nav6"><a href="http://naturaldoctrine.gamepedia.com/NATURAL_DOCTRINE_WIKI">Wiki</a></li>');
document.write('</ul>');

	if(current!=0){
document.write('</div>');
	}

if(current!=0){
$("#Navi ul li:nth-child("+current+")").addClass("selected");

}


// SMP
var agent = navigator.userAgent;//UA取得
if (navigator.userAgent.indexOf('Vita') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0){
	$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">');
	document.write('<link rel="stylesheet" type="text/css" href="'+fl+'css/smp.css" media="tv,screen">');
	
	}
	else{if(current!=0){
		$("#Navi").sticky({ topSpacing: 0});
	}
		}


}
