var where = angular.module('where', []);


where.controller('whereController', ['$scope', function($scope){
		$scope.newPlace = '';
		$scope.places = [];

		$scope.addPlace = function(){
			$scope.places.push($scope.newPlace);
			alert($scope.places);
		};

		// $scope.visible = false;

		// $scope.toggle = function() {
		// 	$scope.visible = !$scope.visible;
		// };
}]);