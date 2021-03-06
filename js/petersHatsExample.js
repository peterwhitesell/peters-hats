var petersHats = angular.module('petersHats', ['phWidget']);
// var petersHats = angular.module('petersHats', []);

function PetersHatsCtrl($scope){
	$scope.hats = [
		{
			"name": "Bowler Hat",
			"imageSrcFull": "img/hats/bowler_full.jpg",
			"imageSrcThumbnail": "img/hats/bowler_thumbnail.jpg",
			"size": 7,
			"price": 22,
			"color": "black"
		},
		{
			"name": "Antique Mens Driver Felt Cap",
			"imageSrcFull": "img/hats/driver-cap_full.jpg",
			"imageSrcThumbnail": "img/hats/driver-cap_thumbnail.jpg",
			"size": 8,
			"price": 35,
			"color": "brown"
		},
		{
			"name": "Black Fedora Hat",
			"imageSrcFull": "img/hats/fedora_full.jpg",
			"imageSrcThumbnail": "img/hats/fedora_thumbnail.jpg",
			"size": 8,
			"price": 16,
			"color": "black"
		},
		{
			"name": "Leprechaun Hat",
			"imageSrcFull": "img/hats/leprechaun_full.jpg",
			"imageSrcThumbnail": "img/hats/leprechaun_thumbnail.jpg",
			"size": 10,
			"price": 15,
			"color": "green"
		},
		{
			"name": "Pink Sun Hat",
			"imageSrcFull": "img/hats/sun_full.jpg",
			"imageSrcThumbnail": "img/hats/sun_thumbnail.jpg",
			"size": 4,
			"price": 10,
			"color": "pink"
		}
	];

	$scope.selected = $scope.hats[0];
	$scope.priceRange = {
		low: 0,
		high: 50
	};
	$scope.sizeRange = {
		low: 4,
		high: 10
	};
	$scope.colors = {
		options: [
			'pink',
			'green',
			'black',
			'brown'
		],
		pink: true,
		green: true,
		black: true,
		brown: true
	}
	$scope.select = function(hat){
		$scope.selected = hat;
	};
}