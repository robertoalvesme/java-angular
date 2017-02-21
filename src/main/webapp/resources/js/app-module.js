angular.module('app.router', ['ui.router','ui.grid']);

//Definir aqui quais aplicações e nossa aplicação main vai usar
angular.module('main',[
	'myDirective'
	, 'ngAnimate'
]);