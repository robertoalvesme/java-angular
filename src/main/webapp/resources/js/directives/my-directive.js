angular
	.module('myDirective',[])
	.directive('myPanel', function(){
		// DDO - Firective Definition Object
		var ddo = {};
		
		ddo.restrict = "AE"; // Attribute Element
		
		// Definido dados privados da diretiva
		ddo.scope = {
			title : '@' // Using @ indicates that the value has the same name of the attribute
			, subtitle : '@subtitle'
		}
		
		// Keep child itens from HTML into directive
		ddo.transclude = true;
		
		ddo.template = '<div><h3>{{title}}<small>{{subtitle}}</small></h3><div ng-transclude></div></div>';
		
		return ddo;
		
	});

;