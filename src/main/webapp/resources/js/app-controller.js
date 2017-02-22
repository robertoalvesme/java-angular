angular
	
	.module('main')
	
	.controller('AppController',['$scope','$rootScope','UserService'
		, function($scope , $rootScope , UserService ){

		$scope.filtro = "";
		
		$scope.data = {};
		UserService.listUser().then(function(response){
			$scope.data = response.data;
		});
		
		$scope.userPointCharts= {
				chart: {
					caption: "Pontos por usuário",
					theme: "ocean"
				},
			data: []
		};

		UserService.getUserPoints().then(function(response){
			$scope.userPointCharts= {
				data: response.data.users
			};
		});
		
		
	}])
	
	
	
	;