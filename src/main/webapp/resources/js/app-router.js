angular
	.module('app.router')
	.config(function($routeProvider , $locationProvider){
		
		// Provides here accessing without using # into URI
		$locationProvider.html5Mode(false);
		
		$routeProvider
			.when('/add' , { 
				templateUrl : 'resources/partials/add-users.html'
				, controller : 'UserAddController'
			})
			.when('/list' , { 
				templateUrl : 'resources/partials/list-users.html'
				, controller : 'AppController'
			})
			.otherwise({ redirectTo : '/list' });
		
	});