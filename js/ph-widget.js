var phWidget = angular.module('phWidget', ['jQueryUISlider', 'scrollingSlideShow', 'ngTouch']);

phWidget.filter('costs', function(){
	return function(items, lowerBound, upperBound){
		return items.filter(function(item){
			return item.price >= lowerBound && item.price <= upperBound;
		});
	};
});

phWidget.filter('colored', function(){
	return function(items, colors){
		return items.filter(function(item){
			return colors.hasOwnProperty(item.color) && colors[item.color];
		});
	};
});

phWidget.filter('sized', function(){
	return function(items, lowerBound, upperBound){
		return items.filter(function(item){
			return item.size >= lowerBound && item.size <= upperBound;
		});
	};
});

phWidget.directive('phWidgetContainer', function(){
	return {
		restrict: 'A',
		templateUrl: 'hats-widget-template.html'
	};
});
