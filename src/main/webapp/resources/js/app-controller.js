angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','$state', 'UserService'
		, function($scope , $rootScope , $state , UserService ){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
		$scope.data = UserService.listUser(); 
		
		
		
	}]);