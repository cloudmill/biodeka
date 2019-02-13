// ready
'use strict';

$(document).ready(function () {

	$('.paroller').paroller();

	// svg
	function loader() {
		var p = document.querySelector('.progress__value'),
		    offset = 400;
		var offsetMe = function offsetMe() {
			if (offset < 0) offset = 400;
			p.style.strokeDashoffset = offset;
			offset--;
			requestAnimationFrame(offsetMe);
		};
		offsetMe();
	}
	if ($('.progress__value').length > 0) {
		setTimeout(function () {
			loader();
		}, 1000);
	}
	// svg

	$(function () {
		$('html').addClass('addAnimate');
		setTimeout(function () {
			$('html').addClass('addLoader');
		}, 1500);
	});

	// anchor
	$('.anchor').click(function () {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);

		return false;
	});
	// anchor

	// .page-searchm
	$('.page-searchm').click(function () {
		$(this).prev().toggleClass('active');
	});
	// .page-searchm

	// main-nav__item--parent
	$('.main-nav__item--parent > a').click(function () {
		var menuItem = $(this).parent().find('.sub-nav');
		$(this).parent().toggleClass('active');
		if (menuItem.hasClass('active')) {
			$('.sub-nav').slideUp().removeClass('active');
			menuItem.slideUp().removeClass('active');
		} else {
			$('.sub-nav').slideUp().removeClass('active');
			menuItem.slideDown().addClass('active');
		}
		return false;
	});
	// main-nav__item--parent

	// form
	$(".btn--js").on("click", function () {
		$(this).hide();
		$('.sent--js').show();
		$(this).parent().addClass('sent');
		$(this).parent().find('.form__group').css('opacity', 0);
		$(this).parent().find('h2').text('Спасибо. Мы свяжемся с Вами в ближайшее время.');
		return false; // TEMP
	});
	$(".sent--js").on("click", function () {
		$(this).hide();
		$('.btn--js').show();
		$(this).parent().removeClass('sent');
		$(this).parent().find('.form__group').css('opacity', 1);
		$(this).parent().find('h2').text('Оставьте заявку на консультацию');
		return false; // TEMP
	});
	// form

	// type file
	$(function () {
		var container = $('.files');
		var inner = $('.files .inner');
		var close = $('.files-close');
		var wrapper = $(".file_upload"),
		    inp = wrapper.find("input");
		var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;
		close.click(function () {
			$(this).prev().text('');
			$(this).parent().removeClass('show');
		}).click();
		inp.change(function () {
			var file_name = undefined;
			if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;else file_name = inp.val().replace("C:\\fakepath\\", '');
			if (!file_name.length) return;
			container.addClass('show');
			inner.text(file_name);
		}).change();
	});
	// type file

	// accordion
	$(".accordion").on("click", ".accordion-header", function () {
		$(this).toggleClass("active").next().slideToggle();
	});
	// accordion

	// adaptive menu
	$('.hamburger--js').click(function () {
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('active');
	});
	// adaptive menu

	// mask phone {maskedinput}
	$("[name=phone]").mask("+7 (999) 999-9999");
	// mask phone

	// slider {http://idangero.us/swiper/}
	var swiperMain = new Swiper('.swiper-main', {
		slidesPerView: 1,
		speed: 500,
		autoHeight: true,
		loop: true,
		autoplay: {
			delay: 4000
		},
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
		on: {
			lazyImageReady: function lazyImageReady() {
				if (!this.autoplay.running) {
					loader();
					this.params.autoplay = {
						delay: 4000,
						disableOnInteraction: true
					};
					this.autoplay.start();
				}
			}
		}
	});
	swiperMain.on('slideChange', function () {
		loader();
	});
	var swiperReview = new Swiper('.swiper-review', {
		slidesPerView: 2,
		preventClicksPropagation: false,
		preventClicks: false,
		touchRatio: 0,
		spaceBetween: 10,
		speed: 500,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-btnR-next',
			prevEl: '.swiper-btnR-prev'
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
				touchRatio: 1
			}
		}
	});
	var swiperSert = new Swiper('.swiper-sert', {
		slidesPerView: 4,
		spaceBetween: 10,
		speed: 500,
		autoHeight: true,
		touchRatio: 0,
		preventClicksPropagation: false,
		preventClicks: false,
		navigation: {
			nextEl: '.swiper-btnS-next',
			prevEl: '.swiper-btnS-prev'
		},
		breakpoints: {
			767: {
				slidesPerView: 'auto',
				centeredSlides: true,
				touchRatio: 1
			},
			1300: {
				slidesPerView: 3,
				spaceBetween: 0,
				touchRatio: 0
			}
		}
	});
	var swiperProd = new Swiper('.swiper-prod', {
		autoplay: {
			delay: 4000
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
		on: {
			lazyImageReady: function lazyImageReady() {
				if (!this.autoplay.running) {
					loader();
					this.params.autoplay = {
						delay: 4000,
						disableOnInteraction: true
					};
					this.autoplay.start();
				}
			}
		}
	});
	swiperProd.on('slideChange', function () {
		loader();
	});
	(function () {
		var breakpoint = window.matchMedia('(min-width:767px)');
		var mySwiper = undefined;
		var breakpointChecker = function breakpointChecker() {
			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {
				// clean up old instances and inline styles when available
				if (mySwiper !== undefined) mySwiper.destroy(true, true);
				// or/and do nothing
				return;
				// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {
					// fire small viewport version of swiper
					return enableSwiper();
				}
		};
		var enableSwiper = function enableSwiper() {
			mySwiper = new Swiper('.swiper-blog', {
				loop: true,
				slidesPerView: 'auto',
				navigation: {
					nextEl: '.swiper-btn-next',
					prevEl: '.swiper-btn-prev'
				},
				a11y: true,
				keyboardControl: true,
				grabCursor: true

			});
		};
		// keep an eye on viewport size changes
		breakpoint.addListener(breakpointChecker);
		// kickstart
		breakpointChecker();
	})();
	/* IIFE end */
	// slider

	// select {select2}
	// $('select').select2({});
	// select

	// popup {magnific-popup}
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.popup-modal').magnificPopup({
		type: 'inline'
	});
	// popup

	//tabs
	$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
		if ($('.wherebuyPage #tab-2').hasClass('current')) {
			$('.mainTitle').hide();
		} else {
			$('.mainTitle').show();
		}
		$("#" + tab_id).addClass('current');

		$(".paroller").paroller({ factor: 0.2, type: 'foreground' });
	});
	//tabs

	//.wherebuyPage-list
	$('.wherebuyPage-list--js a').click(function () {
		var filter = $(this).data('filter');
		$('.wherebuyPage-list--js a').removeClass('active');
		$(this).addClass('active');
		$(".wherebuyPage-block_item").css("display", "none");
		$(".wherebuyPage-block_item[data-target=" + filter + "]").css("display", "flex");
		return false;
	});
	$('.wherebuyPage-select--js select').change(function () {
		var filter = this.value;
		$(".wherebuyPage-block_item").css("display", "none");
		$(".wherebuyPage-block_item[data-target=" + filter + "]").css("display", "flex");
		return false;
	});
	//.wherebuyPage-list

	// show more
	$('.blogs--js .is-col').hide();
	var size_li = $(".blogs--js .is-col").length;
	var x = 6;
	$('.blogs--js .is-col:lt(' + x + ')').show();
	$('#loadMore').click(function () {
		x = x + 6 <= size_li ? x + 6 : size_li;
		$('.blogs--js .is-col:lt(' + x + ')').show(500);
		$('#showLess').show();
		if (x == size_li) {
			$('#loadMore').hide();
		}
		return false;
	});
	// show more

	// range slider
	if ($('#skipstep').length) {
		(function () {
			var skipSlider = document.getElementById('skipstep');
			noUiSlider.create(skipSlider, {
				start: [1, 1],
				step: 1,
				range: {
					'min': 1,
					'max': 8
				},
				connect: true,
				pips: {
					mode: 'positions',
					values: [0, 14, 28.5, 43, 57, 71.5, 85.5, 100],
					density: 15
				},
				format: wNumb({
					decimals: 0,
					encoder: function encoder(a) {
						return Math.round(a * 100) / 100;
					}
				})
			});
			var skipValues = [document.getElementById('skip-value-lower'), document.getElementById('skip-value-upper')];
			skipSlider.noUiSlider.on('update', function (values, handle) {
				skipValues[handle].innerHTML = values[handle];
			});
			$('.resetFilter--js').click(function () {
				skipSlider.noUiSlider.reset();
				$('#item1').prop('checked', true);
			});
		})();
	}
	// range slider

	//sticky
	var $sticky = $('.sticky');
	var $stickyrStopper = $('.sticky-stopper');
	if (!!$sticky.offset()) {
		(function () {
			var generalSidebarHeight = $sticky.innerHeight();
			var stickyTop = $sticky.offset().top;
			var stickOffset = 0;
			var stickyStopperPosition = $stickyrStopper.offset().top;
			var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset - $sticky.height() / 3;
			var diff = stopPoint + stickOffset - $sticky.height() / 2.3;

			$(window).scroll(function () {
				var windowTop = $(window).scrollTop();
				if (stopPoint < windowTop) {
					$sticky.css({ position: 'absolute', top: diff });
				} else if (stickyTop < windowTop + stickOffset) {
					$sticky.css({ position: 'fixed', top: stickOffset });
				} else {
					$sticky.css({ position: 'absolute', top: 'initial' });
				}
			});
		})();
	}
	//sticky
});
// ready

