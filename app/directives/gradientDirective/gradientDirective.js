angular.module('gradient.directive', [])
    .directive('gradientDirective', function(){
        return {
            restrict:'E',
            template:'<div class="gradient"></div>' +
            '<div class="container">' +
            '<div class="center-block image-logo">' +
            '<img src="images/mak_logo.svg">' +
            '<div class="logo-description">Architekt i Konstruktor</div>'+
            '<div ng-click="show_menu = !show_menu" class="menu-toggle-btn"><img src="images/menu.svg"/></div>'+
            '</div></div>'+
            '<div ng-class="{\'show-menu\': show_menu}" class="menu">' +
            '<ul>' +
                '<li><div ng-click="show_menu = !show_menu"><img src="images/menu.svg" height="20px;"/></div></li>' +
                '<li ng-class="{\'active-tab\': currentPage === \'Glovna\'}"><a href="index.html">Glovna</a></li>' +
                '<li ng-class="{\'active-tab\': currentPage === \'firmPage\'}"><a href="firmPage.html">O firmie</a></li>' +
                '<li ng-class="{\'active-tab\': currentPage === \'Projecty\'}"><a href="projectPage.html">Projecty</a></li>' +
                '<li ng-class="{\'active-tab\': currentPage === \'Realizacje\'}"><a href="realithationPage.html">Realizacje</a></li>' +
                '<li ng-class="{\'active-tab\': currentPage === \'kontaktPage\'}"><a href="kontaktPage.html">Kontakt</a></li>' +
            '</ul>' +
            '</div>'
        }
    });