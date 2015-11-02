angular.module('main', [])
    .factory('mainFactory', function(){
        var _setHeight = function(_element){
            var _window_height = $(window).height();
            var _footer_height = $('footer-directive').height();
            var _textBlock_position = $(_element).offset().top;
            $(_element).css('height', _window_height-(_footer_height+_textBlock_position+10)+'px');
        };
        var _setVertical = function(_parentElement, _childElement){
            var paddingTop = ((_parentElement.height() -_childElement.height())/2)/1.2;
            $(_childElement).css('paddingTop', paddingTop+'px');
        };
        return {
            setHeight: _setHeight,
            setVertical: _setVertical
        }
    });