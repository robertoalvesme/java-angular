angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope',function($scope , $rootScope){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
	}]);