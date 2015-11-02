angular.module('firmPage', [
    'main',
    'footer.directive',
    'gradient.directive'
])

    .controller('firmPageCtrl', function(mainFactory){
        mainFactory.setHeight('.firm-page .text-block');
        $(window).resize(function(){
            mainFactory.setHeight('.firm-page .text-block');
        });
    });
