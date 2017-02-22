angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','UserService'
		, function($scope , $rootScope , UserService ){

		$scope.filtro = "";
		
		$scope.data = {};
		UserService.listUser().then(function(response){
			$scope.data = response.data;
		});
		
	}])
	
	
	
	;