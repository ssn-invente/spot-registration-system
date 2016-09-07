(function(){
    'use strict';
    angular.module('app',[])
    .controller('TabController', ['$scope', function($scope){
        $scope.tab = 1;
		$scope.select = function(index){
			$scope.tab = index;
        };
        $scope.isSelected = function(currentTab){
			return ($scope.tab === currentTab);
		};
    }])
})();