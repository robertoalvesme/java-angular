angular
	
	.module('main')
	
	.service('UserService',['$http' ,
		function($http){
		
		this.getUser = function(){
			console.log('chamando getUser');
		}
		
		this.listUser = function(){
			return [
				{ id : 10 , name : 'Usuario 10' }
				, { id : 11 , name : 'Usuario 11' }
				, { id : 12 , name : 'Usuario 12' }
			];
		}
		
	}])