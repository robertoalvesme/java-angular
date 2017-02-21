<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="main">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.2/ui-grid.css" />

</head>
<body ng-controller="AppController">
	
	
	<h1>Teste de listagem</h1>
	
	
	<div ui-grid="{ data: data }" class="myGrid"></div>
	
	
	<my-panel title="oi" subtitle="tudo bem?"><p>Funcionando</p></my-panel>
	
		
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
