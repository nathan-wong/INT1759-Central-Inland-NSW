
/**************************************************

					Animation

**************************************************/

function init() {

	// Background
	TweenLite.from("#blurred-image-container", 1, {opacity:.5, ease:Power2.easeOut});

	// Logo
	TweenLite.from("#logo", 1, {y:60, ease:Power2.easeOut, delay:.2});
	TweenLite.from("#logo", 1.3, {opacity:0, ease:Power2.easeOut, delay:.2});

	// H2 animation
	TweenLite.fromTo(".header h2 .first", 1, {opacity:0, scaleX:0, rotation:10}, {opacity:1, scaleX:1, rotation:.5, ease:Power2.easeOut, delay:.5});

	TweenLite.fromTo(".header h2 .second", 1,
		/* from */{opacity:0, scaleX:0, rotation:10},
		/* to */{opacity:1, scaleX:1, rotation:-4,
		ease:Power2.easeOut, delay:.8});


	// Scroll btn

	TweenLite.from("a.scroll", .5, {opacity:0, ease:Expo.easeInOut, delay:1.4});

	TweenMax.fromTo("a.scroll #arrow", .5,
		/* from */{y:-15},
		/* to */{y:-5,
		ease:Back.easeInOut, yoyo:true,  repeat:-1, repeatDelay:.5, delay:1.5});
}


/**************************************************

					Parallax

**************************************************/
$(document).ready(function() {
	var controller = $.superscrollorama();
	// individual element tween examples
	controller.addTween('#test', TweenMax.from( $('#test'), .5, {css:{opacity: 0}}));
});

/**************************************************

					Resize H2

**************************************************/

//TweenLite.to(".header h2", 1, {scale:0.5, ease:Elastic.easeOut, delay:2});

var stage = $(".header h2");
var stageParent = stage.parent();

function scaleStage (){
  stageWidth = stage.width();
  stageHeight = stage.height();
  parentWidth = stageParent.width();

  var desiredWidth = Math.round(parentWidth * 1);
  var rescale = (desiredWidth/stageWidth);

if (rescale > 0.6 && rescale < 1 ) {
  TweenMax.set(stage, {
    scale:rescale
  });
};
//  TweenMax.set(stageParent, {
//    height:stageHeight * rescale
//  });

//alert(rescale);

 }
//later add listeners for any resize or orientation change events
window.addEventListener('resize', scaleStage, false);
window.addEventListener('orientationchange', scaleStage, false);
//now call it immediately to scale it to the current screen
scaleStage();


/**************************************************

					Scroll

**************************************************/

/* http://blog.bassta.bg/2013/05/smooth-page-scrolling-with-tweenmax/ */

$(function(){

	var $window = $(window);		//Window object

	var scrollTime = 1;			//Scroll time
	var scrollDistance = 170;  //Distance. Use smaller value for shorter scroll and greater value for longer scroll

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5
			});

	});

});