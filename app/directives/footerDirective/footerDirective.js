angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict:'E',
            scope:{
                footer:'='
            },
            controller: function($scope){
                var footer_height = $('.footer-block').height();
                var display_height = $(window).height();
                $('.footer-block').css('top', display_height-footer_height);
            },
            template:'<hr />'+
            '<div class="menu">' +
                        '<ul>' +
                            '<li ng-class="{\'active-tab\': footer === \'Glovna\'}"><a href="index.html">Glovna</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'firmPage\'}"><a href="firmPage.html">O firmie</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'Projecty\'}"><a href="projectPage.html">Projecty</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'Realizacje\'}"><a href="realithationPage.html">Realizacje</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'kontaktPage\'}"><a href="kontaktPage.html">Kontakt</a></li>' +
                            '<li class="footer-site-href"><a href="http://www.dom.pl/">Gotowe projecty domow:DOM.PI</a></li>'+
                        '</ul>' +
            '</div>'

        }
    });
