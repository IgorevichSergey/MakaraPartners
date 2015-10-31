angular.module('gradient.directive', [])
    .directive('gradientDirective', function(){
        return {
            restrict:'E',
            template:'<div class="gradient"><div class="container"><img class="header-logo" src="images/mak_logo.svg"></div></div><div class="container"><div class="gradient-sublime-text">Arhitekt i konstruktor</div></div>'
        }
    });