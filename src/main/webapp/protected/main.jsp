<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="main">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body ng-controller="AppController">
	
	
	
	<p>{{ variavel.nome }}</p>
	
	
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router.min.js'></script>
	
	<script src="<c:url value='/resources/js/app-module.js' />"></script>
	<script src="<c:url value='/resources/js/app-controller.js' />"></script>
	
</body>
</html>
