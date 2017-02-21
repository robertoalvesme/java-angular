angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','$state', '$http' , 'UserService'
		, function($scope , $rootScope , $state , $http , UserService ){
		
		// console.log('entrou no app controller')
		
		$rootScope.variavel = { nome : 'oi' };
		
		// Chamar o service
		UserService.listUser();
		
		$scope.filtro = "";
		
		$scope.data = [ 
			{ id : 0 , name : 'Amanda' } 
			, { id : 1 , name : 'Thiago' } 
			, { id : 1 , name : 'Bernardo' }
			, { id : 1 , name : 'Benjamin' }
			, { id : 1 , name : 'Roberto' }
			, { id : 1 , name : 'Clarisse' }
			, { id : 1 , name : 'Suzana' }
		];
		
		/*
		$http.get('protected/rest/user/list')
			.success(function(users){
				console.log( users );
				$scope.data = users;
			});
		*/
		
	}]);