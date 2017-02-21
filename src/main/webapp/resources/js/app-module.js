angular.module('app.router', ['ngRoute']);

//Definir aqui quais aplicações e nossa aplicação main vai usar
angular.module('main',[
	'myDirective'
	, 'ngAnimate'
	, 'app.router'
]);