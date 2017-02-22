angular
	
	.module('main')
	
	.factory('UserService',['$http',
		function($http){
			return {
				getUser : function( userId ){
					var promisse = $http.get('protected/rest/user/' + userId );
					return promisse;
				}
				, listUser : function(){
					var promisse = $http.get('protected/rest/user/list');
					return promisse;
				}
				, addUser : function( user ){
					console.log('Adicionou o usuário');
					console.log(user);
				}
				, getUserPoints : function(){
					var promisse = $http.get('protected/rest/user/byPoints');
					return promisse;
				}
				
			}
	}])