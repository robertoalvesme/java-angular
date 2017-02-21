angular.module('app.router', ['ui.router']);

//Definir aqui quais aplicações e nossa aplicação main vai usar
angular.module('main',[
	'app.router'
]);