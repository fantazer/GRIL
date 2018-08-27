$(document).ready(function(){


	//slide menu enter
	$('.slide-menu-btn__enter').click(function(){
		$('.head').removeClass('head--up');
		$('.head-toggle').removeClass('head-toggle--open');
		$('.slide-menu').removeClass('slide-menu--open');
		shrinkHeader = 250
	});
	//slide menu enter===end
	//slide menu change town
	$('.slide-menu-btn--town').click(function(){
		$(this).hide();
		$('.slide-menu__town').removeClass('hidden');
	});
	$('.slide-menu__town .select-city__el').click(function(){
		var currentTown = $(this).find('.sytle-input-text').text();
		$('.slide-menu-btn__text-val').text(currentTown);
		$('.slide-menu__town').addClass('hidden');
		$('.slide-menu-btn--town').show();
	});
	//slide menu change town===end
	//history accord
	$('.history-card').click(function(){
		var current = $(this);
		current.find('.history-card__wrap').slideUp(600);
		//current.find('.history-card__wrap').addClass('history-card__wrap--active');
		current.find('.history-info').slideDown(600);
	});
	//history accord===end

	//edit user name
	$('.user__val-edit').click(function(){
		var name = $('.user__val-text').text();
		$('.user__val-input')
			.removeClass('hidden')
			.find('.input-name')
			.val(name);
			$('.user__val-info').addClass('hidden');
	});

	$('.user__val-send').click(function(){
		var changeName = $('.input-name').val();
		$('.user__val-text').text(changeName);
		$('.user__val-input').addClass('hidden');
		$('.user__val-info').removeClass('hidden')
	});
	//edit user name===end

	//progress-bar
		var pogressBar = $('.panel-bar__el-progres').data('bar');
		$('.panel-bar__el-progres').css('width', pogressBar + "%");
	//progress-bar===end


	//fixed on scroll
  var footer = $('.footer-main-wrap').offset().top;

  $(document).scroll(function (event) {
    var panel = $(this).scrollTop() + 680;
    if (panel >= footer) {
      $('.panel-fixed').addClass('panel-fixed--true');
    } else {
      $('.panel-fixed').removeClass('panel-fixed--true');
    }
  });
	//fixed on scroll==end

	//check agree
	$('.check-el--agree').click(function(){
		if($(this).find('input').is(':checked')){
			$('.panel-get').removeClass('btn--disable');
		}else {
			$('.panel-get').addClass('btn--disable');
		}
	});
	//check agree===end

	//order-tabs
	$('.order-tab__el').click(function(){
		if(!$(this).hasClass('order-tab__el--active')){
			$('.order-tab__el').removeClass('order-tab__el--active');
			$(this).addClass('order-tab__el--active');
		}
		var current = $(this).data('tab');
		$('.order-cont__el').each(function(){
			if($(this).data('tab')===current){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		})
	});

	$('.payment-card__el').click(function(){
		$('.payment-card__el').removeClass('payment-card__el--active')
		$(this).addClass('payment-card__el--active')
	});

	$('.payment__type__el ').click(function(){
		if($(this).data('tab')==='card'){
				$('.payment__type-cont').removeClass('hidden');
			}else{
				$('.payment__type-cont').addClass('hidden');
		}
	});
	//order-tabs===end

	//nice-select
	$('.select-beauty').niceSelect();
	//nice-select===end

	//range-slider
	$(".range").ionRangeSlider({
 		min:10,
 		max:100,
 		postfix: " баллов",
 		prefix: "Списать "
 	});
	//range-slider===end

	//increment field
	$('.icr-btn').click(function(){
		$(this).addClass('hidden');
		$(this).next('.elements-icr-block').removeClass('hidden');
	});
	$('.incr__minus.incr--one').click(function () {
				var $input = $(this).parent().find('.incr__val span');
				var count = parseInt($input.html()) - 1;
				count = count < 1 ? 0 : count;
				$input.html(count);
				if(count < 1 ){
					$(this).closest('.basket-list__el').slideUp();
					$(this).closest('.elements-icr-block').addClass('hidden');
					$(this).closest('.incr__get-wrap').find('.icr-btn').removeClass('hidden');
					count = 1;
					$input.html(count);
				}
	});

	$('.incr__plus').click(function () {
			var $input = $(this).parent().find('.incr__val span');
			var count = parseInt($input.html()) + 1;
			count = count > 100 ? 100 : count;
			$input.html(count);
	});
	//increment field end

	//remove basket
		$('.basket-list__remove').click(function(){
			$(this).closest('.basket-list__el').slideUp();
		});
	//remove basket===end


	//toggle size
	var toggleSize = function(el){
		$('.'+el).click(function(){
			$(this).parent().find('.'+el).removeClass(el+'--active');
			$(this).addClass(el+'--active');
		});
	};
	toggleSize('pizza__size-el');
	toggleSize('pizza__dough-el');
	//toggle size===end

	//main-slider
	$('.slider').slick({
		slidesToShow: 1,
		autoplay: true,
		speed: 500,
		vertical:false,
		arrows:false
	});

	$('.review-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		speed: 500,
		vertical:false,
		arrows:false,
		dots: true,
	});

	//main-slider===end



	//modals
	$('.modal-content').click(function(event){
		event.stopPropagation();
	});
	var scrollPos = 0;
	var openModal = function () {
	if(!$('.modal-layer').hasClass('modal-layer-show')){
		$('.modal-layer').addClass('modal-layer-show');
	}
	 scrollPos = $(window).scrollTop();
		$('body').css({
			overflow: 'hidden',
			position: 'fixed',
			overflowY: 'scroll',
			top : -scrollPos,
			width:'100%'
		});
		return scrollPos;
	};

	var closeModal = function () {
		console.log("scrollPos",scrollPos);
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix");
  	$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
    $(window).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
	};

	var initModal = function(el){
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal')===el){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);
		$('.modal-wrap').css('height',modalHeightCont );
		$('.modal-wrap').css('minHeight',modalHeightCont );
	}

	$('.modal-get').click(function (){
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function (){
		closeModal();
	});
	//modal===end

	//mobile menu
	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$('.head').toggleClass('head--up');
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		if($('.modal-layer').hasClass('modal-layer-show')){
			closeModal();
		}else{
			openModal();
		}
		shrinkHeader = 0
	});
	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
			/*if($('.modal-layer').hasClass('modal-layer-show')){
				closeModal();
			}*/
			$('.head').removeClass('head--up');
			$(this).removeClass('head-toggle--open');
			$('.slide-menu').removeClass('slide-menu--open');
			shrinkHeader = 250
	});
	//mobile menu===end

	//fixed menu
	var shrinkHeader = 250;
	var heightHeader=$('.head').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				$('.head').addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					$('.head').removeClass('shrink');
			}
	});

	$(window).resize(function(){
		heightHeader=$('.head').height();

	});
	//fixed menu===end

	function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

	console.log(detectIE());
	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG 
	//svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();
	 $(window).unload(function(){
		 localStorage.clear();
	 });
	// ==== clear storage end =====

	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/

})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );