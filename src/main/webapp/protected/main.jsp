<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="main">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.2/ui-grid.css" />
<link rel="stylesheet" href="<c:url value='/resources/css/effects.css' />" />

</head>
<body ng-controller="AppController">
	
	
	<h1>Teste de listagem</h1>
	<div>
		<form>
			<input type="text" ng-model="filtro" />
		</form>
	</div>
	
	<div class="row">
		<my-panel ng-repeat="user in data | filter : filtro" class="fading col-md-5" title="{{ user.name }}">
			<p>Usuário {{user.id}}</p>
		</my-panel>
	</div>
	
	
	
	<div ui-grid="{ data: data }" class="myGrid"></div>
	
		
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.2/ui-grid.js'></script>
	
	<!-- Directives -->
	<script src="<c:url value='/resources/js/directives/my-directive.js' />"></script>
	
	<!-- Definições -->
	<script src="<c:url value='/resources/js/app-module.js' />"></script>
	
	<!-- Services -->
	<script src="<c:url value='/resources/js/services/user-service.js' />"></script>
	
	<!-- Controllers -->
	<script src="<c:url value='/resources/js/app-controller.js' />"></script>
	
</body>
</html>
