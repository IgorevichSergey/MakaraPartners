angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict:'E',
            template:'<hr />'+
            '<div class="menu">' +
                        '<ul>' +
                            '<li><a href="index.html">Strona glovna</a></li>' +
                            '<li><a href="firmPage.html">O firmie</a></li>' +
                            '<li><a href="projectPage.html">Projecty indywidualne</a></li>' +
                            '<li><a href="videoPage.html">Realizacje</a></li>' +
                            '<li><a href="kontaktPage.html">Kontakt</a></li>' +
                            '<li class="footer-site-href"><a href="kontaktPage.html">Gotowe projecty domow:DOM.PI</a></li>'+
                        '</ul>' +
            '</div>',
            controller: function(){
                var footer_height = $('.footer-block').height();
                var display_height = $(window).height();
                console.log('footer_height', footer_height);
                console.log('display_height', display_height);
                $('.footer-block').css('top', display_height-footer_height);
            }
        }
    });
