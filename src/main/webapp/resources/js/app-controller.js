angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','UserService'
		, function($scope , $rootScope , UserService ){

		$scope.filtro = "";
		
		$rootScope.data = [ 
			{ id : 0 , name : 'Amanda' } 
			, { id : 1 , name : 'Thiago' } 
			, { id : 1 , name : 'Bernardo' }
			, { id : 1 , name : 'Benjamin' }
			, { id : 1 , name : 'Roberto' }
			, { id : 1 , name : 'Clarisse' }
			, { id : 1 , name : 'Suzana' }
		];
		
	}])
	
	
	
	;