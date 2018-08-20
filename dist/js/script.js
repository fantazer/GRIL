$(document).ready(function(){



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
  	$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
    $(window).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
		$('.enter').removeClass('enter--open');
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

	//modals === end



	//mobile menu
	$('.head-toggle').click(function(event){
		event.stopPropagation();
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
			if($('.modal-layer').hasClass('modal-layer-show')){
				closeModal();
			}
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
				//$('body').css('paddingTop',heightHeader);
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