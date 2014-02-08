/**
 * simple scrolling slideshow courtesy of http://stackoverflow.com/questions/16050564/horizontal-scroll-on-mousemove-wide-div-in-smaller-div-with-overflowhidden-c#answer-16061097
 */
var scrollingSlideShow = angular.module('scrollingSlideShow', ['ngTouch']);

scrollingSlideShow.directive('phSlideShow', ['$swipe', function($swipe){
	return {
		restrict: 'A',
		link: function(scope, elm, attrs){
			var interval = null;
			var bl = $(elm),
				th = $('.thumbs', bl),
				blW, blSW, wDiff, mPadd, damp, mX, mX2, posX, mmAA, mmAAr;
			
			var rebuild = function(){
				clearInterval(interval);
				th.css({marginLeft: 0});
				blW = bl.outerWidth();
				blSW = bl[0].scrollWidth;
				wDiff = (blSW/blW) - 1;  // widths difference ratio
				mPadd = 60;  // Mousemove Padding
				damp = 20;  // Mousemove response softness
				mX = 0;   // Real mouse position
				mX2 = 0;   // Modified mouse position
				posX = 0;
				mmAA = blW-(mPadd*2); // The mousemove available area
				mmAAr = (blW/mmAA);    // get available mousemove fidderence ratio

				interval = setInterval(function(){
					posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
					th.css({marginLeft: -posX*(wDiff) });
				}, 10);
			};
			bl.mousemove(function(e) {
		        mX = e.pageX - this.offsetLeft;
		        mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
			});

			var touchXStart;
			var touchXDelta = 0;
			$swipe.bind(elm, {
				'start': function(coords) {
					touchXStarth = coords.x;
				},
				'move': function(coords) {
					touchXDelta = coords.x - touchXStarth;
			        mX -= touchXDelta;
			        mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
				},
				'end': function(coords) {
					touchXDelta = 0;
					return;
				},
				'cancel': function(coords) {
					touchXDelta = 0;
					return;
				}
			});
			$(document).ready(rebuild);
			$(window).resize(rebuild);
			scope.$watchCollection('hats | costs:priceRange.low:priceRange.high | sized:sizeRange.low:sizeRange.high | colored:colors', function(a, b){
				rebuild();
			});
		}
	};
}]);