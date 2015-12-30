taskItApp.directive('taskitem', [function(){
    return {
        restrict : 'EAC',
        template: '<ng-include src="template" />',
        replace: true,
        link: function postLink(scope){
            if (scope.item.type == 'task'){
                scope.template = '/web/directives/taskDirective.html'
                 
            }
        }
        
    };
    
}]);

taskItApp.directive('user', [function(){
    return {
        restrict: 'EC',
        templateUrl: '/web/directives/userDirective.html',
        replace: true
    };    
}]);