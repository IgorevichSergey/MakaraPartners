angular.module('mapPage', [
    'main',
    'footer.directive',
    'gradient.directive',
    'googleMap'
])
    .controller('mapPageCtrl', function(){
        var _windowHeight = $(window).height();
        var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
        var _footer_directive = $('footer-directive').height();
        var _mapHeight = _windowHeight - (_gradient_directive + _footer_directive) - 300;
        $('.google-map-directive #map').css('height', _mapHeight+'px');

        $(window).resize(function(){
            var _windowHeight = $(window).height();
            var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
            var _footer_directive = $('footer-directive').height();
            var _mapHeight = _windowHeight - (_gradient_directive + _footer_directive) - 300;
            $('.google-map-directive #map').css('height', _mapHeight+'px');
        })
    });