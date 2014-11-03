$(window).load(function () {
	/* SNS ボタン */
var snscode = 
    '<section id="SNSbox">'
    + '<!-- twitter -->'
    + '<div class="sns_twitter">'
    + '<div class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.n-doctrine.com" data-text="全てのSRPGファンに贈る、全てのPlayStation®ファンへのSRPG完全新作。NAtURAL DOCtRINE（ナチュラル ドクトリン）" data-lang="ja">Tweet</a>'
    + '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");<\/script></div>'
    + '</div><!-- /twitter -->'
    + '<!-- facebook -->'
    + '<div class="sns_fb">'
    + '<div id="fb-root"></div>'
    + '<script>(function(d, s, id) {'
    + 'var js, fjs = d.getElementsByTagName(s)[0];'
    + 'if (d.getElementById(id)) return;'
    + 'js = d.createElement(s); js.id = id;'
    + 'js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=245631688783406";'
    + 'fjs.parentNode.insertBefore(js, fjs);'
    + '}(document, "script", "facebook-jssdk"));<\/script>'
    + '<div class="fb-like" data-href="http://www.n-doctrine.com" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false" data-colorscheme="light"></div>'
    + '</div><!-- /facebook -->'
    + '<!-- google+ -->'
    + '<div class="sns_plus">'
    + '<div class="g-plusone" data-size="medium" data-href="http://www.n-doctrine.com/"></div>'
    + '<script type="text/javascript">'
    + '(function() {'
    + 'var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;'
    + 'po.src = "https://apis.google.com/js/plusone.js";'
    + 'var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);'
    + '})();'
    + '<\/script>'
    + '</div>'
    + '<!-- /google+ -->'
    + '</section>'
    ; //ここまで


if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
// 5秒後に上記のコードを snsbox に出現させる
  setTimeout(function(){
    $('#snsbox').append(snscode);
  }, 5000);
   }
   else{
  setTimeout(function(){
    $('#snsbox').append(snscode);
  }, 100);
	   }

  
  
  
});
