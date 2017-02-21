angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','$state'
		, function($scope , $rootScope , $state ){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
		$scope.data = [
			{ id : 10 , name : 'Usuario 10' }
			, { id : 11 , name : 'Usuario 11' }
			, { id : 12 , name : 'Usuario 12' }
		]
		
	}]);