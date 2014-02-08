var phWidget = angular.module('phWidget', ['jQueryUISlider', 'scrollingSlideShow', 'ngTouch']);

phWidget.directive('phWidgetContainer', function(){
	return {
		restrict: 'A',
		templateUrl: 'hats-widget-template.html'
	};
});
