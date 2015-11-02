angular.module('kontaktPage', [
    'main',
    'footer.directive',
    'gradient.directive'
])
    .controller('kontaktPageCtrl', function(mainFactory){
        var kontaktPage = $('.kontakt-page');
        var content = $('.kontakt-page .content');

        mainFactory.setHeight(kontaktPage);
        mainFactory.setVertical(kontaktPage, content, 1.2);

        $(window).resize(function(){
            mainFactory.setVertical(kontaktPage, content, 1.2);
            mainFactory.setHeight(kontaktPage);
        });
        this.show_aleks_number_function = function(){
            this.show_aleks_number = !this.show_aleks_number;
        };
        this.show_maria_number_function = function(){
            this.show_maria_number = !this.show_maria_number;
        }
    });