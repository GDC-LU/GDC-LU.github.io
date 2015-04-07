(function ($) {
    "use strict";

	/** Define Mobile Enviroment */
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
  	
    	
  	/** Mobile Menu */
  	if( isMobile.any() ){
  		$( '.menu li:has(ul)' ).doubleTapToGo();
  	}
	  	
  	/** Main Navigation Sticky */
  	if ( !isMobile.any() ) {
  		$('#main-nav').waypoint('sticky', {
  			handler : function (direction) {
  				if ( direction == "down" ) {
  					var offset = $('#site').offset();
  					$('#main-nav').css('left', offset.left );
  				} else {
  					$('#main-nav').css('left', 0 );
  				}
  				
  			}
  		});
  	}
  	
  	/** Contact Map */
  	if ( $('#map-holder').length > 0 ) {
		$('#map-container').width('100%').height('100%').gmap3({
			map:{
				options:{
						center: [51.5085300,-0.1257400],
						zoom:15,
						disableDefaultUI: true,
						draggable: false,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						mapTypeControl: false,
						mapTypeControlOptions: {},
						navigationControl: false,
						scrollwheel: false,
						streetViewControl: false,
						styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
				}
			},
			marker:{
				latLng:[51.5085300,-0.1257400]
			}
		});
  	}
  	
  	
  	/** Animations */
  	if ( $('.animated').length > 0 && ! isMobile.any() ) {
  		$('.animated').waypoint(function() {
  			var target = $(this);
  			if ( ! target.hasClass( 'animated_off' ) ) {
  				$(target).delay(150).velocity("transition.slideUpIn");
  				target.addClass( 'animated_off' );
  			}
  		},{
  			offset: $.waypoints('viewportHeight')
  		});
  	} else {
  		$('.animated').css('opacity', 1);
  	}
  	if ( $('.animated-children').length > 0 && ! isMobile.any() ) {
  		$('.animated-children').waypoint(function() {
  			var target = $(this);
  			if ( ! target.hasClass( 'animated_off' ) ) {
  				$('[class*="col-"]', target).children().velocity("transition.slideUpIn", { stagger: 100 });
  				target.addClass( 'animated_off' );
  			}
  		},{
  			offset: $.waypoints('viewportHeight')
  		});
  	} else {
  		$('[class*="col-"]', '.animated-children').css( 'opacity', 1 );
  	}
  	if ( ! isMobile.any() ) {
  		$('#footer').waypoint(function() {
  			if ( ! $('#footer').hasClass( 'animated_off' ) ) {
  				$('aside', '#footer').delay(50).velocity("transition.slideUpIn", { drag: true, stagger: 50 });
  				$('#footer').addClass( 'animated_off' );
  			}
  		},{
  			offset: $.waypoints('viewportHeight')
  		});
  	} else {
  		$('aside', '#footer').css( 'opacity', 1 );
  	}
  	
  	/** Mobile Navigation */
  	if ( isMobile.any() ) {
  		$('#toggle-secondary-nav').change(function () {
  			if ( $(this).is(':checked') ){
  				$('#toggle-main-nav').prop('checked', false);
  			}
  		});
  		$('#toggle-main-nav').change(function () {
  			if ( $(this).is(':checked') ){
  				$('#toggle-secondary-nav').prop('checked', false);
  			}
  		});
  	}
  	
  	
})(jQuery);
