/**
 * simple scrolling slideshow courtesy of http://stackoverflow.com/questions/16050564/horizontal-scroll-on-mousemove-wide-div-in-smaller-div-with-overflowhidden-c#answer-16061097
 */
var scrollingSlideShow = angular.module('scrollingSlideShow', []);

scrollingSlideShow.directive('phSlideShow', function(){
	return {
		restrict: 'A',
		link: function(scope, elm, attrs){
			var interval = null;
			var rebuild = function(){
				clearInterval(interval);
				var bl    = $(elm),
					th    = $('.thumbs', bl),
					blW   = bl.outerWidth(),
					blSW  = bl[0].scrollWidth,
					wDiff = (blSW/blW) - 1,  // widths difference ratio
					mPadd = 60,  // Mousemove Padding
					damp  = 20,  // Mousemove response softness
					mX    = 0,   // Real mouse position
					mX2   = 0,   // Modified mouse position
					posX  = 0,
					mmAA  = blW-(mPadd*2), // The mousemove available area
					mmAAr  = (blW/mmAA);    // get available mousemove fidderence ratio

				bl.mousemove(function(e) {
			        mX = e.pageX - this.offsetLeft;
			        mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
				});

				interval = setInterval(function(){
					posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"
					th.css({marginLeft: -posX*(wDiff) });
				}, 10);
			};
			$(document).ready(rebuild);
			$(window).resize(rebuild);
		}
	};
});