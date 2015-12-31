taskItApp.directive('taskitem', [function(){
    console.log("master item");
    return {
        restrict : 'EAC',
        template: '<ng-include src="template" />',
        replace: true,
        link: function postLink(scope){
            if (scope.item.type == 'task'){
                scope.template = '/web/directives/taskDirective.html';
                 
            } 
            else if (scope.item.type == 'container') {
                scope.template = '/web/directives/containerDirective.html';
            }
        }
        
    };
    
}]);

taskItApp.directive('childitem', [function(){
    console.debug("child item ");
    return {
        restrict : 'EAC',
        template: '<ng-include src="template" />',
        replace: true,
        scope: {
            child: '=',
            type: '@',
            title: '@'
        },
        link: function postLink(scope){
            if (scope.child.type == 'task'){
                scope.template = '/web/directives/taskDirective.html';
                 
            } 
            else if (scope.child.type == 'container') {
                scope.template = '/web/directives/containerDirective.html';
            }
            else if (scope.child.type == 'collaboration'){
                scope.template = '/web/directives/collaborationDirective.html';
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