// load
$(document).on('load', function () {});
// load

// scroll
$(window).on('scroll', function () {});
// scroll

// mobile sctipts
var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screenWidth <= 767) {}
// console.log(screenWidth);

// mobile sctipts

var mapStyles = [{
	"featureType": "administrative",
	"elementType": "labels.text.fill",
	"stylers": [{
		"color": "#444444"
	}]
}, {
	"featureType": "landscape",
	"elementType": "all",
	"stylers": [{
		"color": "#f2f2f2"
	}]
}, {
	"featureType": "poi",
	"elementType": "all",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "road",
	"elementType": "all",
	"stylers": [{
		"saturation": -100
	}, {
		"lightness": 45
	}]
}, {
	"featureType": "road.highway",
	"elementType": "all",
	"stylers": [{
		"visibility": "simplified"
	}]
}, {
	"featureType": "road.arterial",
	"elementType": "labels.icon",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "transit",
	"elementType": "all",
	"stylers": [{
		"visibility": "off"
	}]
}, {
	"featureType": "water",
	"elementType": "all",
	"stylers": [{
		"color": "#05a541"
	}, {
		"visibility": "on"
	}]
}];

function initMap() {
	var mapOptions = {
		center: new google.maps.LatLng(59.943422, 30.425995),
		zoom: 15,
		mapTypeControl: false,
		zoomControl: true,
		scrollwheel: false,
		styles: mapStyles
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	new google.maps.Marker({
		position: new google.maps.LatLng(59.943422, 30.425995),
		map: map,
		icon: "images/icons/bubble.png"
	});
}

function initMap1() {
	var locations = [[65.28328, 59.189066], [65.474315, 89.343395], [54.229288, 95.324528], [58.477819, 114.875375], [66.393739, 125.571915], [55.631852, 83.894213], [59.91701049, 40.3276515]];
	var mapOptions = {
		center: new google.maps.LatLng(65.477819, 89.875375),
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoomControl: true,
		scrollwheel: false,
		styles: [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#b5c1b9"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f9fffb"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#c5f2d5"
			}, {
				"visibility": "on"
			}]
		}]
	};
	var map = new google.maps.Map(document.getElementById("maplist"), mapOptions);
	var marker = undefined,
	    i = undefined;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map,
			icon: "images/icons/bubble.png"
		});
	}
}
//# sourceMappingURL=main.js.map
