angular
	.module('main')
	.controller('UserAddController', ['$scope','$rootScope','UserService'
		, function($scope , $rootScope , UserService ){
		
		$scope.user = {};
		
		
		$scope.submitForm = function( ){
			
			console.log( $scope.user );
		}
		
	}])