var phWidget = angular.module('phWidget', []);

phWidget.directive('phWidgetContainer', function(){
	return {
		restrict: 'A',
		templateUrl: 'hats-widget-template.html'
	};
});
