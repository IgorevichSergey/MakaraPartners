angular.module('firmPage', [
    'footer.directive',
    'gradient.directive'
])

    .controller('firmPageCtrl', function(){
        this.text = firmPageConst.text;
        console.log('this', this);
    });
