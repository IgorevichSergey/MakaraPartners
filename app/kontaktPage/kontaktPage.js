angular.module('kontaktPage', [
    'footer.directive',
    'gradient.directive'
])
    .controller('kontaktPageCtrl', function(){
        this.show_aleks_number_function = function(){
            this.show_aleks_number = !this.show_aleks_number;
        };
        this.show_maria_number_function = function(){
            this.show_maria_number = !this.show_maria_number;
        }
    });