angular
	.module('app.router')
	.config(function($routeProvider){
		
		$routeProvider.when('/list' , { 
			templateUrl : 'resources/partials/index.html'
			, controller : 'AppController'
		})
		
	});