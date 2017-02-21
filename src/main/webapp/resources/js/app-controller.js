angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','$state'
		, function($scope , $rootScope , $state ){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
	}]);