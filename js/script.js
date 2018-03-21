(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
});

$(document).ready(function(){
	
	


var header = $('.mainHeader'),
	pos = header.offset();
	
	header.css({ display: 'none' });

	$(window).scroll(function(){
		if($(this).scrollTop() > pos.top+20 && header.hasClass('default')){
			header.fadeOut('fast', function(){
				$(this).removeClass('default').addClass('switchedHeader').slideDown(200);
			});
		} else if($(this).scrollTop() <= pos.top+20 && header.hasClass('switchedHeader')){
			header.slideUp(200, function(){
				$(this).removeClass('switchedHeader').addClass('default').slideUp(200);
			});
		}
});






//------------------------------------- Navigation setup ------------------------------------------------//

$('a.scroll').smoothScroll({
        speed: 800,
        offset: -85
});



$('.mainNav li').on('mouseover', function(){
	
	$(this).children('ul.dropDown').stop(true,true).fadeIn(200);
	$(this).children('ul.dropDown').css( "display", "block" );
	
}).on('mouseleave', function(){
	$(this).children('ul.dropDown').stop(true,true).fadeOut(200);
});

		
		
//------------------------------------- End navigation setup ------------------------------------------------//




//---------------------------------- Main slider setup-----------------------------------------//


$('.mainSlider').flexslider({
	animation: "fade",
	slideshow: true,
	directionNav:false,
	controlNav: true
});




if (!(/android|blackberry|windows phone|iphone|ipad|ipod/i).test(navigator.userAgent.toLowerCase())) {
		
$(window).scroll(function(){
	var scrolling = $(window).scrollTop();
	if($(window).scrollTop() < $('.mainSlider').outerHeight()){
		$('.mainSlider .slidesInner').css('opacity',(1-(scrolling/300)));
		$('.mainSlider').css({transform: "translate3d(0, "+ scrolling/2+"px, 0)"});
		
		
		
	}
});


}

//---------------------------------- End main slider setup-----------------------------------------//





//---------------------------------- Single page header-----------------------------------------//

if (!(/android|blackberry|windows phone|iphone|ipad|ipod/i).test(navigator.userAgent.toLowerCase())) {


$('.hSingleHeight').css('height',420);
$('.headerSingle').next().css('margin-top',420);

}


//---------------------------------- End single page header-----------------------------------------//



//---------------------------------- Parallax-----------------------------------------//

$(".clients,  .process").parallax("100%", 0.3);
$(".facts").parallax("100%", 0.3);
$(".testimonials").parallax("100%", 0.3);
$(".socials").parallax("100%", 0.3);


//---------------------------------- End parallax -----------------------------------------//



//---------------------------------- Site slider-----------------------------------------//


$('.slider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
	controlNav: true
});



$('.clientSlider').flexslider({
	animation: "slide",
	slideshow: true,
	directionNav:false,
 	itemWidth: 53,
    itemMargin: 0,
    minItems: 2,
    maxItems: 6,
	controlNav: false
});


//---------------------------------- End site slider-----------------------------------------//



//---------------------------------- Facts animation-----------------------------------------//

$('.facts').appear(function() {
	$(".count").each(function() {
	var counter = $(this).html();
	$(this).countTo({
		from: 0,
		to: counter,
		speed: 2000,
		refreshInterval: 10,
		});
	});
});

//----------------------------------  End facts animations -----------------------------------------//



//--------------------------------- Tabs and accordion --------------------------------//	

		$( "#tabs" ).tabs();
		$( "#accordion" ).accordion();
		var selectedEffect = $( "#effectTypes" ).val();
		var link = $("#button")
		var options = {};

			if ( selectedEffect === "slide" ) {
				options = { percent: 0 };
			} else if ( selectedEffect === "size" ) {
				options = { to: { width: 200, height: 60 } };
			}

			$( "#effect" ).toggle( selectedEffect, options, 500 );
			
//--------------------------------- End tabs and accordion --------------------------------//





//---------------------------------- Zoom images hover animation-----------------------------------------//


$('.servBtn a, a.smore').mouseenter(function(){
    	$(this).closest('#about').find('.servImg').css('transform', 'scale(1.3)');
    }).mouseleave(function(){
    	$(this).closest('#about').find('.servImg').css('transform', 'scale(1.1)');
});


$(' .workBtn a, a.pmore').mouseenter(function(){
    	$(this).closest('#about').find('.workImg').css('transform', 'scale(1.3)');
    }).mouseleave(function(){
    	$(this).closest('#about').find('.workImg').css('transform', 'scale(1.1)');
});


$('a.amore').mouseenter(function(){
    	$(this).closest('.heroBottom').find('.heroBImg').css('transform', 'scale(1.3)');
    }).mouseleave(function(){
    	$(this).closest('.heroBottom').find('.heroBImg').css('transform', 'scale(1.1)');
});


$('a.emore').mouseenter(function(){
    	$(this).closest('.errHolder').find('.errImg').css('transform', 'scale(1.3)');
    }).mouseleave(function(){
    	$(this).closest('.errHolder').find('.errImg').css('transform', 'scale(1.1)');
});


$('a.wmore').mouseenter(function(){
    	$(this).closest('.widget').find('.bannerImg ').css('transform', 'scale(1.3)');
    }).mouseleave(function(){
    	$(this).closest('.widget').find('.bannerImg ').css('transform', 'scale(1.1)');
});




$('ul.ftPost li a, ul.catRecents li a').mouseenter(function(){
    	$(this).find('span').css('marginLeft', 7);
    }).mouseleave(function(){
    	$(this).find('span').css('marginLeft', 0);
});





//---------------------------------- End zoom hover images animation -----------------------------------------//




//---------------------------------- Portfolio -----------------------------------------//

$(".itemDesc, .projLink, .prodDesc").css({ opacity: 0 });

//--------------------------------- Hover animation for the elements of the portfolio --------------------------------//
				
	
$('.itemDesc, .projLink, .prodDesc').hover( function(){ 
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){ 
	$(this).stop().animate({ opacity: 0 }, 'slow'); 
});

	$('.itemDesc, .projLink, .prodDesc').hover(function () {
    var projDesc = $(this).find('.itemDesc, .latestDesc, .projLink, .prodDesc');
    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
    $(this).find('.itemDescInner').css('padding-top', offset -50);
	$(this).find('.projLinkInner').css('padding-top', offset -20);
	$(this).find('.prodDescInner').css('padding-top', offset -78);
});
			

//--------------------------------- End hover animation for the elements of the portfolio --------------------------------//

//-----------------------------------Initilaizing magnificPopup for the portfolio-------------------------------------------------//
$('.folio').magnificPopup({
					  type: 'image'
					});
					
					
					$('.popup-youtube, .popup-vimeo').magnificPopup({
						disableOn: 700,
						type: 'iframe',
						mainClass: 'mfp-fade',
						removalDelay: 160,
						preloader: false,

						fixedContentPos: false
					});

				
//-----------------------------------End initilaizing fancybox for the portfolio-------------------------------------------------//

	//--------------------------------- Sorting portfolio elements with quicksand plugin  --------------------------------//
	
		var $portfolioClone = $('.portfolio').clone();

		$('.filter a').click(function(e){
			e.preventDefault();
			$('.filter li').removeClass('current');	
			var $filterClass = $(this).parent().attr('class');
			if ( $filterClass == 'all' ) {
				var $filteredPortfolio = $portfolioClone.find('li');
			} else {
				var $filteredPortfolio = $portfolioClone.find('li[data-type~=' + $filterClass + ']');
			}
			$('.portfolio').quicksand( $filteredPortfolio, { 
				duration: 800,
				easing: 'easeInOutQuad' 
			}, function(){
					$('.itemDesc').hover( function(){ 
						$(this).stop().animate({ opacity: 1 }, 'slow');
					}, function(){ 
						$(this).stop().animate({ opacity: 0 }, 'slow'); 
					});
					
						$('.itemDesc').hover(function () {
					    var projDesc = $(this).find('.itemDesc');
					    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
					    $(this).find('.itemDescInner').css('padding-top', offset -50);
					});
					
					


//------------------------------ Reinitilaizing fancybox for the new cloned elements of the portfolio----------------------------//


			
			$('.folio').magnificPopup({
								  type: 'image'
								});


								$('.popup-youtube, .popup-vimeo').magnificPopup({
									disableOn: 700,
									type: 'iframe',
									mainClass: 'mfp-fade',
									removalDelay: 160,
									preloader: false,

									fixedContentPos: false
								});


//-------------------------- End reinitilaizing fancybox for the new cloned elements of the portfolio ----------------------------//

			});


			$(this).parent().addClass('current');
			e.preventDefault();
		});

//--------------------------------- End sorting portfolio elements with quicksand plugin--------------------------------//


//---------------------------------- End portfolio-----------------------------------------//





//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){ 

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form, .replyForm form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contactForm form, .replyForm form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
			
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//



//--------------------------------- Mobile menu --------------------------------//


var mobileBtn = $('.mobileBtn');
	var nav = $('.mainNav');
	var navHeight= nav.height();

$(mobileBtn).click(function(e) {
		e.preventDefault();
		nav.slideToggle();


});

$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}

});



