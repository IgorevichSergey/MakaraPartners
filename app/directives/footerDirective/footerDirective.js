angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict:'E',
            template:
            '<div class="menu">' +
                    '<div class="center">'+
                        '<ul>' +
                            '<li><a href="index.html">Strona glovna</a></li>' +
                            '<li><a href="firmPage.html">O firmie</a></li>' +
                            '<li><a href="projectPage.html">Projecty indywidualne</a></li>' +
                            '<li><a href="projectPage.html">Realizacje</a></li>' +
                            '<li><a href="kontaktPage.html">Kontakt</a></li>' +

                        '</ul>' +
            '<span class="footer-logo">Gotowe projecty domow:DOM.PI</span>'+
                    '</div>'+
            '</div>'
        }
    });
