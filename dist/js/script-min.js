$(document).ready(function(){function e(){var e=window.navigator.userAgent,a=e.indexOf("MSIE ");if(a>0)return parseInt(e.substring(a+5,e.indexOf(".",a)),10);var t=e.indexOf("Trident/");if(t>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var i=e.indexOf("Edge/");return i>0&&parseInt(e.substring(i+5,e.indexOf(".",i)),10)}$(".slide-menu-btn__enter").click(function(){$(".head").removeClass("head--up"),$(".head-toggle").removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),d=250}),$(".slide-menu-btn--town").click(function(){$(this).hide(),$(".slide-menu__town").removeClass("hidden")}),$(".slide-menu__town .select-city__el").click(function(){var e=$(this).find(".sytle-input-text").text();$(".slide-menu-btn__text-val").text(e),$(".slide-menu__town").addClass("hidden"),$(".slide-menu-btn--town").show()}),$(".history-card").click(function(){var e=$(this);e.find(".history-card__wrap").slideUp(600),e.find(".history-info").slideDown(600)}),$(".user__val-edit").click(function(){var e=$(".user__val-text").text();$(".user__val-input").removeClass("hidden").find(".input-name").val(e),$(".user__val-info").addClass("hidden")}),$(".user__val-send").click(function(){var e=$(".input-name").val();$(".user__val-text").text(e),$(".user__val-input").addClass("hidden"),$(".user__val-info").removeClass("hidden")});var a=$(".panel-bar__el-progres").data("bar");$(".panel-bar__el-progres").css("width",a+"%");var t=$(".footer-main-wrap").offset().top;$(document).scroll(function(e){var a=$(this).scrollTop()+680;a>=t?$(".panel-fixed").addClass("panel-fixed--true"):$(".panel-fixed").removeClass("panel-fixed--true")}),$(".check-el--agree").click(function(){$(this).find("input").is(":checked")?$(".panel-get").removeClass("btn--disable"):$(".panel-get").addClass("btn--disable")}),$(".order-tab__el").click(function(){$(this).hasClass("order-tab__el--active")||($(".order-tab__el").removeClass("order-tab__el--active"),$(this).addClass("order-tab__el--active"));var e=$(this).data("tab");$(".order-cont__el").each(function(){$(this).data("tab")===e?$(this).removeClass("hidden"):$(this).addClass("hidden")})}),$(".payment-card__el").click(function(){$(".payment-card__el").removeClass("payment-card__el--active"),$(this).addClass("payment-card__el--active")}),$(".payment__type__el ").click(function(){"card"===$(this).data("tab")?$(".payment__type-cont").removeClass("hidden"):$(".payment__type-cont").addClass("hidden")}),$(".select-beauty").niceSelect(),$(".range").ionRangeSlider({min:10,max:100,postfix:" баллов",prefix:"Списать "}),$(".icr-btn").click(function(){$(this).addClass("hidden"),$(this).next(".elements-icr-block").removeClass("hidden")}),$(".incr__minus.incr--one").click(function(){var e=$(this).parent().find(".incr__val span"),a=parseInt(e.html())-1;a=a<1?0:a,e.html(a),a<1&&($(this).closest(".basket-list__el").slideUp(),$(this).closest(".elements-icr-block").addClass("hidden"),$(this).closest(".incr__get-wrap").find(".icr-btn").removeClass("hidden"),a=1,e.html(a))}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),a=parseInt(e.html())+1;a=a>100?100:a,e.html(a)}),$(".basket-list__remove").click(function(){$(this).closest(".basket-list__el").slideUp()});var s=function(e){$("."+e).click(function(){$(this).parent().find("."+e).removeClass(e+"--active"),$(this).addClass(e+"--active")})};s("pizza__size-el"),s("pizza__dough-el"),$(".slider").slick({slidesToShow:1,autoplay:!0,speed:500,vertical:!1,arrows:!1}),$(".review-slider").slick({slidesToShow:1,autoplay:!0,speed:500,vertical:!1,arrows:!1,dots:!0}),$(".modal-content").click(function(e){e.stopPropagation()});var i=0,n=function(){return $(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),i=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-i,width:"100%"}),i},l=function(){console.log("scrollPos",i),$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}),$(window).scrollTop(i),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")},o=function(e){n(),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var a=$(window).height();$(".modal-filter").height(a),$(".modal-wrap").css("height",a),$(".modal-wrap").css("minHeight",a)};$(".modal-get").click(function(){var e=$(this).data("modal");o(e)}),$(".modal-layer , .modal-close").click(function(){l()}),$(".head-toggle").click(function(e){e.stopPropagation(),$(".head").toggleClass("head--up"),$(this).toggleClass("head-toggle--open"),$(".slide-menu").toggleClass("slide-menu--open"),$(".modal-layer").hasClass("modal-layer-show")?l():n(),d=0}),$(".slide-menu").on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(".head").removeClass("head--up"),$(this).removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),d=250});var d=250,r=$(".head").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=d?($("body").css("paddingTop",r),$(".head").addClass("shrink")):($("body").css("paddingTop",0),$(".head").removeClass("shrink"))}),$(window).resize(function(){r=$(".head").height()}),$(".upload-btn").change(function(){if(this.files&&this.files[0]){$(".upload-img").append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');var e=$(".upload-img .upload-img__el:last"),a=new FileReader;a.onload=function(){e.attr("style"," background-image:url( "+a.result+") ")},a.readAsDataURL(this.files[0])}}),$(".upload-img__el").click(function(){$(this).remove()}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,a){"use strict";var t="img/pack.html",s=1;if(!a.createElementNS||!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var i,n,l="localStorage"in e&&null!==e.localStorage,o=function(){a.body.insertAdjacentHTML("afterbegin",n)},d=function(){a.body?o():a.addEventListener("DOMContentLoaded",o)};if(l&&localStorage.getItem("inlineSVGrev")==s&&(n=localStorage.getItem("inlineSVGdata")))return d(),!0;try{i=new XMLHttpRequest,i.open("GET",t,!0),i.onload=function(){i.status>=200&&i.status<400&&(n=i.responseText,d(),l&&(localStorage.setItem("inlineSVGdata",n),localStorage.setItem("inlineSVGrev",s)))},i.send()}catch(r){}}(window,document);