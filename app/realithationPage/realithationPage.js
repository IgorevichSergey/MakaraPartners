angular.module('realithationPage', [
    'main',
    'footer.directive',
    'gradient.directive'
])
    .constant('galleryConfig', {
        data:[
            {img_src: 'images/projekty(gallery)/1.png',id:1},
            {img_src: 'images/projekty(gallery)/2.png',id:2},
            {img_src: 'images/projekty(gallery)/3.png',id:3},
            {img_src: 'images/projekty(gallery)/4.png',id:4},
            {img_src: 'images/projekty(gallery)/5.png',id:5},
            {img_src: 'images/projekty(gallery)/6.png',id:6},
            {img_src: 'images/projekty(gallery)/7.png',id:7},
            {img_src: 'images/projekty(gallery)/8.png',id:8},
            {img_src: 'images/projekty(gallery)/9.png',id:9},
            {img_src: 'images/projekty(gallery)/10.png',id:10},
            {img_src: 'images/projekty(gallery)/11.png',id:11}
        ]
    })
    .controller('realithationPageCtrl', function(galleryConfig){
        var self = this;
        var _window = $(window).height();
            var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
            var _footer_directive = $('footer-directive').height();
        var _slider = 100;
        if(_window > 700){
            $('.realization-content .center-block.gallery-page').css('paddingTop', 70+'px');
            $('.big-image img').css('height', _window -(240 + _gradient_directive + _footer_directive)+'px');
        } else if (_window < 700 && _window > 600){
            $('.realization-content .center-block.gallery-page').css('paddingTop', 50+'px');
            $('.big-image img').css('height', 200+'px');
        } else {
            $('.realization-content .center-block.gallery-page').css('paddingTop', 10+'px');
            $('.big-image img').css('height', 180+'px');
        }

        $(window).resize(function(){
            var _window = $(window).height();
            var _gradient_directive = $('gradient-directive .gradient').height() + $('gradient-directive .container').height();
            var _footer_directive = $('footer-directive').height();
            $('.realization-content .gallery').css('bottom', _footer_directive+'px');
            if(_window > 700){
                $('.realization-content .center-block.gallery-page').css('paddingTop', 70+'px');
                $('.big-image img').css('height', _window -(240 + _gradient_directive + _footer_directive)+'px');
            } else if (_window < 700 && _window > 600){
                $('.realization-content .center-block.gallery-page').css('paddingTop', 50+'px');
                $('.big-image img').css('height', 200+'px');
            } else {
                $('.realization-content .center-block.gallery-page').css('paddingTop', 10+'px');
                $('.big-image img').css('height', 180+'px');
            }
            //sorry ),=
        });
        self.style = {
            transform: 'translateX('+_slider+'px)'
        };
        self.gallery = galleryConfig.data;
        self.bigImage = self.gallery[6].img_src;
        self.imageSet = function(obj){
            self.bigImage = obj.img_src;
        };
        self.move = function(moveTo){
            if(moveTo == 'right'){
                _slider+=100;
                self.style.transform = 'translateX('+_slider+'px)';
            } else {
                _slider-=100;
                self.style.transform = 'translateX('+_slider+'px)';
            }
            //if(_slider === 0){
            //    $('.gallery-right-page').css('display', 'none');
            //} else {
            //    $('.gallery-right-page').css('display', 'block');
            //}
            //if(_slider <= -800){ // set this value to (-800...) if u will add photo.
            //    $('.gallery-left-page').css('display', 'none');
            //} else {
            //    $('.gallery-left-page').css('display', 'block');
            //}
            self.style.transition= 'all 0.5s';
        };
    });