//core angular application code

'use strict';

var taskItApp = angular.module('taskitapp', ['ngRoute']);

taskItApp.controller('bodyController',['$scope', function($scope){
	$scope.homeView = true; //default the condensor class toggle to home page
    
    $scope.masterList = [
		{ID: '001', type: 'task', description: 'this is a task item description', parent: 'tainer1', title: 'Test1', children : [], countUnfinished: 1, status: {statusText: 'open'}, dueDate: '01/01/2016', assignee: [{name:'user1'},{name:'user2'}] },
        {ID: '002', type: 'container', description: 'this is a container item', parent: '', title: 'Tainer1', children: ['002'], countUnfinished: 2,  status: {statusText: 'open'}, assignee: [{name: 'user1'},{name:'user2'}]},
        {ID: '003', type: 'task', description: 'this is another task item description', parent: 'tainer1', title: 'Test Two', children : [], countUnfinished: 0, status: {statusText: 'closed'}, dueDate: '01/02/2016', assignee: [{name:'user1'}] }	
		
	  ];
	
	
}]);