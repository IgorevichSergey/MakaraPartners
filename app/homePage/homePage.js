angular.module('videoPage', [
    'footer.directive',
    'gradient.directive'
])
    .controller('videoPageCtrl', function(){
        var _windowHeight = $(window).height();
        var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
        var _footer_directive = $('footer-directive').height();
        var _containerheight = _windowHeight - (_gradient_directive + _footer_directive);
        $('.background-class-main .video-container').css('height', _containerheight+'px');
        $('.video-container video').css('height', _containerheight-40+'px');
        $('.video-container .center-block').css('paddingTop', 20+'px');

        $(window).resize(function(){
            var _windowHeight = $(window).height();
            var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
            var _footer_directive = $('footer-directive').height();
            var _containerheight = _windowHeight - (_gradient_directive + _footer_directive);
            $('.background-class-main .video-container').css('height', _containerheight+'px');
            $('.video-container video').css('height', _containerheight-40+'px');
            $('.video-container .center-block').css('paddingTop', 20+'px');
        })
    });