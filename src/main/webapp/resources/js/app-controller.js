angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','$state', '$http' , 'UserService'
		, function($scope , $rootScope , $state , $http , UserService ){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
		// Chamar o service
		UserService.listUser();
		
		$scope.data = [ { id : 0 , name : 'usuario 0' } , { id : 1 , name : 'usuario 1' } ]
		
		/*
		$http.get('protected/rest/user/list')
			.success(function(users){
				console.log( users );
				$scope.data = users;
			});
		*/
		
	}]);