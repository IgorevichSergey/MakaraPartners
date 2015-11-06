angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict:'E',
            scope:{
                footer:'='
            },
            controller: function(){
                var footer_height = $('.footer-block').height();
                var display_height = $(window).height();
                $('.footer-block').css('top', display_height-footer_height);
            },
            template:'<hr />'+
            '<div class="menu">' +
                        '<ul>' +
                            '<li ng-class="{\'active-tab\': footer === \'Glovna\'}" class="hide-footer-menu-mobile"><a href="index.html">Glovna</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'firmPage\'}" class="hide-footer-menu-mobile"><a href="firmPage.html">O firmie</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'Projecty\'}" class="hide-footer-menu-mobile"><a href="projectPage.html">Projecty</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'Realizacje\'}" class="hide-footer-menu-mobile"><a href="realithationPage.html">Realizacje</a></li>' +
                            '<li ng-class="{\'active-tab\': footer === \'kontaktPage\'}" class="hide-footer-menu-mobile"><a href="kontaktPage.html">Kontakt</a></li>' +
                            '<li class="footer-site-href"><a href="http://www.dom.pl/">Gotowe projekty domów: <img src="images/dompl.png" height="15px;"/></a></li>'+
                        '</ul>' +
            '</div>'

        }
    });
