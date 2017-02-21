angular
	.module('myDirective',[])
	.directive('myPanel', function(){
		// DDO - Firective Definition Object
		var ddo = {};
		
		ddo.restrict = "AE"; // Attribute Element
		
		// Definido dados privados da diretiva
		ddo.scope = {
			title : '@' // Using @ indicates that the value has the same name of the attribute
		}
		
		// Keep child itens from HTML into directive
		ddo.transclude = true;
		
		ddo.templateUrl = 'resources/js/directives/my-panel.html';
		
		return ddo;
		
	});

;