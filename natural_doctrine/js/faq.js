
/*------------------------------------------------------
<faq>
------------------------------------------------------*/


$(function(){
	$(window).load(function(){
		
var detail_text1="";
var detail_text2="";

$.getJSON("faq.json",function(data){
	for(var i in data["faq_list"]){
		detail_text1+='<li>';
		detail_text1+='<a href="#'+data["faq_list"][i].id+'">'+data["faq_list"][i].title+'</a>';
		detail_text1+='</li>';
	}
	$("#FAQlist").append(detail_text1);
	
	
for(var i in data["faq_list"]){
		detail_text2+='<div class="line"></div>';
		detail_text2+='<a id="'+data["faq_list"][i].id+'"></a>';
		detail_text2+='<div class="box last">';
		detail_text2+='<h3>'+data["faq_list"][i].title+'</h3>';
		detail_text2+='<p><pre>'+data["faq_list"][i].txt+'';
		detail_text2+='</pre></p>';
		detail_text2+='</div>';
	}
	$("#FAQall").append(detail_text2);
});


	});
});


/*------------------------------------------------------
<news>
------------------------------------------------------*/