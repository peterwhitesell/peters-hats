var jQueryUISlider = angular.module('jQueryUISlider', []);

jQueryUISlider.directive('phSlider', function(){
	return {
		restrict: 'A',
		scope: {
			ngModelPair: '=ngModelPair',
			name: '@ngModelPair',
			label: '@phSliderLabel',
			min: '@phSliderMin',
			max: '@phSliderMax'

		},
		link: function(scope, elm, attrs){
			$(elm).find('.slider-control').slider({
				range: true,
				min: parseInt(attrs.phSliderMin),
				max: parseInt(attrs.phSliderMax),
				values: [scope.ngModelPair.low, scope.ngModelPair.high],
				slide: function( event, ui ){
					scope.ngModelPair.low = ui.values[0];
					scope.ngModelPair.high = ui.values[1];
					scope.$apply();
				}
			});
			return;
		},
		template: function(elem, attrs){
			var valueFilter = attrs.hasOwnProperty('phSliderFilterName') ? ' | ' + attrs.phSliderFilterName : '';
			return '<div class="slider-info"><span class="slider-label">{{label}}</span>: ' +
			'<span class="slider-low">{{ngModelPair.low' + valueFilter + '}}</span> - ' +
			'<span class="slider-high">{{ngModelPair.high' + valueFilter + '}}</span></div><div class="slider-control"></div>'
		}
	};
});
