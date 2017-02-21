<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html ng-app="main">
<head>
<!-- <base href="/">  -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/4.0.2/ui-grid.css" />
<link rel="stylesheet" href="<c:url value='/resources/css/effects.css' />" />

</head>
<body ng-controller="AppController">

	<div class="container">
		<section id="main">
			<ng-view></ng-view>
		</section>
	</div>
	
	
	<!-- See dependencies at https://cdnjs.com/libraries/angular.js/1.3.13 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.13/angular.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.13/angular-animate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.13/angular-route.min.js"></script>
	
	<!-- Directives -->
	<script src="<c:url value='/resources/js/directives/my-directive.js' />"></script>
	
	<!-- Definições -->
	<script src="<c:url value='/resources/js/app-module.js' />"></script>
	<script src="<c:url value='/resources/js/app-router.js' />"></script>
	
	<!-- Services -->
	<script src="<c:url value='/resources/js/services/user-service.js' />"></script>
	
	<!-- Controllers -->
	<script src="<c:url value='/resources/js/app-controller.js' />"></script>
	
</body>
</html>
