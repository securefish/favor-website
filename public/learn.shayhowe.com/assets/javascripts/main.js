function bitly(t,e){var a="o_49r472vsrd",n="R_a023252cc7046b36d8b33ca9f406de18";$.getJSON("https://api-ssl.bitly.com/v3/shorten?callback=?",{format:"json",apiKey:n,login:a,longUrl:t},function(t){e(t.data.url)})}!function(t,e){"use strict";var a=function(){function e(t){if(t){var e,a,r=t.offsetHeight;for(var s in o)e=s,document.body.clientWidth>e&&e>=a&&(n=o[s],a=e);t.style.marginBottom=n-r%n+"px"}}function a(a){e(a),"addEventListener"in t?t.addEventListener("resize",function(){e(a)},!1):"attachEvent"in t&&t.attachEvent("resize",function(){e(a)})}var n=0,o={};return function(t,e){var r="string"==typeof t?document.querySelectorAll(t):t,s=r.length;if("number"==typeof e)n=parseInt(e,10);else if("object"==typeof e){var i=parseInt(getComputedStyle(document.body,null).getPropertyValue("font-size"),10);for(var c in o){var h=/\d+em/.test(c)?parseInt(c,10)*i:/\d+px/.test(c)?parseInt(c,10):c;o[h]=parseInt(o[c],10)}}if(s>1)for(;s--;)a(r[s]);else a(r[0])}}();"undefined"!=typeof e?e.extend(e.fn,{baseline:function(t){return a(this,t)}}):t.baseline=a}(window,window.jQuery||window.Zepto||void 0),$(document).ready(function(){$("img").not('[data-js="promo-book-img"] img').baseline(6),$('[data-js="primary-nav-btn"]').on("click",function(t){t.preventDefault(),$("body").toggleClass("nav-open"),$('[data-js="primary-nav-close"]').on("click",function(t){t.preventDefault(),$("body").removeClass("nav-open"),$('[data-js="primary-nav-close"]').off("click")})});var t=$('[data-js="share"]').attr("data-permalink"),e=encodeURIComponent($('[data-js="share"]').attr("data-title"));bitly(t,function(){$('[data-js="share-twitter"]').attr("href","https://twitter.com/share?text="+e+"%20-&url="+t+"&via=shayhowe&related=shayhowe"),$('[data-js="share-facebook"]').attr("href","http://www.facebook.com/sharer.php?u="+t),$('[data-js="share-google"]').attr("href","https://plus.google.com/share?url="+t)}),$('[data-js="share-twitter"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="share-facebook"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="share-google"]').click(function(){return window.open($(this).attr("href"),"sharer","toolbar=0,status=0,width=626,height=436"),!1}),$('[data-js="lesson"] h2').each(function(){var t=$(this).attr("id");$(this).append('<a class="lesson-anchor" data-js="lesson-anchor" href="#'+t+'">#'+t+"</a>"),$(this).hover(function(){$(this).children('[data-js="lesson-anchor"]').stop().css("display","inline-block").animate({opacity:"1"},150)},function(){$(this).children('[data-js="lesson-anchor"]').stop().animate({opacity:"0"},150,function(){$(this).css("display","none")})})})});