angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        return {
            restrict:'E',
            template:
            '<div class="menu">' +
                    '<div class="center">'+
                        '<ul>' +
                            '<li><a href="#">Strona glovna</a></li>' +
                            '<li><a href="#">O firmie</a></li>' +
                            '<li><a href="#">Projecty indywidualne</a></li>' +
                            '<li><a href="#">Realizacje</a></li>' +
                            '<li><a href="#">Kontakt</a></li>' +

                        '</ul>' +
            '<span class="footer-logo">Gotowe projecty domow:DOM.PI</span>'+
                    '</div>'+
            '</div>'
        }
    });
