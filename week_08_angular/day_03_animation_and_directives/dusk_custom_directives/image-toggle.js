
angular.module('image-toggle',[])
.directive('imageToggle', function(){ //<image-toggle>
    return {
        restrict:'E',
        scope: { // = @ &
            onImageUrl:'@on',
            offImageUrl:'@off',
            state:'=?'
        },
        controller: ['$scope','$element',function($scope,$element){
            $scope.toggleState=function(){
                $scope.state = !$scope.state;
            }

            $scope.$watch('state',function(){
                var whichImage = $scope.state ? $scope.onImageUrl : $scope.offImageUrl;
                $element.attr('src',whichImage)
            });
        }],
        replace: true,
        template:'<img src="" ng-click="toggleState()">'
    }
});