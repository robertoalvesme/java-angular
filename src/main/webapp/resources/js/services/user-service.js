angular
	
	.module('main')
	
	.factory('UserService',['$http',
		function($http){
			return {
				getUser : function(){
					console.log('chamando getUser');
				}
				, listUser : function(){
					var promisse = $http.get('protected/rest/user/list');
					return promisse;
				}
				, addUser : function( user ){
					console.log('Adicionou o usuário');
					console.log(user);
				}
			}
	}])