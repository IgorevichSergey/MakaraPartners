angular.module('gradient.directive', [])
    .directive('gradientDirective', function(){
        return {
            restrict:'E',
            template:'<div class="gradient"></div>' +
            '<div class="container">' +
            '<div class="center-block image-logo">' +
            '<img src="images/mak_logo.svg">' +
                '<div class="logo-description">description</div>'+
            '</div></div>'
        }
    });