//--------------------------------- End mobile menu --------------------------------//



//--------------------------------- Twitter feed --------------------------------//


jQuery(".tweets").tweet({
  join_text: false,
  username: "BenaissaGhrib", // Change username here
  modpath: './twitter/',
  avatar_size: false,
  count: 2,
  auto_join_text_default: ' we said, ',
  auto_join_text_ed: ' we ',
  auto_join_text_ing: ' we were ',
  auto_join_text_reply: ' we replied to ',
  auto_join_text_url: ' we were checking out ',
  loading_text: 'Loading tweets...'

});



//--------------------------------- End twitter feed --------------------------------//




//--------------------------------- Random images-------------------------------//


$(function() {
    var randomImg = ['r1.jpg', 'r2.jpg', 'r3.jpg'];
    $('.headerSingle').css({'background-image': 'url(images/teaserImages/' + randomImg[Math.floor(Math.random() * randomImg.length)] + ')'});
}); 
       

//--------------------------------- End random images--------------------------------//



//---------------------------------- Instagram feed -----------------------------------------//

var instaFeed = new Instafeed({
        get: 'user',
        userId: '305801553',
        accessToken: '305801553.1677ed0.3d872300c10c4ff687868875ee8abc5d',
		limit: 8,
		template: '<li><a href="{{link}}"><img src="{{image}}"/></a></li>'
    });
instaFeed.run();


//---------------------------------- End instagram feed -----------------------------------------//



//--------------------------------- Counter--------------------------------//
var myDate = new Date(); 
myDate = new Date(myDate.getFullYear() + 1, 12-11, 10); 
$('.counter').countdown({until: myDate}); 
//--------------------------------- End counter--------------------------------//




//---------------------------------- Text animation -----------------------------------------//

$(".rotate, .rotateP").textrotator({
        animation: "fade",
		separator: ",",
    	speed: 3000
});

//---------------------------------- End text animation -----------------------------------------//



});


})(jQuery);
