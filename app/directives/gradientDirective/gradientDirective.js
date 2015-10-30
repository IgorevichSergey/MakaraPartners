angular.module('gradient.directive', [])
    .directive('gradientDirective', function(){
        return {
            restrict:'E',
            template:'<div class="gradient"><img class="header-logo" src="images/mak_logo.svg"</div>'
        }
    });