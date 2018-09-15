$(document).ready(function() {
	var $fullpageWrapp = $('#fullpage-wrapp');
	$fullpageWrapp.fullpage({
		//Navigation
		menu: '#menu',
		anchors:['home', 'about', 'portfolio', 'contact'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['home', 'about', 'portfolio', 'contact'],
		//Scrolling
		css3: true,
		scrollingSpeed: 600,
		fitToSectionDelay: 600,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		normalScrollElements: '#element1, .element2',
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		//Design
		controlArrows: true,
		verticalCentered: false,
		fixedElements: '.square__center, .view__box',
		responsiveWidth: 846,

		slideSelector: '.slide',


        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            /*
            if(index == 2){
				$('.square__center').addClass('visible').removeClass('hidden');				
            } else{
                $('.square__center').removeClass('visible').addClass('hidden'); 
            }  
            */

        	console.log(index);
            if (index == 1 || index == 2 || index == 3) {
            	$('.view__box').text('1 / '+ index +'');
            }
        },

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
         	console.log(slideIndex); 
         	if (index == 1 || index == 2) {
         		$('.view__box--slide').text();
        	} else {
        		$('.view__box--slide').text(slideAnchor);
        	}
        },

        onLeave: function(index, nextIndex, direction){
            function rotateBox(rot) {
            	$('.square__center').css({
		          	'-webkit-transform':'rotate('+ rot +'deg)',
		          	'-ms-transform':'rotate('+ rot +'deg)',
		          	'transform': 'rotate('+ rot +'deg)'            		
            	});            	
            }

            if (nextIndex == 1) {
				rotateBox(45);
            }

            if (nextIndex == 2) {
            	rotateBox(135);
            }  
            if (nextIndex == 3) {
            	rotateBox(225);
            }            

        },
        
		//events
		//onLeave: function(index, nextIndex, direction){},
		//afterLoad: function(anchorLink, index){},
		//afterRender: function(){},
		//afterResize: function(){},
		//afterResponsive: function(isResponsive){},
		//afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		//onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


});






































































/*
$(window).on({
     load:function(){
     	$('')
     },
     resize:function(){

     },
     scroll:function(){

    }
});
*/