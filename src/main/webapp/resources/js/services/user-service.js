angular
	
	.module('main')
	
	.service('UserService',['$http',
		function($http){
		
		this.getUser = function(){
			console.log('chamando getUser');
		}
		
		this.listUser = function(){
			console.log('chamando listUser novo');
		}
		
	}])