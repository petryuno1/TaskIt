//core angular application code

'use strict';

var taskItApp = angular.module('taskitapp', ['ngRoute']);

taskItApp.controller('bodyController',['$scope', function($scope){
	$scope.masterList = [
		{'type': 'task', 'title': 'Test1', 'count' : 1, 'count-unfinished': 1 }	
		
	];
	
	
}]);